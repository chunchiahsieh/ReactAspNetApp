import {
    ESGTableOneHeaderRow
  } from "components/Base/Data Display/ESGTable";
  //import { SmOrgGroupReadDTO } from "API_Generated/data-contracts";
  import _ from "lodash";
  import common from "styles/locales/common";
  //import { AvailableLang, i18nFront2Back } from "i18next_main";
  
  export interface Entity {
    org_unit_name: string;
    Description: string;
    org_type: string;    
    parent_org_unit_id:string;
    website:string;
    business_registration_no:string;
    stock_identification_no:string;
    Address_1_Composite:string;
    country_id:string;
    zip_postal_code:string;
    city_id:string;
    street:string;
    latitude:string;
    longitude:string;
    remark:string;
    facility_name:string;
    facility_type:string;

    Created_By: number; // TODO
    Created_On: string; // Check
    Modified_By: number; // TODO
    Modified_On: string; // Check
  }
  /*
  export function convertToEFM_EF_4List(
    data: SmOrgGroupReadDTO,
    lang: AvailableLang
  ): EFM_EF_4List {
    const result: EFM_EF_4List = {    
      Emission_factor_library_ID: data.orgGroupName ?? "",
      Description: data.orgGroupName ?? "",
      Emission_factor_source: data.orgGroupName ?? "",
      Emission_factor_source_Remarks: data.orgGroupName ?? "",
      Emission_factor_category: data.orgGroupName ?? "",
      Country: data.orgGroupName ?? "",
      Unit_ID: data.orgGroupName ?? "",
      
      Created_By: data.Created_By ?? 0,
      Created_On: data.Created_On ?? "",
      Modified_By: data.Modified_By ?? 0,
      Modified_On: data.Modified_On ?? "",
    };
    return result;
  }*/
  
  export const header_List: (Omit<ESGTableOneHeaderRow, "keyName"> & {
    keyName: keyof Entity;
  })[] = [
    { keyName: "org_unit_name", label: common.OGHG_Organizational_Unit.org_unit_name, type: "text" },
    { keyName: "Description", label: common.OGHG_Organizational_Unit.Description, type: "text" },
    { keyName: "org_type", label: common.OGHG_Organizational_Unit.org_type, type: "text" },
    { keyName: "parent_org_unit_id", label: common.OGHG_Organizational_Unit.parent_org_unit_id, type: "text" },
    { keyName: "website", label: common.OGHG_Organizational_Unit.website, type: "text" },
  
    { keyName: "business_registration_no", label: common.OGHG_Organizational_Unit.business_registration_no, type: "text" },
    { keyName: "stock_identification_no", label: common.OGHG_Organizational_Unit.stock_identification_no, type: "text" },

    { keyName: "Address_1_Composite", label: common.OGHG_Organizational_Unit.Address_1_Composite, type: "text" },
    { keyName: "country_id", label: common.OGHG_Organizational_Unit.country_id, type: "text" },
    { keyName: "zip_postal_code", label: common.OGHG_Organizational_Unit.zip_postal_code, type: "text" },
    { keyName: "city_id", label: common.OGHG_Organizational_Unit.city_id, type: "text" },
    { keyName: "street", label: common.OGHG_Organizational_Unit.street, type: "text" },
    { keyName: "latitude", label: common.OGHG_Organizational_Unit.latitude, type: "text" },
    { keyName: "longitude", label: common.OGHG_Organizational_Unit.longitude, type: "text" },
    { keyName: "remark", label: common.OGHG_Organizational_Unit.remark, type: "text" },
    { keyName: "facility_name", label: common.OGHG_Organizational_Unit.facility_name, type: "text" },
    { keyName: "facility_type", label: common.OGHG_Organizational_Unit.facility_type, type: "text" },

      
    { keyName: "Created_By", label: common.OGHG_Emission_Factor.Created_By, type: "range" }, // TODO
    { keyName: "Created_On", label: common.OGHG_Emission_Factor.Created_On, type: "date" }, // Check
    { keyName: "Modified_By", label: common.OGHG_Emission_Factor.Modified_By, type: "range" }, // TODO
    { keyName: "Modified_On", label: common.OGHG_Emission_Factor.Modified_On, type: "date" }, // Check
  ];
  