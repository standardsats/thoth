import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
    backend: {
      loadPath: "locales/{{lng}}.json", // Здесь убедитесь, что путь указан правильно
    },
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: "en",
    supportedLngs: ["en", "ru", "fr"], // Включаем поддержку французского языка
  });

export default i18n;
