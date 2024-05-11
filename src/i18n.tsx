import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import homeTranslations from "./translations/Home.json";
import navTranslations from "./translations/Nav.json";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        resources: {
            en: {
                home: homeTranslations.en,
                nav: navTranslations.en,
            },
            np: {
                home: homeTranslations.np,
                nav: navTranslations.np,
            },
        },
    });
