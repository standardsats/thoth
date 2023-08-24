import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { baseName } from "@/assets/constants/main.ts";

//TODO
//при роутинге возможно придется переписать loadPath
async function initializeI18n() {
  await i18n
    .use(Backend)
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
}

initializeI18n();

export default i18n;
