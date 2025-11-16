
import React from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

// --- Helper functions for audio processing ---

function decode(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

export const GenerativeMeditation: React.FC = () => {
  const { language, t } = useLanguage();
  const themes = React.useMemo(() => (translations[language] || translations.en).genThemes, [language]);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const durations = React.useMemo(() => [
    { label: t('durations.d1m'), value: 60 },
    { label: t('durations.d2m'), value: 120 },
    { label: t('durations.d3m'), value: 180 },
  ], [t]);

  const voices = React.useMemo(() => [
    { name: 'Kore', displayName: t('voices.calmFemale') },
    { name: 'Puck', displayName: t('voices.gentleMale') },
    { name: 'Zephyr', displayName: t('voices.brightFemale') },
    { name: 'Charon', displayName: t('voices.deepMale') },
    { name: 'Fenrir', displayName: t('voices.warmMale') },
  ], [t]);


  const [selectedTheme, setSelectedTheme] = React.useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = React.useState<number>(60);
  const [selectedVoice, setSelectedVoice] = React.useState<string>('Kore');
  const [generatedScript, setGeneratedScript] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const [audioBuffer, setAudioBuffer] = React.useState<AudioBuffer | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  
  const audioContextRef = React.useRef<AudioContext | null>(null);
  const audioSourceRef = React.useRef<AudioBufferSourceNode | null>(null);
  
  React.useEffect(() => {
    return () => {
      audioSourceRef.current?.stop();
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close();
      }
    };
  }, []);


  const handleGenerate = async () => {
    if (!selectedTheme) return;

    setIsLoading(true);
    setError(null);
    setGeneratedScript(null);
    setAudioBuffer(null);
    if (isPlaying) {
      audioSourceRef.current?.stop();
      setIsPlaying(false);
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      
      const durationInMinutes = selectedDuration / 60;
      const wordCount = durationInMinutes * 150;
      const prompt = t('genPrompt', durationInMinutes, wordCount, selectedTheme);
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      const script = response.text ?? '';
      if (!script) {
          throw new Error('Could not generate a meditation script.');
      }
      setGeneratedScript(script);

      const ttsResponse = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Say calmly and slowly: ${script}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: { voiceName: selectedVoice },
              },
          },
        },
      });

      const base64Audio = ttsResponse.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

      if (base64Audio) {
        if (!audioContextRef.current || audioContextRef.current.state === 'closed') {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        }
        const audioBytes = decode(base64Audio);
        const buffer = await decodeAudioData(audioBytes, audioContextRef.current, 24000, 1);
        setAudioBuffer(buffer);
      } else {
        throw new Error('Could not generate audio for the meditation.');
      }

    } catch (e) {
      console.error(e);
      setError(t('genError'));
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlayPause = () => {
    if (!audioContextRef.current || !audioBuffer) return;

    if (isPlaying) {
      audioSourceRef.current?.stop();
    } else {
      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }
      
      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContextRef.current.destination);
      source.onended = () => {
        setIsPlaying(false);
        audioSourceRef.current = null;
      };
      source.start();
      audioSourceRef.current = source;
      setIsPlaying(true);
    }
  };
  
  const handleStartOver = () => {
    setGeneratedScript(null);
    setAudioBuffer(null);
    setError(null);
    if (isPlaying) {
      audioSourceRef.current?.stop();
    }
    setIsPlaying(false);
    
    if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div ref={containerRef} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-4xl mx-auto scroll-mt-8">
      <div className="text-center">
        <div className="inline-block bg-teal-100 text-teal-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
          Powered by AI
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{t('genTitle')}</h2>
        <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
          {t('genSubtitle')}
        </p>
      </div>
      
      <div className="space-y-8">
        <div>
           <h3 className="text-lg font-medium text-slate-700 mb-4 text-center">{t('genSelectTheme')}</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {themes.map(theme => (
                <button
                  key={theme}
                  onClick={() => setSelectedTheme(theme)}
                  className={`px-5 py-2 text-sm md:text-base font-medium rounded-full transition-all duration-200 ${
                    selectedTheme === theme
                      ? 'bg-teal-600 text-white shadow'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
        </div>

        <div>
           <h3 className="text-lg font-medium text-slate-700 mb-4 text-center">{t('genSelectDuration')}</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {durations.map(duration => (
                <button
                  key={duration.value}
                  onClick={() => setSelectedDuration(duration.value)}
                  className={`px-5 py-2 text-sm md:text-base font-medium rounded-full transition-all duration-200 ${
                    selectedDuration === duration.value
                      ? 'bg-teal-600 text-white shadow'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {duration.label}
                </button>
              ))}
            </div>
            {selectedDuration > 60 && (
              <p className="text-center text-sm text-slate-500 mt-4 animate-fade-in px-4">
                {t('genDurationWarning')}
              </p>
            )}
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-slate-700 mb-4 text-center">{t('genSelectVoice')}</h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {voices.map(voice => (
              <button
                key={voice.name}
                onClick={() => setSelectedVoice(voice.name)}
                className={`px-5 py-2 text-sm md:text-base font-medium rounded-full transition-all duration-200 ${
                  selectedVoice === voice.name
                    ? 'bg-teal-600 text-white shadow'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {voice.displayName}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={handleGenerate}
          disabled={!selectedTheme || isLoading}
          className="bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors duration-300 disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              {t('genCraftingButton')}
            </>
          ) : (
            t('genCraftButton')
          )}
        </button>
        {isLoading && !generatedScript && (
          <p className="text-slate-500 text-sm mt-4 animate-fade-in">
            {t('genCraftingMessage')}
          </p>
        )}
      </div>
      
      {error && <p className="text-red-500 text-center mt-6">{error}</p>}

      {generatedScript && (
        <div className="bg-slate-50 mt-8 p-6 rounded-xl border border-slate-200 animate-fade-in text-left">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0 flex flex-col items-center">
              {audioBuffer ? (
                <button 
                    onClick={handlePlayPause}
                    className="w-14 h-14 bg-teal-600 text-white rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    aria-label={isPlaying ? t('genPause') : t('genPlay')}
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 4.5a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75h-2.5zm6 0a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75h-2.5z"></path></svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.5a1.5 1.5 0 012.268-1.28l5.5 3.209a1.5 1.5 0 010 2.56l-5.5 3.209A1.5 1.5 0 017 12.5v-7z"></path></svg>
                  )}
                </button>
              ) : (
                <div className="w-14 h-14 bg-slate-200 rounded-full flex items-center justify-center" aria-label="Generating audio">
                  <div className="animate-spin rounded-full h-7 w-7 border-t-2 border-b-2 border-teal-500"></div>
                </div>
              )}
              {audioBuffer && (
                <p className="text-xs text-slate-600 mt-2 font-semibold">{isPlaying ? t('genPauseLabel') : t('genPlayLabel')}</p>
              )}
            </div>
            <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{t('genMeditationTitle')}</h3>
                {!audioBuffer && (
                  <div className="bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                    {t('genAudioMessage')}
                  </div>
                )}
                <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{generatedScript}</p>
            </div>
          </div>
          <div className="mt-6 text-center border-t border-slate-200 pt-4">
              <button
                  onClick={handleStartOver}
                  className="bg-slate-200 text-slate-700 font-bold py-2 px-6 rounded-lg hover:bg-slate-300 transition-colors duration-300 text-sm"
              >
                {t('genCreateAnother')}
              </button>
          </div>
        </div>
      )}
    </div>
  );
};
