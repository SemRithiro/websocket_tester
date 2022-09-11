import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import kh from './assets/languages/kh.json';
import en from './assets/languages/en.json';

i18n.use(initReactI18next).init({
  resources: {
    kh,
    en,
  },
  lng: 'en',
  fallbackLng: 'en',
});
