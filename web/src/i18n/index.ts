import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enUS from "@/i18n/locales/en-US";
import viVN from "@/i18n/locales/vi-VN";
import zhCN from "@/i18n/locales/zh-CN";

export type AppLocale = "vi-VN" | "en-US" | "zh-CN";

const LOCALE_STORAGE_KEY = "infinite-canvas:locale";

i18n.use(initReactI18next).init({
    resources: {
        "vi-VN": { translation: viVN },
        "en-US": { translation: enUS },
        "zh-CN": { translation: zhCN },
    },
    lng: (localStorage.getItem(LOCALE_STORAGE_KEY) as AppLocale) || "vi-VN",
    fallbackLng: "en-US",
    supportedLngs: ["vi-VN", "en-US", "zh-CN"],
    initAsync: false,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
});

export function changeAppLocale(locale: AppLocale) {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    return i18n.changeLanguage(locale);
}

export default i18n;
