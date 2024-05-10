import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import _ from "lodash";
import { CPNTree } from "components/AppRoot/AppRootController";

const nNode: { [key: string]: object } = {}; // Definition
const nsNode = {
  common: _.clone(nNode),
  CPNTree: _.clone(nNode),
  sm: _.clone(nNode),
  EFMEFL: _.clone(nNode),  
}; // Definition
const resources = { en: _.cloneDeep(nsNode), zh: _.cloneDeep(nsNode) }; // Definition
export type AvailableLang = keyof typeof resources;

export const i18nFront2Back: {[x in AvailableLang]:string} = {
  en: "EN",
  zh: "TW",
};

for (const lang in resources) {
  const ns = resources[lang as keyof typeof resources];
  for (const stN in ns) {
    // 忽略 CPNTree
    if (stN === "CPNTree") continue;
    const n = ns[stN as keyof typeof ns];
    const data = await import(`./locales/${lang}/${stN}.json`);
    Object.assign(n, data);
  }
  ns.CPNTree = CPNTree.getTreeForI18n(lang as AvailableLang);
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    resources,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      convertDetectedLanguage: (lng) => {
        if (/zh/i.test(lng)) return "zh";
        else return "en";
      },
    },
  });

export default i18n;
