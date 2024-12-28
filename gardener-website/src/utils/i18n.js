import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import de from "../locales/de.json";
import ru from "../locales/ru.json";
import uk from "../locales/uk.json";

// Инициализация i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
    ru: { translation: ru },
    uk: { translation: uk },
  },
  lng: "de", // Язык по умолчанию
  fallbackLng: "de", // Язык по умолчанию при отсутствии перевода
  interpolation: {
    escapeValue: false, // React автоматически экранирует строки
  },
});

export default i18n;
