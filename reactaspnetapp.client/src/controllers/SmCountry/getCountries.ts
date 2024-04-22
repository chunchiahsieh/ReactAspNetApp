import { useQuery } from "@tanstack/react-query";
import { SmTextContentUseDTO } from "API_Generated/data-contracts";
import { API } from "controllers/API";
import { i18nFront2Back } from "i18next_main";
import _ from "lodash";

export interface CountryRow {
  countryId: number;
  en: string;
  zh: string;
}

export function useQueryCountryList(test?: {
  testData: SmTextContentUseDTO[];
}) {
  return useQuery({
    queryKey: ["countryList"],
    queryFn: async function () {
      const data = !!!test?.testData
        ? await API.smCountryI18NList()
        : { data: test.testData, error: null }; // For testing
      if (data.error) {
        throw new Error(data.error);
      } else {
        const rawData = data.data;
        const rows: CountryRow[] = _(_.groupBy(rawData, x=>x.sourceId)).map(r => {
          return {
            countryId: r[0].sourceId??0,
            en: r.find(r => r.langKey === i18nFront2Back.en)?.name??"",
            zh: r.find(r => r.langKey === i18nFront2Back.zh)?.name??"",
          };
        }).value();
        return {
          header: header,
          rows: rows,
          title: "Country List",
        };
      }
    },
  });
}

//#region TEST DATA
const header: {
  keyName: string;
  label: string;
  type: "range" | "text";
  hide: boolean;
}[] = [
  {
    keyName: "countryId",
    label: "Id",
    type: "range",
    hide: true,
  },
  {
    keyName: "countryCode",
    label: "Code",
    type: "range",
    hide: true,
  },
  {
    keyName: "en",
    label: "English",
    type: "text",
    hide: false,
  },
  {
    keyName: "zh",
    label: "繁中",
    type: "text",
    hide: false,
  },
];
