import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// Importar traducciones
import en from '../assets/en.json';
import es from '../assets/es.json';

i18n
  .use(initReactI18next) // Integrar con React
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: 'en', // Idioma predeterminado
    fallbackLng: 'en', // Idioma de respaldo
    interpolation: {
      escapeValue: false, // No escapar caracteres especiales
    },
  });

export default i18n;