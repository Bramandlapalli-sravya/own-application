const i18next = require("i18next");

i18next.init({
  lng: "en",
  resources: {
    en: {
      translation: {
        key: "Hello World",
      },
    },
    de: {
      translation: {
        key: "Hallo Welt",
      },
    },
  },
});

console.log(i18next.t("key"), { lag: "de" });
