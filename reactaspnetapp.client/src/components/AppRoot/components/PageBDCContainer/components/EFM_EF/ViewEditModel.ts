import {    
    SmEmissionFactorLibraryCreateDTO,
    SmEmissionFactorLibraryReadDTO,
    SmEmissionFactorLibraryUpdateDTO,    
  } from "API_Generated/data-contracts";
  import { OneColumnWithKeyName } from "components/Base/Input/ESGForm";
  import { CityRow, useQueryCityList } from "controllers/SmCity/getCities";
  import {
    CountryRow,
    useQueryCountryList
  //  useQueryCountryList,
  } from "controllers/SmCountry/getCountries";
  import _ from "lodash";
  import { i18nFront2Back } from "i18next_main";
  import {Entity,initialColumns} from "./Entity"

  
  export function convertEditColToCreate(
    data: OneColumnWithKeyName<Entity4Edit>[]
  ): SmEmissionFactorLibraryCreateDTO {
    // Create
    const result: SmEmissionFactorLibraryCreateDTO = {
      id: "",
      vendorCode: "",
      website: "",
      businessRegistrationNo: "",
      stockIdentificationNo: "",
      countryId: 0,
      zipPostalCode: "",
      cityId: 0,
      street: "",
      latitude: 0,
      longitude: 0,
      remark: "",
      user: {
        account: "",
        firstName: "",
        lastName: "",
        firstNameEn: "",
        lastNameEn: "",
        remark: "",
      },
      bdcPermission: false,
      oghgPermission: false,
      pcfPermission: false,
      spmPermission: false,
    };
    data.forEach((column) => {
      if (!!column.keyName) {
        if (_.has(result, column.keyName)) {
          _.set(result, column.keyName, column.value);
        } else {
          switch (column.keyName) {
            case "countryI18ns":
              result.countryId = column.value.countryId;
              break;
            case "cityI18ns":
              result.cityId = column.value.cityId;
              break;
            case "account":
              result.user!.account = column.value;
              break;
            case "firstName":
              result.user!.firstName = column.value;
              break;
            case "lastName":
              result.user!.lastName = column.value;
              break;
            case "firstNameEn":
              result.user!.firstNameEn = column.value;
              break;
            case "lastNameEn":
              result.user!.lastNameEn = column.value;
              break;
            case "contactRemark":
              result.user!.remark = column.value;
              break;
          }
        }
      }
    });
    return result;
  }
  
  export function convertEditColToUpdate(
    data: OneColumnWithKeyName<Entity4Edit>[],
    originalData: SmEmissionFactorLibraryReadDTO
  ): SmEmissionFactorLibraryUpdateDTO {
    // Update
    let result: SmEmissionFactorLibraryUpdateDTO = {
      user: undefined,
    };
    const specialKeys = [
      "account",
      "firstName",
      "lastName",
      "firstNameEn",
      "lastNameEn",
      "contactRemark",
      "countryI18ns",
      "cityI18ns",
    ];
    result = data.reduce((acc, column) => {
      let buf = acc;
      if (!!column.keyName) {
        if (
          originalData[column.keyName as keyof SmEmissionFactorLibraryReadDTO] !==
            column.value &&
            !!!specialKeys.includes(column.keyName as keyof Entity4Edit)
        ) {
          buf = { ...buf, [column.keyName]: column.value };
        } else {
          switch (column.keyName) {
            case "account":
              if (originalData.user?.account !== column.value) {
                buf.user = { ...buf.user, account: column.value };
              }
              break;
            case "firstName":
              if (originalData.user?.firstName !== column.value) {
                buf.user = { ...buf.user, firstName: column.value };
              }
              break;
            case "lastName":
              if (originalData.user?.lastName !== column.value) {
                buf.user = { ...buf.user, lastName: column.value };
              }
              break;
            case "firstNameEn":
              if (originalData.user?.firstNameEn !== column.value) {
                buf.user = { ...buf.user, firstNameEn: column.value };
              }
              break;
            case "lastNameEn":
              if (originalData.user?.lastNameEn !== column.value) {
                buf.user = { ...buf.user, lastNameEn: column.value };
              }
              break;
            case "contactRemark":
              if (originalData.user?.remark !== column.value) {
                buf.user = { ...buf.user, remark: column.value };
              }
              break;
            case "countryI18ns":
              if (originalData.countryId !== column.value.countryId) {
                buf.countryId = column.value.countryId;
              }
              break;
            case "cityI18ns":
              if (originalData.cityId !== column.value.cityId) {
                buf.cityId = column.value.cityId;
              }
              break;
          }
        }
      }
      return buf;
    }, result);
  
    return result;
  }
  

  export function convertToEditView(
    data: SmEmissionFactorLibraryReadDTO
  ): OneColumnWithKeyName<Entity>[] {
    return initialColumns.map((column) => {
      if (!!column.keyName) {
        if (column.keyName === "id") {
          const rawValue = data.countryI18ns;
          if (!rawValue) return column;
          const value: CountryRow = {
            countryId: rawValue[0].sourceId ?? 0,
            en: rawValue.find((r) => r.langKey === i18nFront2Back.en)?.name ?? "",
            zh: rawValue.find((r) => r.langKey === i18nFront2Back.zh)?.name ?? "",
          };
          return { ...column, value: value === undefined ? "" : value };
        } else if (_.has(data, column.keyName)) {
          const value = data[column.keyName as keyof SmEmissionFactorLibraryReadDTO];
          return { ...column, value: value === undefined ? "" : value };
        } else {
          let value = "";
          switch (column.keyName) {
            /*case "account":
              value = data.user?.account ?? "";
              break;
            case "firstName":
              value = data.user?.firstName ?? "";
              break;
            case "lastName":
              value = data.user?.lastName ?? "";
              break;
            case "firstNameEn":
              value = data.user?.firstNameEn ?? "";
              break;
            case "lastNameEn":
              value = data.user?.lastNameEn ?? "";
              break;
            case "contactRemark":
              value = data.user?.remark ?? "";
              break;*/
          }
          return { ...column, value: value === undefined ? "" : value };
        }
      } else {
        return column;
      }
    });
  }