import _ from "lodash";
import { useQuerySmOrgGroupData } from "../getData";

export function useQuerySmOrgGroupDataTest() {
  return useQuerySmOrgGroupData({testData: [
    {
      "orgGroupId": 2,
      "orgGroupName": "??",
      "vendorCode": "testOne",
      "website": "https://test.com",
      "businessRegistrationNo": "1234test",
      "stockIdentificationNo": "stockTest",
      "countryId": 1,
      "zipPostalCode": "710",
      "cityId": 4,
      "countryI18ns": [
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
        }
      ],
      "cityI18ns": [
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
        }
      ],
      "street": "???",
      "latitude": 10.5,
      "longitude": 200.3,
      "remark": "測試",
      "userId": 1,
      "bdcPermission": false,
      "oghgPermission": false,
      "pcfPermission": false,
      "spmPermission": false,
      "createById": 1,
      "createOn": "2024-03-27T11:49:32.483",
      "modifiedById": 1,
      "modifiedOn": "2024-04-07T05:32:02.843",
      "importSeqnNo": 1,
      "systemStatus": "1",
      "user": {
        "userId": 1,
        "orgGroupId": 1,
        "account": "test",
        "email": "test@test.com",
        "firstName": "?",
        "lastName": "?",
        "firstNameEn": "3",
        "lastNameEn": "4",
        "department": null,
        "jobTitle": null,
        "companyNo": null,
        "phone": null,
        "remark": "Admin",
        "password": "testPassword",
        "rolePermission": null,
        "isOrgAdmin": true,
        "isSuperAdmin": true,
        "langKey": "zh",
        "timeZone": "UTC+8",
        "createById": 1,
        "createOn": "2024-03-20T00:00:00",
        "modifiedById": 1,
        "modifiedOn": "2024-03-20T00:00:00",
        "importSeqnNo": null,
        "systemStatus": "What"
      }
    },
    {
      "orgGroupId": 16,
      "orgGroupName": "a",
      "vendorCode": "",
      "website": "",
      "businessRegistrationNo": "",
      "stockIdentificationNo": "",
      "countryId": 1,
      "zipPostalCode": "",
      "cityId": 4,
      "countryI18ns": [
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
        }
      ],
      "cityI18ns": [
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
        }
      ],
      "street": "",
      "latitude": 10,
      "longitude": 10,
      "remark": "",
      "userId": 8,
      "bdcPermission": false,
      "oghgPermission": false,
      "pcfPermission": false,
      "spmPermission": false,
      "createById": 1,
      "createOn": "2024-04-08T08:18:13.723",
      "modifiedById": 1,
      "modifiedOn": "2024-04-08T09:25:17.44",
      "importSeqnNo": null,
      "systemStatus": "1",
      "user": {
        "userId": 8,
        "orgGroupId": 0,
        "account": "b",
        "email": "my@test.co",
        "firstName": "d",
        "lastName": "c",
        "firstNameEn": "e",
        "lastNameEn": "f",
        "department": null,
        "jobTitle": null,
        "companyNo": null,
        "phone": null,
        "remark": "g",
        "password": "generate by itself",
        "rolePermission": null,
        "isOrgAdmin": false,
        "isSuperAdmin": false,
        "langKey": "zh",
        "timeZone": "8",
        "createById": 0,
        "createOn": "2024-04-08T09:25:17.44",
        "modifiedById": 0,
        "modifiedOn": "2024-04-08T09:25:17.44",
        "importSeqnNo": null,
        "systemStatus": "1"
      }
    },
  ]});
}

// export function refreshQuerySmOrgGroupData(queryClient: QueryClient) {
//   return queryClient.invalidateQueries({ queryKey: ["SmOrgGroup"] });
// }
