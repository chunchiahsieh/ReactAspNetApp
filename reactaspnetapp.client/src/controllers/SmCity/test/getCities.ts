import { useQueryCityList } from "../getCities";

export interface CityListArgs {
  countryId?: number;
}

export interface CityRow {
  cityId: number;
  countryId: number;
  en: string;
  zh: string;
}

export function useQueryCityListTest(args?: CityListArgs) {
  const data = (args?.countryId === 1) ? rawData : []; // Just Taiwan
  return useQueryCityList(args, { testData: data });
}

const rawData = [
  {
    "tableName": "City",
    "sourceId": 1,
    "langKey": "EN",
    "name": "Keelung City",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "City",
    "sourceId": 1,
    "langKey": "TW",
    "name": "基隆市",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "City",
    "sourceId": 2,
    "langKey": "EN",
    "name": "New Taipei City",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "City",
    "sourceId": 2,
    "langKey": "TW",
    "name": "新北市",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "City",
    "sourceId": 3,
    "langKey": "EN",
    "name": "Taipei City",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "City",
    "sourceId": 3,
    "langKey": "TW",
    "name": "臺北市",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "City",
    "sourceId": 4,
    "langKey": "EN",
    "name": "Taoyuan City",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "City",
    "sourceId": 4,
    "langKey": "TW",
    "name": "桃園市",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "City",
    "sourceId": 5,
    "langKey": "EN",
    "name": "Hsinchu County",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "City",
    "sourceId": 5,
    "langKey": "TW",
    "name": "新竹縣",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "City",
    "sourceId": 6,
    "langKey": "EN",
    "name": "Hsinchu City",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "City",
    "sourceId": 6,
    "langKey": "TW",
    "name": "新竹市",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "City",
    "sourceId": 7,
    "langKey": "EN",
    "name": "Miaoli City",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "City",
    "sourceId": 7,
    "langKey": "TW",
    "name": "苗栗市",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "City",
    "sourceId": 8,
    "langKey": "EN",
    "name": "\tMiaoli County",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "City",
    "sourceId": 8,
    "langKey": "TW",
    "name": "苗栗縣",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "City",
    "sourceId": 9,
    "langKey": "EN",
    "name": "Taichung City",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "City",
    "sourceId": 9,
    "langKey": "TW",
    "name": "臺中市",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "City",
    "sourceId": 10,
    "langKey": "EN",
    "name": "Changhua County",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
  {
    "tableName": "City",
    "sourceId": 10,
    "langKey": "TW",
    "name": "彰化縣",
    "description": null,
    "content1": null,
    "content2": null,
    "content3": null
  },
];