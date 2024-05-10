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

import {
  AccessToken,
  BdcArVersion,
  BdcFacility,
  BdcOrgGroupProfile,
  BdcOrgUnit,
  BdcReportingPeriod,
  BdcReportingYear,
  OneRequest,
  RefreshToken,
  SmChoice,
  SmCity,
  SmCityCreateDTO,
  SmCityUpdateDTO,
  SmCountry,
  SmCountryCreateDTO,
  SmCountryUpdateDTO,
  SmEmissionFactorLibrary,
  SmEmissionFactorLibraryCreateDTO,
  SmEmissionFactorLibraryReadDTO,
  SmEmissionFactorLibraryUpdateDTO,
  SmLanguage,
  SmOrgGroup,
  SmOrgGroupCreateDTO,
  SmOrgGroupReadDTO,
  SmOrgGroupUpdateDTO,
  SmRolePermission,
  SmTextContent,
  SmTextContentUseDTO,
  SmUser,
  SmUserCreateDTO,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags AccessToken
   * @name AccessTokenList
   * @request GET:/api/AccessToken
   */
  accessTokenList = (params: RequestParams = {}) =>
    this.request<AccessToken[], any>({
      path: `/api/AccessToken`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags AccessToken
   * @name AccessTokenCreate
   * @request POST:/api/AccessToken
   */
  accessTokenCreate = (data: AccessToken, params: RequestParams = {}) =>
    this.request<AccessToken, any>({
      path: `/api/AccessToken`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags AccessToken
   * @name AccessTokenDetail
   * @request GET:/api/AccessToken/{id}
   */
  accessTokenDetail = (id: number, params: RequestParams = {}) =>
    this.request<AccessToken, any>({
      path: `/api/AccessToken/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags AccessToken
   * @name AccessTokenUpdate
   * @request PUT:/api/AccessToken/{id}
   */
  accessTokenUpdate = (id: number, data: AccessToken, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/AccessToken/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags AccessToken
   * @name AccessTokenDelete
   * @request DELETE:/api/AccessToken/{id}
   */
  accessTokenDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/AccessToken/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcArVersion
   * @name BdcArVersionList
   * @request GET:/api/BdcArVersion
   */
  bdcArVersionList = (params: RequestParams = {}) =>
    this.request<BdcArVersion[], any>({
      path: `/api/BdcArVersion`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcArVersion
   * @name BdcArVersionCreate
   * @request POST:/api/BdcArVersion
   */
  bdcArVersionCreate = (data: BdcArVersion, params: RequestParams = {}) =>
    this.request<BdcArVersion, any>({
      path: `/api/BdcArVersion`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcArVersion
   * @name BdcArVersionDetail
   * @request GET:/api/BdcArVersion/{id}
   */
  bdcArVersionDetail = (id: number, params: RequestParams = {}) =>
    this.request<BdcArVersion, any>({
      path: `/api/BdcArVersion/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcArVersion
   * @name BdcArVersionUpdate
   * @request PUT:/api/BdcArVersion/{id}
   */
  bdcArVersionUpdate = (id: number, data: BdcArVersion, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/BdcArVersion/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcArVersion
   * @name BdcArVersionDelete
   * @request DELETE:/api/BdcArVersion/{id}
   */
  bdcArVersionDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/BdcArVersion/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcFacility
   * @name BdcFacilityList
   * @request GET:/api/BdcFacility
   */
  bdcFacilityList = (params: RequestParams = {}) =>
    this.request<BdcFacility[], any>({
      path: `/api/BdcFacility`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcFacility
   * @name BdcFacilityCreate
   * @request POST:/api/BdcFacility
   */
  bdcFacilityCreate = (data: BdcFacility, params: RequestParams = {}) =>
    this.request<BdcFacility, any>({
      path: `/api/BdcFacility`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcFacility
   * @name BdcFacilityDetail
   * @request GET:/api/BdcFacility/{id}
   */
  bdcFacilityDetail = (id: number, params: RequestParams = {}) =>
    this.request<BdcFacility, any>({
      path: `/api/BdcFacility/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcFacility
   * @name BdcFacilityUpdate
   * @request PUT:/api/BdcFacility/{id}
   */
  bdcFacilityUpdate = (id: number, data: BdcFacility, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/BdcFacility/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcFacility
   * @name BdcFacilityDelete
   * @request DELETE:/api/BdcFacility/{id}
   */
  bdcFacilityDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/BdcFacility/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcOrgGroupProfile
   * @name BdcOrgGroupProfileList
   * @request GET:/api/BdcOrgGroupProfile
   */
  bdcOrgGroupProfileList = (params: RequestParams = {}) =>
    this.request<BdcOrgGroupProfile[], any>({
      path: `/api/BdcOrgGroupProfile`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcOrgGroupProfile
   * @name BdcOrgGroupProfileCreate
   * @request POST:/api/BdcOrgGroupProfile
   */
  bdcOrgGroupProfileCreate = (data: BdcOrgGroupProfile, params: RequestParams = {}) =>
    this.request<BdcOrgGroupProfile, any>({
      path: `/api/BdcOrgGroupProfile`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcOrgGroupProfile
   * @name BdcOrgGroupProfileDetail
   * @request GET:/api/BdcOrgGroupProfile/{id}
   */
  bdcOrgGroupProfileDetail = (id: number, params: RequestParams = {}) =>
    this.request<BdcOrgGroupProfile, any>({
      path: `/api/BdcOrgGroupProfile/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcOrgGroupProfile
   * @name BdcOrgGroupProfileUpdate
   * @request PUT:/api/BdcOrgGroupProfile/{id}
   */
  bdcOrgGroupProfileUpdate = (id: number, data: BdcOrgGroupProfile, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/BdcOrgGroupProfile/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcOrgGroupProfile
   * @name BdcOrgGroupProfileDelete
   * @request DELETE:/api/BdcOrgGroupProfile/{id}
   */
  bdcOrgGroupProfileDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/BdcOrgGroupProfile/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcOrgUnit
   * @name BdcOrgUnitList
   * @request GET:/api/BdcOrgUnit
   */
  bdcOrgUnitList = (params: RequestParams = {}) =>
    this.request<BdcOrgUnit[], any>({
      path: `/api/BdcOrgUnit`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcOrgUnit
   * @name BdcOrgUnitCreate
   * @request POST:/api/BdcOrgUnit
   */
  bdcOrgUnitCreate = (data: BdcOrgUnit, params: RequestParams = {}) =>
    this.request<BdcOrgUnit, any>({
      path: `/api/BdcOrgUnit`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcOrgUnit
   * @name BdcOrgUnitDetail
   * @request GET:/api/BdcOrgUnit/{id}
   */
  bdcOrgUnitDetail = (id: number, params: RequestParams = {}) =>
    this.request<BdcOrgUnit, any>({
      path: `/api/BdcOrgUnit/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcOrgUnit
   * @name BdcOrgUnitUpdate
   * @request PUT:/api/BdcOrgUnit/{id}
   */
  bdcOrgUnitUpdate = (id: number, data: BdcOrgUnit, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/BdcOrgUnit/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcOrgUnit
   * @name BdcOrgUnitDelete
   * @request DELETE:/api/BdcOrgUnit/{id}
   */
  bdcOrgUnitDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/BdcOrgUnit/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcReportingPeriod
   * @name BdcReportingPeriodList
   * @request GET:/api/BdcReportingPeriod
   */
  bdcReportingPeriodList = (params: RequestParams = {}) =>
    this.request<BdcReportingPeriod[], any>({
      path: `/api/BdcReportingPeriod`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcReportingPeriod
   * @name BdcReportingPeriodCreate
   * @request POST:/api/BdcReportingPeriod
   */
  bdcReportingPeriodCreate = (data: BdcReportingPeriod, params: RequestParams = {}) =>
    this.request<BdcReportingPeriod, any>({
      path: `/api/BdcReportingPeriod`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcReportingPeriod
   * @name BdcReportingPeriodDetail
   * @request GET:/api/BdcReportingPeriod/{id}
   */
  bdcReportingPeriodDetail = (id: number, params: RequestParams = {}) =>
    this.request<BdcReportingPeriod, any>({
      path: `/api/BdcReportingPeriod/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcReportingPeriod
   * @name BdcReportingPeriodUpdate
   * @request PUT:/api/BdcReportingPeriod/{id}
   */
  bdcReportingPeriodUpdate = (id: number, data: BdcReportingPeriod, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/BdcReportingPeriod/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcReportingPeriod
   * @name BdcReportingPeriodDelete
   * @request DELETE:/api/BdcReportingPeriod/{id}
   */
  bdcReportingPeriodDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/BdcReportingPeriod/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcReportingYear
   * @name BdcReportingYearList
   * @request GET:/api/BdcReportingYear
   */
  bdcReportingYearList = (params: RequestParams = {}) =>
    this.request<BdcReportingYear[], any>({
      path: `/api/BdcReportingYear`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcReportingYear
   * @name BdcReportingYearCreate
   * @request POST:/api/BdcReportingYear
   */
  bdcReportingYearCreate = (data: BdcReportingYear, params: RequestParams = {}) =>
    this.request<BdcReportingYear, any>({
      path: `/api/BdcReportingYear`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcReportingYear
   * @name BdcReportingYearDetail
   * @request GET:/api/BdcReportingYear/{id}
   */
  bdcReportingYearDetail = (id: number, params: RequestParams = {}) =>
    this.request<BdcReportingYear, any>({
      path: `/api/BdcReportingYear/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcReportingYear
   * @name BdcReportingYearUpdate
   * @request PUT:/api/BdcReportingYear/{id}
   */
  bdcReportingYearUpdate = (id: number, data: BdcReportingYear, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/BdcReportingYear/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags BdcReportingYear
   * @name BdcReportingYearDelete
   * @request DELETE:/api/BdcReportingYear/{id}
   */
  bdcReportingYearDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/BdcReportingYear/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags Check
   * @name CheckCanConnectList
   * @request GET:/api/Check/can_connect
   */
  checkCanConnectList = (params: RequestParams = {}) =>
    this.request<boolean, any>({
      path: `/api/Check/can_connect`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags RefreshToken
   * @name RefreshTokenList
   * @request GET:/api/RefreshToken
   */
  refreshTokenList = (params: RequestParams = {}) =>
    this.request<RefreshToken[], any>({
      path: `/api/RefreshToken`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags RefreshToken
   * @name RefreshTokenCreate
   * @request POST:/api/RefreshToken
   */
  refreshTokenCreate = (data: RefreshToken, params: RequestParams = {}) =>
    this.request<RefreshToken, any>({
      path: `/api/RefreshToken`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags RefreshToken
   * @name RefreshTokenDetail
   * @request GET:/api/RefreshToken/{id}
   */
  refreshTokenDetail = (id: number, params: RequestParams = {}) =>
    this.request<RefreshToken, any>({
      path: `/api/RefreshToken/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags RefreshToken
   * @name RefreshTokenUpdate
   * @request PUT:/api/RefreshToken/{id}
   */
  refreshTokenUpdate = (id: number, data: RefreshToken, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/RefreshToken/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags RefreshToken
   * @name RefreshTokenDelete
   * @request DELETE:/api/RefreshToken/{id}
   */
  refreshTokenDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/RefreshToken/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmChoice
   * @name SmChoiceList
   * @request GET:/api/SmChoice
   */
  smChoiceList = (params: RequestParams = {}) =>
    this.request<SmChoice[], any>({
      path: `/api/SmChoice`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmChoice
   * @name SmChoiceCreate
   * @request POST:/api/SmChoice
   */
  smChoiceCreate = (data: SmChoice, params: RequestParams = {}) =>
    this.request<SmChoice, any>({
      path: `/api/SmChoice`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmChoice
   * @name SmChoiceDetail
   * @request GET:/api/SmChoice/{id}
   */
  smChoiceDetail = (id: string, params: RequestParams = {}) =>
    this.request<SmChoice, any>({
      path: `/api/SmChoice/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmChoice
   * @name SmChoiceUpdate
   * @request PUT:/api/SmChoice/{id}
   */
  smChoiceUpdate = (id: string, data: SmChoice, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/SmChoice/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags SmChoice
   * @name SmChoiceDelete
   * @request DELETE:/api/SmChoice/{id}
   */
  smChoiceDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/SmChoice/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmCity
   * @name SmCityList
   * @request GET:/api/SmCity
   */
  smCityList = (params: RequestParams = {}) =>
    this.request<SmCity[], any>({
      path: `/api/SmCity`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmCity
   * @name SmCityCreate
   * @request POST:/api/SmCity
   */
  smCityCreate = (data: SmCityCreateDTO, params: RequestParams = {}) =>
    this.request<SmCity, any>({
      path: `/api/SmCity`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmCity
   * @name SmCityI18NDetail
   * @request GET:/api/SmCity/i18n/{countryId}
   */
  smCityI18NDetail = (countryId: number, params: RequestParams = {}) =>
    this.request<SmTextContentUseDTO[], any>({
      path: `/api/SmCity/i18n/${countryId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmCity
   * @name SmCitySearchCreate
   * @request POST:/api/SmCity/search
   */
  smCitySearchCreate = (data: OneRequest[], params: RequestParams = {}) =>
    this.request<SmCity[], any>({
      path: `/api/SmCity/search`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmCity
   * @name SmCityUploadCreate
   * @request POST:/api/SmCity/upload
   */
  smCityUploadCreate = (
    data: {
      /** @format binary */
      File?: File;
      /** @format int32 */
      HourOffset?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/SmCity/upload`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags SmCity
   * @name SmCityDetail
   * @request GET:/api/SmCity/{id}
   */
  smCityDetail = (id: number, params: RequestParams = {}) =>
    this.request<SmCity, any>({
      path: `/api/SmCity/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmCity
   * @name SmCityUpdate
   * @request PUT:/api/SmCity/{id}
   */
  smCityUpdate = (id: number, data: SmCityUpdateDTO, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/SmCity/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags SmCity
   * @name SmCityDelete
   * @request DELETE:/api/SmCity/{id}
   */
  smCityDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/SmCity/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmCountry
   * @name SmCountryList
   * @request GET:/api/SmCountry
   */
  smCountryList = (params: RequestParams = {}) =>
    this.request<SmCountry[], any>({
      path: `/api/SmCountry`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmCountry
   * @name SmCountryCreate
   * @request POST:/api/SmCountry
   */
  smCountryCreate = (data: SmCountryCreateDTO, params: RequestParams = {}) =>
    this.request<SmCountry, any>({
      path: `/api/SmCountry`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmCountry
   * @name SmCountryI18NList
   * @request GET:/api/SmCountry/i18n
   */
  smCountryI18NList = (params: RequestParams = {}) =>
    this.request<SmTextContentUseDTO[], any>({
      path: `/api/SmCountry/i18n`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmCountry
   * @name SmCountryDetail
   * @request GET:/api/SmCountry/{id}
   */
  smCountryDetail = (id: string, params: RequestParams = {}) =>
    this.request<SmCountry, any>({
      path: `/api/SmCountry/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmCountry
   * @name SmCountryUpdate
   * @request PUT:/api/SmCountry/{id}
   */
  smCountryUpdate = (id: string, data: SmCountryUpdateDTO, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/SmCountry/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags SmCountry
   * @name SmCountryDelete
   * @request DELETE:/api/SmCountry/{id}
   */
  smCountryDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/SmCountry/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmEmissionFactorLibraries
   * @name SmEmissionFactorLibrariesList
   * @request GET:/api/SmEmissionFactorLibraries
   */
  smEmissionFactorLibrariesList = (params: RequestParams = {}) =>
    this.request<SmEmissionFactorLibraryReadDTO[], any>({
      path: `/api/SmEmissionFactorLibraries`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmEmissionFactorLibraries
   * @name SmEmissionFactorLibrariesCreate
   * @request POST:/api/SmEmissionFactorLibraries
   */
  smEmissionFactorLibrariesCreate = (data: SmEmissionFactorLibraryCreateDTO, params: RequestParams = {}) =>
    this.request<SmEmissionFactorLibrary, any>({
      path: `/api/SmEmissionFactorLibraries`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmEmissionFactorLibraries
   * @name SmEmissionFactorLibrariesDelete
   * @request DELETE:/api/SmEmissionFactorLibraries
   */
  smEmissionFactorLibrariesDelete = (data: number[], params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/SmEmissionFactorLibraries`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags SmEmissionFactorLibraries
   * @name SmEmissionFactorLibrariesSearchCreate
   * @request POST:/api/SmEmissionFactorLibraries/search
   */
  smEmissionFactorLibrariesSearchCreate = (data: OneRequest[], params: RequestParams = {}) =>
    this.request<SmEmissionFactorLibrary[], any>({
      path: `/api/SmEmissionFactorLibraries/search`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmEmissionFactorLibraries
   * @name SmEmissionFactorLibrariesUploadCreate
   * @request POST:/api/SmEmissionFactorLibraries/upload
   */
  smEmissionFactorLibrariesUploadCreate = (
    data: {
      /** @format binary */
      File?: File;
      /** @format int32 */
      HourOffset?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/SmEmissionFactorLibraries/upload`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags SmEmissionFactorLibraries
   * @name SmEmissionFactorLibrariesDetail
   * @request GET:/api/SmEmissionFactorLibraries/{OGName}/{VCode}
   */
  smEmissionFactorLibrariesDetail = (ogName: string, vCode: string, params: RequestParams = {}) =>
    this.request<SmEmissionFactorLibrary, any>({
      path: `/api/SmEmissionFactorLibraries/${ogName}/${vCode}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmEmissionFactorLibraries
   * @name SmEmissionFactorLibrariesUpdate
   * @request PUT:/api/SmEmissionFactorLibraries/{OGName}/{VCode}
   */
  smEmissionFactorLibrariesUpdate = (
    ogName: string,
    vCode: string,
    data: SmEmissionFactorLibraryUpdateDTO,
    query?: {
      /** @format int32 */
      OrgGuorpId?: number;
      EmissionFactorLibraryName?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/SmEmissionFactorLibraries/${ogName}/${vCode}`,
      method: "PUT",
      query: query,
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags SmEmissionFactorLibraries
   * @name SmEmissionFactorLibrariesDelete2
   * @request DELETE:/api/SmEmissionFactorLibraries/{OGName}/{VCode}
   * @originalName smEmissionFactorLibrariesDelete
   * @duplicate
   */
  smEmissionFactorLibrariesDelete2 = (ogName: string, vCode: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/SmEmissionFactorLibraries/${ogName}/${vCode}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmLanguage
   * @name SmLanguageList
   * @request GET:/api/SmLanguage
   */
  smLanguageList = (params: RequestParams = {}) =>
    this.request<SmLanguage[], any>({
      path: `/api/SmLanguage`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmLanguage
   * @name SmLanguageCreate
   * @request POST:/api/SmLanguage
   */
  smLanguageCreate = (data: SmLanguage, params: RequestParams = {}) =>
    this.request<SmLanguage, any>({
      path: `/api/SmLanguage`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmLanguage
   * @name SmLanguageDetail
   * @request GET:/api/SmLanguage/{id}
   */
  smLanguageDetail = (id: string, params: RequestParams = {}) =>
    this.request<SmLanguage, any>({
      path: `/api/SmLanguage/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmLanguage
   * @name SmLanguageUpdate
   * @request PUT:/api/SmLanguage/{id}
   */
  smLanguageUpdate = (id: string, data: SmLanguage, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/SmLanguage/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags SmLanguage
   * @name SmLanguageDelete
   * @request DELETE:/api/SmLanguage/{id}
   */
  smLanguageDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/SmLanguage/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmOrgGroup
   * @name SmOrgGroupList
   * @request GET:/api/SmOrgGroup
   */
  smOrgGroupList = (params: RequestParams = {}) =>
    this.request<SmOrgGroupReadDTO[], any>({
      path: `/api/SmOrgGroup`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmOrgGroup
   * @name SmOrgGroupCreate
   * @request POST:/api/SmOrgGroup
   */
  smOrgGroupCreate = (data: SmOrgGroupCreateDTO, params: RequestParams = {}) =>
    this.request<SmOrgGroup, any>({
      path: `/api/SmOrgGroup`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmOrgGroup
   * @name SmOrgGroupDelete
   * @request DELETE:/api/SmOrgGroup
   */
  smOrgGroupDelete = (data: number[], params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/SmOrgGroup`,
      method: "DELETE",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags SmOrgGroup
   * @name SmOrgGroupSearchCreate
   * @request POST:/api/SmOrgGroup/search
   */
  smOrgGroupSearchCreate = (data: OneRequest[], params: RequestParams = {}) =>
    this.request<SmOrgGroup[], any>({
      path: `/api/SmOrgGroup/search`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmOrgGroup
   * @name SmOrgGroupUploadCreate
   * @request POST:/api/SmOrgGroup/upload
   */
  smOrgGroupUploadCreate = (
    data: {
      /** @format binary */
      File?: File;
      /** @format int32 */
      HourOffset?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<void, any>({
      path: `/api/SmOrgGroup/upload`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags SmOrgGroup
   * @name SmOrgGroupDetail
   * @request GET:/api/SmOrgGroup/{OGName}/{VCode}
   */
  smOrgGroupDetail = (ogName: string, vCode: string, params: RequestParams = {}) =>
    this.request<SmOrgGroup, any>({
      path: `/api/SmOrgGroup/${ogName}/${vCode}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmOrgGroup
   * @name SmOrgGroupUpdate
   * @request PUT:/api/SmOrgGroup/{OGName}/{VCode}
   */
  smOrgGroupUpdate = (ogName: string, vCode: string, data: SmOrgGroupUpdateDTO, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/SmOrgGroup/${ogName}/${vCode}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags SmOrgGroup
   * @name SmOrgGroupDelete2
   * @request DELETE:/api/SmOrgGroup/{OGName}/{VCode}
   * @originalName smOrgGroupDelete
   * @duplicate
   */
  smOrgGroupDelete2 = (ogName: string, vCode: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/SmOrgGroup/${ogName}/${vCode}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmRolePermission
   * @name SmRolePermissionList
   * @request GET:/api/SmRolePermission
   */
  smRolePermissionList = (params: RequestParams = {}) =>
    this.request<SmRolePermission[], any>({
      path: `/api/SmRolePermission`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmRolePermission
   * @name SmRolePermissionCreate
   * @request POST:/api/SmRolePermission
   */
  smRolePermissionCreate = (data: SmRolePermission, params: RequestParams = {}) =>
    this.request<SmRolePermission, any>({
      path: `/api/SmRolePermission`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmRolePermission
   * @name SmRolePermissionDetail
   * @request GET:/api/SmRolePermission/{id}
   */
  smRolePermissionDetail = (id: number, params: RequestParams = {}) =>
    this.request<SmRolePermission, any>({
      path: `/api/SmRolePermission/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmRolePermission
   * @name SmRolePermissionUpdate
   * @request PUT:/api/SmRolePermission/{id}
   */
  smRolePermissionUpdate = (id: number, data: SmRolePermission, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/SmRolePermission/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags SmRolePermission
   * @name SmRolePermissionDelete
   * @request DELETE:/api/SmRolePermission/{id}
   */
  smRolePermissionDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/SmRolePermission/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmTextContent
   * @name SmTextContentList
   * @request GET:/api/SmTextContent
   */
  smTextContentList = (params: RequestParams = {}) =>
    this.request<SmTextContent[], any>({
      path: `/api/SmTextContent`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmTextContent
   * @name SmTextContentCreate
   * @request POST:/api/SmTextContent
   */
  smTextContentCreate = (data: SmTextContent, params: RequestParams = {}) =>
    this.request<SmTextContent, any>({
      path: `/api/SmTextContent`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmTextContent
   * @name SmTextContentDetail
   * @request GET:/api/SmTextContent/{id}
   */
  smTextContentDetail = (id: string, params: RequestParams = {}) =>
    this.request<SmTextContent, any>({
      path: `/api/SmTextContent/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmTextContent
   * @name SmTextContentUpdate
   * @request PUT:/api/SmTextContent/{id}
   */
  smTextContentUpdate = (id: string, data: SmTextContent, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/SmTextContent/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags SmTextContent
   * @name SmTextContentDelete
   * @request DELETE:/api/SmTextContent/{id}
   */
  smTextContentDelete = (id: string, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/SmTextContent/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmUser
   * @name SmUserList
   * @request GET:/api/SmUser
   */
  smUserList = (params: RequestParams = {}) =>
    this.request<SmUser[], any>({
      path: `/api/SmUser`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmUser
   * @name SmUserCreate
   * @request POST:/api/SmUser
   */
  smUserCreate = (data: SmUserCreateDTO, params: RequestParams = {}) =>
    this.request<SmUser, any>({
      path: `/api/SmUser`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmUser
   * @name SmUserDetail
   * @request GET:/api/SmUser/{id}
   */
  smUserDetail = (id: number, params: RequestParams = {}) =>
    this.request<SmUser, any>({
      path: `/api/SmUser/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags SmUser
   * @name SmUserUpdate
   * @request PUT:/api/SmUser/{id}
   */
  smUserUpdate = (id: number, data: SmUser, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/SmUser/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags SmUser
   * @name SmUserDelete
   * @request DELETE:/api/SmUser/{id}
   */
  smUserDelete = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/api/SmUser/${id}`,
      method: "DELETE",
      ...params,
    });
}
