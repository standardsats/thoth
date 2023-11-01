import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { baseName } from "@/assets/constants/main.ts";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    backend: {
      loadPath: `${baseName}/locales/{{lng}}.json`,
    },
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: "en",
    supportedLngs: ["en", "ru"],
  });

export default i18n;
