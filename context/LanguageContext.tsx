import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';
import { translations } from '../i18n/translations';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, ...args: any[]) => any; // Return 'any' to handle functions and strings
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check localStorage for a saved language, default to 'en'
    const savedLang = typeof window !== 'undefined' ? (localStorage.getItem('app-language') as Language) : null;
    return savedLang || 'en';
  });

  const setLanguage = (lang: Language) => {
    localStorage.setItem('app-language', lang);
    setLanguageState(lang);
  };

  const t = useMemo(() => {
    const translationTable = translations[language] || translations.en;
    
    // Create a function that can access nested keys
    return (key: string, ...args: any[]): any => {
      const keys = key.split('.');
      let result: any = translationTable;
      
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k as keyof typeof result];
        } else {
          return key; // Key not found, return the key itself
        }
      }
      
      if (typeof result === 'function') {
        return result(...args);
      }
      
      return result;
    };
  }, [language]);

  const value = { language, setLanguage, t };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
