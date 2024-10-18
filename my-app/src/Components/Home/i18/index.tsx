import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        fr: {
            translation: {
                "Hello world": "Bonjour le monde",
            }
        },
        hindi: {
            translation: {
                "Hello world": "हैलो वर्ल्ड",
            }
        }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
});

export default i18n;