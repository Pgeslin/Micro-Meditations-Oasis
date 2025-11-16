import React from 'react';
import { GoogleGenAI } from "@google/genai";
import type { Practice } from '../types';

interface GenerativeMeditationProps {
  onSelect: (practice: Practice) => void;
}

const themes = ['Focus', 'Relaxation', 'Energy', 'Gratitude'];

export const GenerativeMeditation: React.FC<GenerativeMeditationProps> = ({ onSelect }) => {
  const [selectedTheme, setSelectedTheme] = React.useState<string | null>(null);
  const [generatedScript, setGeneratedScript] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleGenerate = async () => {
    if (!selectedTheme) return;

    setIsLoading(true);
    setError(null);
    setGeneratedScript(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const prompt = `You are a mindfulness expert. Write a short, soothing, one-minute guided meditation script focusing on the theme of '${selectedTheme}'. The script should be easy for a beginner to follow and under 150 words. Do not use markdown or any special formatting. Just provide the script text.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      setGeneratedScript(response.text ?? '');
    } catch (e) {
      console.error(e);
      setError('Sorry, something went wrong while creating your meditation. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartPractice = () => {
    if (!generatedScript || !selectedTheme) return;
    const generatedPractice: Practice = {
      title: `Custom: ${selectedTheme}`,
      description: generatedScript,
    };
    onSelect(generatedPractice);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 max-w-4xl mx-auto">
      <div className="text-center">
        <div className="inline-block bg-teal-100 text-teal-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
          Powered by AI
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Create Your Own Moment</h2>
        <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
          Feeling something else? Select a theme and let our AI craft a unique, one-minute guided meditation just for you.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
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

      <div className="text-center">
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
      </div>
      
      {error && <p className="text-red-500 text-center mt-6">{error}</p>}

      {generatedScript && (
        <div className="bg-slate-50 mt-8 p-6 rounded-xl border border-slate-200 animate-fade-in text-left">
          <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Your Custom Meditation</h3>
              <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{generatedScript}</p>
          </div>
          <div className="text-right mt-4">
            <button 
                onClick={handleStartPractice}
                className="bg-white text-teal-700 font-semibold py-2 px-5 border border-teal-300 rounded-lg hover:bg-teal-50 transition-colors"
            >
                Start 1-Min Practice
            </button>
          </div>
        </div>
      )}
    </div>
  );
};