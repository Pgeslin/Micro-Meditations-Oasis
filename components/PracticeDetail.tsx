import React from 'react';
import type { Practice } from '../types';

interface PracticeDetailProps {
  practice: Practice;
  onClose: () => void;
  onStart: () => void;
  t: (key: string, ...args: any[]) => string;
}

export const PracticeDetail: React.FC<PracticeDetailProps> = ({ practice, onClose, onStart, t }) => {
  return (
    <div 
      className="fixed inset-0 bg-slate-900 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-40 animate-fade-in p-4"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-slate-50 w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-xl flex flex-col">
        <header className="relative p-6 border-b border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">{practice.title}</h2>
          <button 
            onClick={onClose}
            className="absolute top-4 left-4 flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors"
            aria-label={t('backButton')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-semibold">{t('backButton')}</span>
          </button>
        </header>

        <main className="p-6 sm:p-8 overflow-y-auto flex-grow">
          <p className="text-center text-slate-600 text-lg mb-6">{practice.description}</p>
          
          <div className="mt-4">
            {practice.details?.explanation && (
                <div className="bg-teal-50/50 border border-teal-200/50 p-6 rounded-xl">
                  <p className="text-slate-700 leading-relaxed whitespace-pre-wrap text-lg text-center">{practice.details.explanation}</p>
                </div>
            )}
          </div>
        </main>

        <footer className="p-6 bg-slate-100 border-t border-slate-200 rounded-b-2xl">
          <button
            onClick={onStart}
            className="w-full bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors duration-300 text-lg"
          >
            {t('startPracticeButton')}
          </button>
        </footer>
      </div>
    </div>
  );
};