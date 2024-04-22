import { useQuery } from "@tanstack/react-query";
import { SmTextContentUseDTO } from "API_Generated/data-contracts";
import { API } from "controllers/API";
import { i18nFront2Back } from "i18next_main";
import _ from "lodash";

export interface CityListArgs {
  countryId?: number;
}

export interface CityRow {
  cityId: number;
  countryId: number;
  en: string;
  zh: string;
}

export function useQueryCityList(
  args?: CityListArgs,
  test?: { testData: SmTextContentUseDTO[] }
) {
  const hasCountryId = !!args?.countryId;
  return useQuery({
    queryKey: ["cityList", args],
    queryFn: async function () {
      if (!hasCountryId) throw new Error("CountryId is required");
      const response = !!!test?.testData
        ? await API.smCityI18NDetail(args.countryId ?? 0)
        : { data: test.testData, error: null };
      const rows: CityRow[] = _(_.groupBy(response.data, (x) => x.sourceId)).map(d => {
        return {
          cityId: d[0].sourceId ?? 0,
          countryId: args.countryId ?? 0,
          en: d.find((r) => r.langKey === i18nFront2Back.en)?.name ?? "",
          zh: d.find((r) => r.langKey === i18nFront2Back.zh)?.name ?? "",
        };
      }).value();
      return {
        header: header,
        rows: rows,
        title: "City List",
      };
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
    keyName: "cityId",
    label: "Id",
    type: "range",
    hide: true,
  },
  {
    keyName: "countryId",
    label: "CountryId",
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
