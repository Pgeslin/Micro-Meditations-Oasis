
import React from 'react';
import type { Practice } from '../types';

interface PracticeCardProps {
  practice: Practice;
  onSelect: (practice: Practice) => void;
}

export const PracticeCard: React.FC<PracticeCardProps> = ({ practice, onSelect }) => {
  return (
    <div
      className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex flex-col items-start h-full cursor-pointer"
      onClick={() => onSelect(practice)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(practice)}
      role="button"
      tabIndex={0}
      aria-label={`Start ${practice.title} practice`}
    >
      <h3 className="text-xl font-semibold text-slate-800 mb-2">{practice.title}</h3>
      <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">{practice.description}</p>
    </div>
  );
};
