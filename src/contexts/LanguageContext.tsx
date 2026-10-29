import React, { createContext, useContext, useState, useCallback } from 'react';

type Locale = 'en';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  availableLocales: { code: Locale; name: string; nativeName: string }[];
}

const translations: Record<Locale, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.expertise': 'Expertise',
    'nav.services': 'Services',
    'nav.experience': 'Experience',
    'nav.work': 'Work',
    'nav.skills': 'Skills',
    'nav.insights': 'Insights',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'cta.primary': 'Discuss an Opportunity',
    'cta.secondary': 'Explore My Expertise',
    'theme.light': 'Light mode',
    'theme.dark': 'Dark mode',
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Crafted with precision.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  const t = useCallback((key: string): string => {
    return translations[locale]?.[key] || translations.en[key] || key;
  }, [locale]);

  const availableLocales = [
    { code: 'en' as Locale, name: 'English', nativeName: 'English' },
  ];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, availableLocales }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
