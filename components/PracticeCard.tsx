
import React from 'react';
import type { Practice } from '../types';
import * as Icons from './IconComponents';

interface PracticeCardProps {
  practice: Practice;
  onSelect: (practice: Practice) => void;
}

export const PracticeCard: React.FC<PracticeCardProps> = ({ practice, onSelect }) => {
  const IconComponent = practice.icon ? Icons[practice.icon as keyof typeof Icons] : null;

  return (
    <div
      className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex flex-col items-start h-full cursor-pointer group"
      onClick={() => onSelect(practice)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(practice)}
      role="button"
      tabIndex={0}
      aria-label={`Start ${practice.title} practice`}
    >
      {IconComponent && <IconComponent className="h-8 w-8 text-teal-500 dark:text-teal-400 mb-4 transition-transform duration-300 group-hover:scale-110" />}
      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">{practice.title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-wrap">{practice.description}</p>
    </div>
  );
};