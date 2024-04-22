import { useQuery } from "@tanstack/react-query";
import { delay } from "utils/delay";

export interface ZipCodeListArgs {
  countryId?: number;
  cityId?: number;
}

export interface ZipCodeRow {
  zipCodeId: number;
  countryId: number;
  cityId: number;
  code: string;
}

export function useQueryZipCodeListTest(args?: ZipCodeListArgs) {
  const hasCountryId = !!args?.countryId;
  const hasCityId = !!args?.cityId;
  return useQuery({
    queryKey: ["ZipCodeList", args],
    queryFn: async function () {
      if (!hasCountryId || !hasCityId)
        throw new Error(
          `CountryId:${hasCountryId} and CityId:${hasCityId} are required`
        );

      await delay(2000); // TODO
      return {
        header: header,
        rows:
          hasCountryId && hasCityId
            ? rows1.filter(
                (v) =>
                  v.countryId === args?.countryId && v.cityId === args?.cityId
              )
            : rows1,
        title: "ZipCode List",
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
    keyName: "zipCodeId",
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
    keyName: "cityId",
    label: "CityId",
    type: "range",
    hide: true,
  },
  {
    keyName: "code",
    label: "Code",
    type: "text",
    hide: false,
  },
];

const rows1: ZipCodeRow[] = [
  {
    zipCodeId: 1,
    countryId: 1,
    cityId: 1,
    code: "100",
  },
  {
    zipCodeId: 2,
    countryId: 1,
    cityId: 1,
    code: "103",
  },
  {
    zipCodeId: 3,
    countryId: 1,
    cityId: 2,
    code: "400",
  },
  {
    zipCodeId: 4,
    countryId: 1,
    cityId: 2,
    code: "407",
  },
  {
    zipCodeId: 5,
    countryId: 2,
    cityId: 3,
    code: "100-0001",
  },
  {
    zipCodeId: 6,
    countryId: 2,
    cityId: 3,
    code: "100-0002",
  },
];
