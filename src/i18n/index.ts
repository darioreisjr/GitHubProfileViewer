import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar traduções
import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt/translation.json';
import translationES from './locales/es/translation.json';

// Os recursos de idioma
const resources = {
  en: {
    translation: translationEN
  },
  pt: {
    translation: translationPT
  },
  es: {
    translation: translationES
  }
};

i18n
  // Detecta o idioma do usuário
  .use(LanguageDetector)
  // Passando o módulo i18n para react-i18next
  .use(initReactI18next)
  // Inicializando i18next
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // Não necessário para React
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;