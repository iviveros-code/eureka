import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ReactNativeLocalization from 'react-native-localization'

import { es, en } from './locales'

const localization = new ReactNativeLocalization({
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
})

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  interpolation: { escapeValue: false },
  lng: localization.getLanguage(),
  fallbackLng: 'en',
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
})

export default i18n
