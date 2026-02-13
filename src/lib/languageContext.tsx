'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { DICTIONARY, type Translation } from './i18n';

type Lang = 'en' | 'th';

interface LanguageContextType {
  lang: Lang;
  t: Translation;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('jai_lang') as Lang | null;
    if (!savedLang || (savedLang !== 'en' && savedLang !== 'th') || savedLang === lang) {
      return;
    }

    const timerId = window.setTimeout(() => {
      setLangState(savedLang);
    }, 0);

    return () => window.clearTimeout(timerId);
  }, [lang]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('jai_lang', newLang);
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'th' : 'en');
  };

  const t = DICTIONARY[lang];

  return <LanguageContext.Provider value={{ lang, t, toggleLang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
