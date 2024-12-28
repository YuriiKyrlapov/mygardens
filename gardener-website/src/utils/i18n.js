import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import de from "../locales/de.json";
import ru from "../locales/ru.json";
import uk from "../locales/uk.json";

i18n.use(initReactI18next).init({
  resources: { en, de, ru, uk },
  lng: "en",
  fallbackLng: "en",
});

export default i18n;
