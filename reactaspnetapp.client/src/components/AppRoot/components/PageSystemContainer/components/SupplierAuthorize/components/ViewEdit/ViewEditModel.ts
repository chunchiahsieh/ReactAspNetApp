import {
  SmOrgGroupCreateDTO,
  SmOrgGroupReadDTO,
  SmOrgGroupUpdateDTO,
} from "API_Generated/data-contracts";
import { OneColumnWithKeyName } from "components/Base/Input/ESGForm";
import { CityRow, useQueryCityList } from "controllers/SmCity/getCities";
import {
  CountryRow,
  useQueryCountryList,
} from "controllers/SmCountry/getCountries";
import { i18nFront2Back } from "i18next_main";
import _ from "lodash";
import localeSM from "styles/locales/sm";

export interface SmOrgGroup4Edit {
  orgGroupName: string;
  vendorCode: string;
  website: string;
  businessRegistrationNo: string;
  stockIdentificationNo: string;
  //   addressComposite: string;
  countryI18ns: SmOrgGroupReadDTO["countryI18ns"];
  zipPostalCode: string;
  cityI18ns: SmOrgGroupReadDTO["cityI18ns"];
  street: string;
  latitude: number;
  longitude: number;
  remark: string;
  account: string;
  firstName: string;
  lastName: string;
  firstNameEn: string;
  lastNameEn: string;
  contactRemark: string;
  bdcPermission: boolean;
  oghgPermission: boolean;
  pcfPermission: boolean;
  spmPermission: boolean;
  createById: number; // TODO
  createOn: string; // Check
  modifiedById: number; // TODO
  modifiedOn: string; // Check
}

export function convertEditColToCreate(
  data: OneColumnWithKeyName<SmOrgGroup4Edit>[]
): SmOrgGroupCreateDTO {
  // Create
  const result: SmOrgGroupCreateDTO = {
    orgGroupName: "",
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
  data: OneColumnWithKeyName<SmOrgGroup4Edit>[],
  originalData: SmOrgGroupReadDTO
): SmOrgGroupUpdateDTO {
  // Update
  let result: SmOrgGroupUpdateDTO = {
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
        originalData[column.keyName as keyof SmOrgGroupReadDTO] !==
          column.value &&
          !!!specialKeys.includes(column.keyName as keyof SmOrgGroup4Edit)
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

export const initialColumns: OneColumnWithKeyName<SmOrgGroup4Edit>[] = [
  /*1-1orgGroupName*/ {
    name: localeSM.vam.orgGroupName,
    cType: "text",
    value: "",
    required: true,
    keyName: "orgGroupName",
  },
  /*1-2account*/ {
    name: localeSM.vam.account,
    cType: "text",
    value: "",
    required: true,
    keyName: "account",
  },
  /*2-1vendorCode*/ {
    name: localeSM.vam.vendorCode,
    cType: "text",
    value: "",
    keyName: "vendorCode",
  },
  /*2-2lastName*/ {
    name: localeSM.vam.lastName,
    cType: "text",
    value: "",
    required: true,
    keyName: "lastName",
  },
  /*3-1website*/ {
    name: localeSM.vam.website,
    cType: "text",
    value: "",
    keyName: "website",
  },
  /*3-2firstName*/ {
    name: localeSM.vam.firstName,
    cType: "text",
    value: "",
    required: true,
    keyName: "firstName",
  },
  /*4-1businessRegistrationNo*/ {
    name: localeSM.vam.businessRegistrationNo,
    cType: "text",
    value: "",
    keyName: "businessRegistrationNo",
  },
  /*4-2firstNameEn*/ {
    name: localeSM.vam.firstNameEn,
    cType: "text",
    value: "",
    required: true,
    keyName: "firstNameEn",
  },
  /*5-1stockIdentificationNo*/ {
    name: localeSM.vam.stockIdentificationNo,
    cType: "text",
    value: "",
    keyName: "stockIdentificationNo",
  },
  /*5-2lastNameEn*/ {
    name: localeSM.vam.lastNameEn,
    cType: "text",
    value: "",
    required: true,
    keyName: "lastNameEn",
  },
  /*6-1countryName*/ {
    name: localeSM.vam.countryName,
    cType: "search",
    value: "",
    keyName: "countryI18ns",
    forSearch: {
      t2string: (v) => v?.en, // Change it when language is changed
      useQueryTable: useQueryCountryList,
    },
  }, // TODO
  /*6-2contactRemark*/ {
    name: localeSM.vam.contactRemark,
    cType: "text",
    value: "",
    required: true,
    keyName: "contactRemark",
  },
  /*7-1cityName*/ {
    name: localeSM.vam.cityName,
    cType: "search",
    value: "",
    keyName: "cityI18ns",
    forSearch: {
      t2string: (v) => v?.en, // Change it when language is changed
      useQueryTable: useQueryCityList,
      queryArgs: { countryId: 0 }, // TODO
    },
  }, // TODO
  { name: "", cType: "empty", value: "" },
  /*8-1zipPostalCode*/ {
    name: localeSM.vam.zipPostalCode,
    cType: "text",
    value: "",
    keyName: "zipPostalCode",
  },
  { name: "", cType: "empty", value: "" },
  /*9-1street*/ {
    name: localeSM.vam.street,
    cType: "text",
    value: "",
    nCols: 1,
    keyName: "street",
  },
  /*10addressComposite*/ {
    name: localeSM.vam.addressComposite,
    cType: "display",
    value: "",
    forDisplay: [10, 12, 14, 16],
    nCols: 1,
  },
  /*11-1latitude*/ {
    name: localeSM.vam.latitude,
    cType: "number",
    value: "",
    keyName: "latitude",
  },
  /*11-2longitude*/ {
    name: localeSM.vam.longitude,
    cType: "number",
    value: "",
    keyName: "longitude",
  },
  /*12remark*/ {
    name: localeSM.vam.remark,
    cType: "text",
    value: "",
    nCols: 1,
    keyName: "remark",
  },
  /*13-1bdcPermission*/ {
    name: localeSM.vam.bdcPermission,
    cType: "boolean",
    forSwitch: { checked: true },
    keyName: "bdcPermission",
  },
  /*13-2oghgPermission*/ {
    name: localeSM.vam.oghgPermission,
    cType: "boolean",
    forSwitch: { checked: true },
    keyName: "oghgPermission",
  },
  /*14-1pcfPermission*/ {
    name: localeSM.vam.pcfPermission,
    cType: "boolean",
    forSwitch: { checked: false },
    keyName: "pcfPermission",
  },
  /*14-2spmPermission*/ {
    name: localeSM.vam.spmPermission,
    cType: "boolean",
    forSwitch: { checked: false },
    keyName: "spmPermission",
  },
  /*15-1createById*/ {
    name: localeSM.vam.createById,
    cType: "number",
    value: "",
    fnType: "disable",
    keyName: "createById",
  }, // TODO
  /*15-2createOn*/ {
    name: localeSM.vam.createOn,
    cType: "date",
    value: "",
    fnType: "disable",
    keyName: "createOn",
  }, // Check
  /*16-1modifiedById*/ {
    name: localeSM.vam.modifiedById,
    cType: "number",
    value: "",
    fnType: "disable",
    keyName: "modifiedById",
  }, // TODO
  /*16-2modifiedOn*/ {
    name: localeSM.vam.modifiedOn,
    cType: "date",
    value: "",
    fnType: "disable",
    keyName: "modifiedOn",
  }, // Check
];

export function convertToSmOrgGroup4EditView(
  data: SmOrgGroupReadDTO
): OneColumnWithKeyName<SmOrgGroup4Edit>[] {
  return initialColumns.map((column) => {
    if (!!column.keyName) {
      if (column.keyName === "countryI18ns") {
        const rawValue = data.countryI18ns;
        if (!rawValue) return column;
        const value: CountryRow = {
          countryId: rawValue[0].sourceId ?? 0,
          en: rawValue.find((r) => r.langKey === i18nFront2Back.en)?.name ?? "",
          zh: rawValue.find((r) => r.langKey === i18nFront2Back.zh)?.name ?? "",
        };
        return { ...column, value: value === undefined ? "" : value };
      } else if (column.keyName === "cityI18ns") {
        const rawValue = data.cityI18ns;
        if (!rawValue) return column;
        const value: CityRow = {
          cityId: rawValue[0].sourceId ?? 0,
          countryId: data.countryId ?? 0,
          en: rawValue.find((r) => r.langKey === i18nFront2Back.en)?.name ?? "",
          zh: rawValue.find((r) => r.langKey === i18nFront2Back.zh)?.name ?? "",
        };
        return { ...column, value: value === undefined ? "" : value };
      } else if (_.has(data, column.keyName)) {
        const value = data[column.keyName as keyof SmOrgGroupReadDTO];
        return { ...column, value: value === undefined ? "" : value };
      } else {
        let value = "";
        switch (column.keyName) {
          case "account":
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
            break;
        }
        return { ...column, value: value === undefined ? "" : value };
      }
    } else {
      return column;
    }
  });
}