import {
  ESGTableOneHeaderRow
} from "components/Base/Data Display/ESGTable";
import { SmOrgGroupReadDTO } from "API_Generated/data-contracts";
import _ from "lodash";
import localeSM from "styles/locales/sm";
import { AvailableLang, i18nFront2Back } from "i18next_main";

export interface SmOrgGroup4List {
  orgGroupName: string;
  vendorCode: string;
  website: string;
  businessRegistrationNo: string;
  stockIdentificationNo: string;
  addressComposite: string;
  countryName: string;
  zipPostalCode: string;
  cityName: string;
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

export function convertToSmOrgGroup4List(
  data: SmOrgGroupReadDTO,
  lang: AvailableLang
): SmOrgGroup4List {
  const result: SmOrgGroup4List = {
    orgGroupName: data.orgGroupName ?? "",
    vendorCode: data.vendorCode ?? "",
    website: data.website ?? "",
    businessRegistrationNo: data.businessRegistrationNo ?? "",
    stockIdentificationNo: data.stockIdentificationNo ?? "",
    addressComposite: `${data.zipPostalCode} ${data.street ?? ""} ${data.cityId} ${data.countryId}`,
    countryName:
      data.countryI18ns?.find((c) => c.langKey === i18nFront2Back[lang])
        ?.name ?? "",
    zipPostalCode: data.zipPostalCode ?? "",
    cityName:
      data.cityI18ns?.find((c) => c.langKey === i18nFront2Back[lang])?.name ??
      "",
    street: data.street ?? "",
    latitude: data.latitude ?? 0,
    longitude: data.longitude ?? 0,
    remark: data.remark ?? "",
    account: data.user?.account ?? "",
    firstName: data.user?.firstName ?? "",
    lastName: data.user?.lastName ?? "",
    firstNameEn: data.user?.firstNameEn ?? "",
    lastNameEn: data.user?.lastNameEn ?? "",
    contactRemark: data.user?.remark ?? "",
    bdcPermission: data.bdcPermission ?? false,
    oghgPermission: data.oghgPermission ?? false,
    pcfPermission: data.pcfPermission ?? false,
    spmPermission: data.spmPermission ?? false,
    createById: data.createById ?? 0,
    createOn: data.createOn ?? "",
    modifiedById: data.modifiedById ?? 0,
    modifiedOn: data.modifiedOn ?? "",
  };
  return result;
}

export const headerSM_VAM_List: (Omit<ESGTableOneHeaderRow, "keyName"> & {
  keyName: keyof SmOrgGroup4List;
})[] = [
  { keyName: "orgGroupName", label: localeSM.vam.orgGroupName, type: "text" },
  { keyName: "vendorCode", label: localeSM.vam.vendorCode, type: "text" },
  { keyName: "website", label: localeSM.vam.website, type: "text" },
  {
    keyName: "businessRegistrationNo",
    label: localeSM.vam.businessRegistrationNo,
    type: "text",
  },
  {
    keyName: "stockIdentificationNo",
    label: localeSM.vam.stockIdentificationNo,
    type: "text",
  },
  {
    keyName: "addressComposite",
    label: localeSM.vam.addressComposite,
    type: "text",
  },
  { keyName: "countryName", label: localeSM.vam.countryName, type: "text" },
  { keyName: "zipPostalCode", label: localeSM.vam.zipPostalCode, type: "text" },
  { keyName: "cityName", label: localeSM.vam.cityName, type: "text" },
  { keyName: "street", label: localeSM.vam.street, type: "text" },
  { keyName: "latitude", label: localeSM.vam.latitude, type: "range" },
  { keyName: "longitude", label: localeSM.vam.longitude, type: "range" },
  { keyName: "remark", label: localeSM.vam.remark, type: "text" },
  { keyName: "account", label: localeSM.vam.account, type: "text" },
  { keyName: "firstName", label: localeSM.vam.firstName, type: "text" },
  { keyName: "lastName", label: localeSM.vam.lastName, type: "text" },
  { keyName: "firstNameEn", label: localeSM.vam.firstNameEn, type: "text" },
  { keyName: "lastNameEn", label: localeSM.vam.lastNameEn, type: "text" },
  { keyName: "contactRemark", label: localeSM.vam.contactRemark, type: "text" },
  {
    keyName: "bdcPermission",
    label: localeSM.vam.bdcPermission,
    type: "checkbox",
  },
  {
    keyName: "oghgPermission",
    label: localeSM.vam.oghgPermission,
    type: "checkbox",
  },
  {
    keyName: "pcfPermission",
    label: localeSM.vam.pcfPermission,
    type: "checkbox",
  },
  {
    keyName: "spmPermission",
    label: localeSM.vam.spmPermission,
    type: "checkbox",
  },
  { keyName: "createById", label: localeSM.vam.createById, type: "range" }, // TODO
  { keyName: "createOn", label: localeSM.vam.createOn, type: "date" }, // Check
  { keyName: "modifiedById", label: localeSM.vam.modifiedById, type: "range" }, // TODO
  { keyName: "modifiedOn", label: localeSM.vam.modifiedOn, type: "date" }, // Check
];
