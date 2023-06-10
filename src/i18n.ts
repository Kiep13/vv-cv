import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationRU from './locales/ru.json';
import translationEN from './locales/en.json';
import translationSK from './locales/sk.json';

const resources = {
  ru: {
    translation: translationRU
  },
  en: {
    translation: translationEN
  },
  sk: {
    translation: translationSK
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
