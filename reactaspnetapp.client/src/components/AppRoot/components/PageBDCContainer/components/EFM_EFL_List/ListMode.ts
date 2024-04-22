import {
    ESGTableOneHeaderRow
  } from "components/Base/Data Display/ESGTable";
  //import { SmOrgGroupReadDTO } from "API_Generated/data-contracts";
  import _ from "lodash";
  import common from "styles/locales/common";
  //import { AvailableLang, i18nFront2Back } from "i18next_main";
  
  export interface Entity {
    emission_factor_library_name: string;
    Description: string;
    library_type: string;
    doc_ref: string;
    origin_correlation_id: string;
    year: number;
    version: number;
    
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
    { keyName: "emission_factor_library_name", label: common.OGHG_Emission_Factor_Library.emission_factor_library_name, type: "text" },
    { keyName: "Description", label: common.OGHG_Emission_Factor_Library.Description, type: "text" },
    { keyName: "library_type", label: common.OGHG_Emission_Factor_Library.library_type, type: "text" },
    { keyName: "doc_ref", label: common.OGHG_Emission_Factor_Library.doc_ref, type: "text" },
    { keyName: "origin_correlation_id", label: common.OGHG_Emission_Factor_Library.origin_correlation_id, type: "text" },
  
    { keyName: "year", label: common.OGHG_Emission_Factor_Library.year, type: "range" },
    { keyName: "version", label: common.OGHG_Emission_Factor_Library.version, type: "range" },
      
    { keyName: "Created_By", label: common.OGHG_Emission_Factor.Created_By, type: "range" }, // TODO
    { keyName: "Created_On", label: common.OGHG_Emission_Factor.Created_On, type: "date" }, // Check
    { keyName: "Modified_By", label: common.OGHG_Emission_Factor.Modified_By, type: "range" }, // TODO
    { keyName: "Modified_On", label: common.OGHG_Emission_Factor.Modified_On, type: "date" }, // Check
  ];
  