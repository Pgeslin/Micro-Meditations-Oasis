
import React from 'react';
import { GoogleGenAI } from "@google/genai";
import type { Practice } from '../types';

interface PostPracticeReflectionProps {
  practice: Practice;
  onClose: () => void;
  t: (key: string, ...args: any[]) => string;
}

export const PostPracticeReflection: React.FC<PostPracticeReflectionProps> = ({ practice, onClose, t }) => {
  const [reflection, setReflection] = React.useState('');
  const [aiResponse, setAiResponse] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: reflection,
        config: {
          systemInstruction: t('reflection.aiSystemInstruction'),
        },
      });
      setAiResponse(response.text);
    } catch (e) {
      console.error(e);
      setError(t('reflection.error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-slate-900 bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in p-4"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-stone-50 w-full max-w-lg rounded-2xl shadow-xl flex flex-col overflow-hidden">
        <header className="p-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center">{t('reflection.title')}</h2>
        </header>

        <main className="p-6 pt-0">
          {!aiResponse && !error && (
            <div className="animate-fade-in text-center">
              <p className="text-slate-600 mb-4">{t('reflection.intro')}</p>
              <p className="text-slate-700 font-semibold mb-4">{t('reflection.prompt', practice.title)}</p>
              <textarea
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                placeholder={t('reflection.placeholder')}
                className="w-full h-32 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-shadow duration-200 text-left"
                disabled={isLoading}
                aria-label="Your reflection"
              />
            </div>
          )}

          {isLoading && (
            <div className="text-center py-10 animate-fade-in">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600 mb-4"></div>
              <p className="text-slate-600">{t('reflection.loading')}</p>
            </div>
          )}

          {error && (
            <div className="text-center py-10 bg-red-50 p-4 rounded-lg animate-fade-in">
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          )}

          {aiResponse && !error && (
             <div className="bg-teal-50 p-4 rounded-lg animate-fade-in">
                <p className="text-teal-800 leading-relaxed">
                  <span className="font-semibold block mb-1">{t('reflection.aiResponsePrefix')}</span> {aiResponse}
                </p>
             </div>
          )}

        </main>

        <footer className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
          {aiResponse || error ? (
            <button
              onClick={onClose}
              className="w-full bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors"
            >
              {t('reflection.doneButton')}
            </button>
          ) : (
            <>
              <button
                onClick={onClose}
                className="w-full sm:w-auto order-2 sm:order-1 px-6 py-3 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition-colors"
                disabled={isLoading}
              >
                {t('reflection.skipButton')}
              </button>
              <button
                onClick={handleSubmit}
                disabled={!reflection.trim() || isLoading}
                className="w-full sm:flex-1 order-1 sm:order-2 bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed"
              >
                {t('reflection.submitButton')}
              </button>
            </>
          )}
        </footer>
      </div>
    </div>
  );
};