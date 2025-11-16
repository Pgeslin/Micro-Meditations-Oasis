
import React from 'react';
import { GoogleGenAI, Modality } from "@google/genai";

// --- Helper functions for audio processing ---

// Decodes a base64 string into a Uint8Array.
function decode(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

// Decodes raw audio data (PCM) into an AudioBuffer.
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


const themes = ['Focus', 'Relaxation', 'Energy', 'Gratitude', 'Mindfulness', 'Stress Relief', 'Sleep'];

const durations = [
  { label: '1 min', value: 60 },
  { label: '2 min', value: 120 },
  { label: '3 min', value: 180 },
];

const voices = [
  { name: 'Kore', displayName: 'Calm (Female)' },
  { name: 'Puck', displayName: 'Gentle (Male)' },
  { name: 'Zephyr', displayName: 'Bright (Female)' },
  { name: 'Charon', displayName: 'Deep (Male)' },
  { name: 'Fenrir', displayName: 'Warm (Male)' },
];


export const GenerativeMeditation: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = React.useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = React.useState<number>(60);
  const [selectedVoice, setSelectedVoice] = React.useState<string>('Kore');
  const [generatedScript, setGeneratedScript] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // New state for audio
  const [audioBuffer, setAudioBuffer] = React.useState<AudioBuffer | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  
  const audioContextRef = React.useRef<AudioContext | null>(null);
  const audioSourceRef = React.useRef<AudioBufferSourceNode | null>(null);
  
  // Cleanup on unmount
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
      
      // 1. Generate the meditation script
      const durationInMinutes = selectedDuration / 60;
      const wordCount = durationInMinutes * 150; // Approx. 150 words per minute
      const prompt = `You are a mindfulness expert. Write a short, soothing, ${durationInMinutes}-minute guided meditation script focusing on the theme of '${selectedTheme}'. The script should be easy for a beginner to follow and be approximately ${wordCount} words. Do not use markdown or any special formatting. Just provide the script text.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      const script = response.text ?? '';
      if (!script) {
          throw new Error('Could not generate a meditation script.');
      }
      setGeneratedScript(script);

      // 2. Generate the audio from the script
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
      setError('Sorry, something went wrong while creating your meditation. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePlayPause = () => {
    if (!audioContextRef.current || !audioBuffer) return;

    if (isPlaying) {
      audioSourceRef.current?.stop();
      // onended will handle setting isPlaying to false
    } else {
      // Ensure audio context is running
      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }
      
      // Start speech
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

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-4xl mx-auto">
      <div className="text-center">
        <div className="inline-block bg-teal-100 text-teal-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
          Powered by AI
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Create Your Own Moment</h2>
        <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
          Feeling something else? Select a theme and let our AI craft a unique, guided meditation just for you.
        </p>
      </div>
      
      <div className="space-y-8">
        <div>
           <h3 className="text-lg font-medium text-slate-700 mb-4 text-center">1. Select a Theme</h3>
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
           <h3 className="text-lg font-medium text-slate-700 mb-4 text-center">2. Select a Duration</h3>
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
                Longer meditations take a little more time to craft. For a quicker experience, you might like to try the 1-minute option first!
              </p>
            )}
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-slate-700 mb-4 text-center">3. Choose a Voice</h3>
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
              Crafting...
            </>
          ) : (
            'Craft My Meditation'
          )}
        </button>
        {isLoading && (
          <p className="text-slate-500 text-sm mt-4 animate-fade-in">
            Preparing your personal meditation and voice guidance. Thank you for your patience.
          </p>
        )}
      </div>
      
      {error && <p className="text-red-500 text-center mt-6">{error}</p>}

      {generatedScript && (
        <div className="bg-slate-50 mt-8 p-6 rounded-xl border border-slate-200 animate-fade-in text-left">
          <div className="flex items-start gap-4 sm:gap-6">
            {audioBuffer && (
              <div className="flex-shrink-0">
                <button 
                    onClick={handlePlayPause}
                    className="w-14 h-14 bg-teal-600 text-white rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    aria-label={isPlaying ? 'Pause guided meditation' : 'Play guided meditation'}
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 4.5a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75h-2.5zm6 0a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h2.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75h-2.5z"></path></svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.5a1.5 1.5 0 012.268-1.28l5.5 3.209a1.5 1.5 0 010 2.56l-5.5 3.209A1.5 1.5 0 017 12.5v-7z"></path></svg>
                  )}
                </button>
              </div>
            )}
            <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Your Custom Meditation</h3>
                <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{generatedScript}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
