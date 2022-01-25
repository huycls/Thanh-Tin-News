import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { reactI18nextModule } from "react-i18next";

// translations are already at
// '../public/locales/en/translation.json'
// which is the default for the xhr backend to load from

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(reactI18nextModule)
    .init({
      lng: "vn",
    fallbackLng: "vn", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
      }
    });

export default i18n;