/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AccessToken {
  /** @format int32 */
  accessTokenId?: number;
  /** @format int32 */
  userId?: number | null;
  accessToken1?: string | null;
  /** @format date-time */
  expirationTime?: string | null;
  /** @format date-time */
  createdOn?: string | null;
}

export interface BdcArVersion {
  /** @format int32 */
  arVersionId?: number;
  /** @format int32 */
  orgGroupId?: number;
  arVersionName?: string | null;
  docRef?: string | null;
  originCorrelationId?: string | null;
  year?: string | null;
  version?: string | null;
  remark?: string | null;
  /** @format int32 */
  createById?: number;
  /** @format date-time */
  createOn?: string;
  /** @format int32 */
  modifiedById?: number;
  /** @format date-time */
  modifiedOn?: string;
  /** @format int32 */
  importSeqnNo?: number | null;
  configuartionType?: string | null;
  systemStatus?: string | null;
  createBy?: SmUser;
  modifiedBy?: SmUser;
  orgGroup?: SmOrgGroup;
}

export interface BdcFacility {
  /** @format int32 */
  facilityId?: number;
  /** @format int32 */
  orgGroupId?: number;
  /** @format int32 */
  orgUnitId?: number;
  facilityName?: string | null;
  facilityType?: string | null;
  /** @format int32 */
  countryId?: number;
  zipPostalCode?: string | null;
  /** @format int32 */
  cityId?: number;
  street?: string | null;
  /** @format double */
  latitude?: number | null;
  /** @format double */
  longitude?: number | null;
  remark?: string | null;
  /** @format int32 */
  createById?: number;
  /** @format date-time */
  createOn?: string;
  /** @format int32 */
  modifiedById?: number;
  /** @format date-time */
  modifiedOn?: string;
  /** @format int32 */
  importSeqnNo?: number | null;
  systemStatus?: string | null;
  city?: SmCity;
  country?: SmCountry;
  createBy?: SmUser;
  modifiedBy?: SmUser;
  orgGroup?: SmOrgGroup;
  orgUnit?: BdcOrgUnit;
}

export interface BdcOrgGroupProfile {
  /** @format int32 */
  orgGroupProfileId?: number;
  /** @format int32 */
  orgGroupId?: number;
  orgGroupProfileName?: string | null;
  website?: string | null;
  businessRegistrationNo?: string | null;
  stockIdentificationNo?: string | null;
  /** @format int32 */
  countryId?: number;
  zipPostalCode?: string | null;
  /** @format int32 */
  cityId?: number;
  street?: string | null;
  /** @format double */
  latitude?: number | null;
  /** @format double */
  longitude?: number | null;
  remark?: string | null;
  /** @format int32 */
  createById?: number;
  /** @format date-time */
  createOn?: string;
  /** @format int32 */
  modifiedById?: number;
  /** @format date-time */
  modifiedOn?: string;
  /** @format int32 */
  importSeqnNo?: number | null;
  systemStatus?: string | null;
  city?: SmCity;
  country?: SmCountry;
  createBy?: SmUser;
  modifiedBy?: SmUser;
  orgGroup?: SmOrgGroup;
}

export interface BdcOrgUnit {
  /** @format int32 */
  orgUnitId?: number;
  /** @format int32 */
  orgGroupId?: number;
  orgUnitName?: string | null;
  orgType?: string | null;
  /** @format int32 */
  parentOrgUnitId?: number | null;
  website?: string | null;
  businessRegistrationNo?: string | null;
  stockIdentificationNo?: string | null;
  /** @format int32 */
  countryId?: number;
  zipPostalCode?: string | null;
  /** @format int32 */
  cityId?: number;
  street?: string | null;
  /** @format double */
  latitude?: number | null;
  /** @format double */
  longitude?: number | null;
  remark?: string | null;
  /** @format int32 */
  createById?: number;
  /** @format date-time */
  createOn?: string;
  /** @format int32 */
  modifiedById?: number;
  /** @format date-time */
  modifiedOn?: string;
  /** @format int32 */
  importSeqnNo?: number | null;
  systemStatus?: string | null;
  description?: string | null;
  bdcFacilities?: BdcFacility[] | null;
  city?: SmCity;
  country?: SmCountry;
  createBy?: SmUser;
  inverseParentOrgUnit?: BdcOrgUnit[] | null;
  modifiedBy?: SmUser;
  orgGroup?: SmOrgGroup;
  parentOrgUnit?: BdcOrgUnit;
}

export interface BdcReportingPeriod {
  /** @format int32 */
  reportingPeriodId?: number;
  /** @format int32 */
  orgGroupId?: number;
  reportingPeriodName?: string | null;
  /** @format date */
  startDate?: string;
  /** @format date */
  endDate?: string;
  periodStatus?: string | null;
  /** @format int32 */
  createById?: number;
  /** @format date-time */
  createOn?: string;
  /** @format int32 */
  modifiedById?: number;
  /** @format date-time */
  modifiedOn?: string;
  /** @format int32 */
  importSeqnNo?: number | null;
  configurationType?: string | null;
  createBy?: SmUser;
  modifiedBy?: SmUser;
  orgGroup?: SmOrgGroup;
}

export interface BdcReportingYear {
  /** @format int32 */
  reportingYearId?: number;
  /** @format int32 */
  orgGroupId?: number;
  reportingYearName?: string | null;
  /** @format date */
  startDate?: string;
  /** @format date */
  endDate?: string;
  /** @format int32 */
  createById?: number;
  /** @format date-time */
  createOn?: string;
  /** @format int32 */
  modifiedById?: number;
  /** @format date-time */
  modifiedOn?: string;
  /** @format int32 */
  importSeqnNo?: number | null;
  systemStatus?: string | null;
  createBy?: SmUser;
  modifiedBy?: SmUser;
  orgGroup?: SmOrgGroup;
}

/** @format int32 */
export enum ColumnTypeForSearch {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export interface OneRequest {
  colType?: ColumnTypeForSearch;
  colName?: string | null;
  operation?: string | null;
  value?: any;
  isAnd?: boolean;
}

export interface RefreshToken {
  /** @format int32 */
  refreshTokenId?: number;
  /** @format int32 */
  userId?: number | null;
  refreshToken1?: string | null;
  /** @format date-time */
  expirationTime?: string | null;
  /** @format date-time */
  createdOn?: string | null;
}

export interface SmChoice {
  /** @format int32 */
  choiceId?: number;
  choiceValue?: string | null;
  category?: string | null;
  langKey?: string | null;
  /** @format int32 */
  createById?: number;
  /** @format date-time */
  createOn?: string;
  /** @format int32 */
  modifiedById?: number;
  /** @format date-time */
  modifiedOn?: string;
  /** @format int32 */
  importSeqnNo?: number | null;
  systemStatus?: string | null;
  createBy?: SmUser;
  modifiedBy?: SmUser;
}

export interface SmCity {
  /** @format int32 */
  cityId?: number;
  /** @format int32 */
  countryId?: number;
  /** @format int32 */
  createById?: number;
  /** @format date-time */
  createOn?: string;
  /** @format int32 */
  modifiedById?: number;
  /** @format date-time */
  modifiedOn?: string;
  systemStatus?: string | null;
  bdcFacilities?: BdcFacility[] | null;
  bdcOrgGroupProfiles?: BdcOrgGroupProfile[] | null;
  bdcOrgUnits?: BdcOrgUnit[] | null;
  createBy?: SmUser;
  modifiedBy?: SmUser;
  smOrgGroups?: SmOrgGroup[] | null;
}

export interface SmCityCreateDTO {
  /** @format int32 */
  countryId?: number;
  zipPostalCode?: string | null;
  /** @format int32 */
  createById?: number;
  /** @format date-time */
  createOn?: string;
}

export interface SmCityUpdateDTO {
  zipPostalCode?: string | null;
  /** @format int32 */
  modifiedById?: number;
  /** @format date-time */
  modifiedOn?: string | null;
}

export interface SmCountry {
  /** @format int32 */
  countryId?: number;
  countryCode?: string | null;
  /** @format int32 */
  createById?: number;
  /** @format date-time */
  createOn?: string;
  /** @format int32 */
  modifiedById?: number;
  /** @format date-time */
  modifiedOn?: string;
  systemStatus?: string | null;
  bdcFacilities?: BdcFacility[] | null;
  bdcOrgGroupProfiles?: BdcOrgGroupProfile[] | null;
  bdcOrgUnits?: BdcOrgUnit[] | null;
  createBy?: SmUser;
  modifiedBy?: SmUser;
  smOrgGroups?: SmOrgGroup[] | null;
  threeDigitalCode?: string | null;
}

export interface SmCountryCreateDTO {
  countryCode?: string | null;
  /** @format int32 */
  createById?: number;
  /** @format date-time */
  createOn?: string;
}

export interface SmCountryUpdateDTO {
  countryCode?: string | null;
  /** @format int32 */
  modifiedById?: number | null;
  /** @format date-time */
  modifiedOn?: string;
  systemStatus?: string | null;
}

export interface SmLanguage {
  langKey?: string | null;
  langName?: string | null;
  /** @format int32 */
  createById?: number;
  /** @format date-time */
  createOn?: string;
  /** @format int32 */
  modifiedById?: number;
  /** @format date-time */
  modifiedOn?: string;
  systemStatus?: string | null;
  createBy?: SmUser;
  modifiedBy?: SmUser;
}

export interface SmOrgGroup {
  /** @format int32 */
  orgGroupId?: number;
  orgGroupName?: string | null;
  vendorCode?: string | null;
  website?: string | null;
  businessRegistrationNo?: string | null;
  stockIdentificationNo?: string | null;
  /** @format int32 */
  countryId?: number;
  zipPostalCode?: string | null;
  /** @format int32 */
  cityId?: number;
  street?: string | null;
  /** @format double */
  latitude?: number | null;
  /** @format double */
  longitude?: number | null;
  remark?: string | null;
  /** @format int32 */
  userId?: number;
  bdcPermission?: boolean;
  oghgPermission?: boolean;
  pcfPermission?: boolean;
  spmPermission?: boolean;
  /** @format int32 */
  createById?: number;
  /** @format date-time */
  createOn?: string;
  /** @format int32 */
  modifiedById?: number;
  /** @format date-time */
  modifiedOn?: string;
  /** @format int32 */
  importSeqnNo?: number | null;
  systemStatus?: string | null;
  bdcArVersions?: BdcArVersion[] | null;
  bdcFacilities?: BdcFacility[] | null;
  bdcOrgGroupProfiles?: BdcOrgGroupProfile[] | null;
  bdcOrgUnits?: BdcOrgUnit[] | null;
  bdcReportingPeriods?: BdcReportingPeriod[] | null;
  bdcReportingYears?: BdcReportingYear[] | null;
  city?: SmCity;
  country?: SmCountry;
  createBy?: SmUser;
  modifiedBy?: SmUser;
  user?: SmUser;
}

export interface SmOrgGroupCreateDTO {
  orgGroupName?: string | null;
  vendorCode?: string | null;
  website?: string | null;
  businessRegistrationNo?: string | null;
  stockIdentificationNo?: string | null;
  /** @format int32 */
  countryId?: number;
  zipPostalCode?: string | null;
  /** @format int32 */
  cityId?: number;
  street?: string | null;
  /** @format double */
  latitude?: number | null;
  /** @format double */
  longitude?: number | null;
  remark?: string | null;
  /** @format int32 */
  userId?: number;
  bdcPermission?: boolean;
  oghgPermission?: boolean;
  pcfPermission?: boolean;
  spmPermission?: boolean;
  /** @format int32 */
  createById?: number;
  /** @format date-time */
  createOn?: string;
  /** @format int32 */
  importSeqnNo?: number | null;
  user?: SmUserRawDTO;
}

export interface SmOrgGroupReadDTO {
  /** @format int32 */
  orgGroupId?: number;
  orgGroupName?: string | null;
  vendorCode?: string | null;
  website?: string | null;
  businessRegistrationNo?: string | null;
  stockIdentificationNo?: string | null;
  /** @format int32 */
  countryId?: number;
  zipPostalCode?: string | null;
  /** @format int32 */
  cityId?: number;
  countryI18ns?: SmTextContentUseDTO[] | null;
  cityI18ns?: SmTextContentUseDTO[] | null;
  street?: string | null;
  /** @format double */
  latitude?: number | null;
  /** @format double */
  longitude?: number | null;
  remark?: string | null;
  /** @format int32 */
  userId?: number;
  bdcPermission?: boolean;
  oghgPermission?: boolean;
  pcfPermission?: boolean;
  spmPermission?: boolean;
  /** @format int32 */
  createById?: number;
  /** @format date-time */
  createOn?: string;
  /** @format int32 */
  modifiedById?: number;
  /** @format date-time */
  modifiedOn?: string;
  /** @format int32 */
  importSeqnNo?: number | null;
  systemStatus?: string | null;
  city?: SmCity;
  country?: SmCountry;
  user?: SmUserRawDTO;
}

export interface SmOrgGroupUpdateDTO {
  orgGroupName?: string | null;
  vendorCode?: string | null;
  website?: string | null;
  businessRegistrationNo?: string | null;
  stockIdentificationNo?: string | null;
  /** @format int32 */
  countryId?: number | null;
  zipPostalCode?: string | null;
  /** @format int32 */
  cityId?: number | null;
  street?: string | null;
  /** @format double */
  latitude?: number | null;
  /** @format double */
  longitude?: number | null;
  remark?: string | null;
  /** @format int32 */
  userId?: number | null;
  bdcPermission?: boolean | null;
  oghgPermission?: boolean | null;
  pcfPermission?: boolean | null;
  spmPermission?: boolean | null;
  /** @format int32 */
  modifiedById?: number | null;
  /** @format date-time */
  modifiedOn?: string | null;
  /** @format int32 */
  importSeqnNo?: number | null;
  systemStatus?: string | null;
  user?: SmUserRawDTO;
}

export interface SmRolePermission {
  /** @format int32 */
  rolePermissionId?: number;
  /** @format int32 */
  orgGroupId?: number;
  roleName?: string | null;
  permission?: string | null;
  /** @format int32 */
  createById?: number;
  /** @format date-time */
  createOn?: string;
  /** @format int32 */
  modifiedById?: number;
  /** @format date-time */
  modifiedOn?: string;
  /** @format int32 */
  importSeqnNo?: number | null;
  systemStatus?: string | null;
}

export interface SmTextContent {
  tableName?: string | null;
  /** @format int32 */
  sourceId?: number;
  langKey?: string | null;
  description?: string | null;
  content1?: string | null;
  content2?: string | null;
  content3?: string | null;
  /** @format int32 */
  createById?: number;
  /** @format date-time */
  createOn?: string;
  /** @format int32 */
  modifiedById?: number;
  /** @format date-time */
  modifiedOn?: string;
  systemStatus?: string | null;
  name?: string | null;
}

export interface SmTextContentUseDTO {
  tableName?: string | null;
  /** @format int32 */
  sourceId?: number;
  langKey?: string | null;
  name?: string | null;
  description?: string | null;
  content1?: string | null;
  content2?: string | null;
  content3?: string | null;
}

export interface SmUser {
  /** @format int32 */
  userId?: number;
  /** @format int32 */
  orgGroupId?: number;
  account?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  firstNameEn?: string | null;
  lastNameEn?: string | null;
  department?: string | null;
  jobTitle?: string | null;
  companyNo?: string | null;
  phone?: string | null;
  remark?: string | null;
  password?: string | null;
  rolePermission?: string | null;
  isOrgAdmin?: boolean;
  isSuperAdmin?: boolean;
  langKey?: string | null;
  timeZone?: string | null;
  /** @format int32 */
  createById?: number;
  /** @format date-time */
  createOn?: string;
  /** @format int32 */
  modifiedById?: number;
  /** @format date-time */
  modifiedOn?: string;
  /** @format int32 */
  importSeqnNo?: number | null;
  systemStatus?: string | null;
  bdcArVersionCreateBies?: BdcArVersion[] | null;
  bdcArVersionModifiedBies?: BdcArVersion[] | null;
  bdcFacilityCreateBies?: BdcFacility[] | null;
  bdcFacilityModifiedBies?: BdcFacility[] | null;
  bdcOrgGroupProfileCreateBies?: BdcOrgGroupProfile[] | null;
  bdcOrgGroupProfileModifiedBies?: BdcOrgGroupProfile[] | null;
  bdcOrgUnitCreateBies?: BdcOrgUnit[] | null;
  bdcOrgUnitModifiedBies?: BdcOrgUnit[] | null;
  bdcReportingPeriodCreateBies?: BdcReportingPeriod[] | null;
  bdcReportingPeriodModifiedBies?: BdcReportingPeriod[] | null;
  bdcReportingYearCreateBies?: BdcReportingYear[] | null;
  bdcReportingYearModifiedBies?: BdcReportingYear[] | null;
  smChoiceCreateBies?: SmChoice[] | null;
  smChoiceModifiedBies?: SmChoice[] | null;
  smCityCreateBies?: SmCity[] | null;
  smCityModifiedBies?: SmCity[] | null;
  smCountryCreateBies?: SmCountry[] | null;
  smCountryModifiedBies?: SmCountry[] | null;
  smLanguageCreateBies?: SmLanguage[] | null;
  smLanguageModifiedBies?: SmLanguage[] | null;
  smOrgGroupCreateBies?: SmOrgGroup[] | null;
  smOrgGroupModifiedBies?: SmOrgGroup[] | null;
  smOrgGroupUsers?: SmOrgGroup[] | null;
}

export interface SmUserCreateDTO {
  /** @format int32 */
  orgGroupId?: number;
  account?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  firstNameEn?: string | null;
  lastNameEn?: string | null;
  department?: string | null;
  jobTitle?: string | null;
  companyNo?: string | null;
  phone?: string | null;
  remark?: string | null;
  password?: string | null;
  rolePermission?: string | null;
  isOrgAdmin?: boolean | null;
  isSuperAdmin?: boolean | null;
  langKey?: string | null;
  timeZone?: string | null;
  /** @format int32 */
  createById?: number | null;
  /** @format date-time */
  createOn?: string | null;
  /** @format int32 */
  modifiedById?: number | null;
  /** @format date-time */
  modifiedOn?: string | null;
  /** @format int32 */
  importSeqnNo?: number | null;
  systemStatus?: string | null;
}

export interface SmUserRawDTO {
  /** @format int32 */
  userId?: number | null;
  /** @format int32 */
  orgGroupId?: number | null;
  account?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  firstNameEn?: string | null;
  lastNameEn?: string | null;
  department?: string | null;
  jobTitle?: string | null;
  companyNo?: string | null;
  phone?: string | null;
  remark?: string | null;
  password?: string | null;
  rolePermission?: string | null;
  isOrgAdmin?: boolean | null;
  isSuperAdmin?: boolean | null;
  langKey?: string | null;
  timeZone?: string | null;
  /** @format int32 */
  createById?: number | null;
  /** @format date-time */
  createOn?: string | null;
  /** @format int32 */
  modifiedById?: number | null;
  /** @format date-time */
  modifiedOn?: string | null;
  /** @format int32 */
  importSeqnNo?: number | null;
  systemStatus?: string | null;
}

export interface WeatherForecast {
  /** @format date */
  date?: string;
  /** @format int32 */
  temperatureC?: number;
  /** @format int32 */
  temperatureF?: number;
  summary?: string | null;
}

export interface OGHG_Emission_Factor_Library_ReadDTO {
  /** @format int32 */
  emission_factor_library_name?: string;
  Description?: string | null;
  library_type?: string | null;
  doc_ref?: string | null;
  origin_correlation_id?: string | null;
  year?: number | null;
  version?: number | null;
  /** @format int32 */
  Created_By?: number;
  /** @format date-time */
  Created_On?: string;
  /** @format int32 */
  Modified_By?: number;
  /** @format date-time */
  Modified_On?: string;
}