import { useQueryCountryList } from "../getCountries";

export interface CountryRow {
  countryId: number;
  en: string;
  zh: string;
}

export function useQueryCountryListTest() {
  return useQueryCountryList({testData: testData})
}

const testData = [
  {
    "tableName": "Country",
    "sourceId": 1,
    "langKey": "EN",
    "name": "Taiwan",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "Country",
    "sourceId": 1,
    "langKey": "TW",
    "name": "台灣",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "Country",
    "sourceId": 2,
    "langKey": "EN",
    "name": "China ",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "Country",
    "sourceId": 2,
    "langKey": "TW",
    "name": "中國",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "Country",
    "sourceId": 3,
    "langKey": "EN",
    "name": "Hong Kong  ",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "Country",
    "sourceId": 3,
    "langKey": "TW",
    "name": "香港",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "Country",
    "sourceId": 4,
    "langKey": "EN",
    "name": "Macau ",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "Country",
    "sourceId": 4,
    "langKey": "TW",
    "name": "澳門",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "Country",
    "sourceId": 5,
    "langKey": "EN",
    "name": "Australia ",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "Country",
    "sourceId": 5,
    "langKey": "TW",
    "name": "澳大利亞(澳洲)",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "Country",
    "sourceId": 6,
    "langKey": "EN",
    "name": "Bahrain ",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "Country",
    "sourceId": 6,
    "langKey": "TW",
    "name": "巴林",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "Country",
    "sourceId": 7,
    "langKey": "EN",
    "name": "Bhutan",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "Country",
    "sourceId": 7,
    "langKey": "TW",
    "name": "不丹",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "Country",
    "sourceId": 8,
    "langKey": "EN",
    "name": "Brunei Darussalam",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "Country",
    "sourceId": 8,
    "langKey": "TW",
    "name": "汶萊",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
];
