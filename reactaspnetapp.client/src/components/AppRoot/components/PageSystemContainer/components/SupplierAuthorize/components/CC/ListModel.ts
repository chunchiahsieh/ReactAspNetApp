import {
    ESGTableOneHeaderRow
  } from "components/Base/Data Display/ESGTable";
  import { OGHG_Emission_Factor_Library_ReadDTO } from "API_Generated/data-contracts";
  import _ from "lodash";
  import common from "styles/locales/common";
  import { AvailableLang, i18nFront2Back } from "i18next_main";
  
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
  /* */
  export const headerSM_VAM_List: (Omit<ESGTableOneHeaderRow, "keyName"> & {
    keyName: keyof Entity;
  })[] = [
    { keyName: "emission_factor_library_name", label: common.OGHG_Emission_Factor_Library.emission_factor_library_name, type: "text" },
    { keyName: "Description", label: common.OGHG_Emission_Factor_Library.Description, type: "text" },
    { keyName: "library_type", label: common.OGHG_Emission_Factor_Library.library_type, type: "text" },    
    { keyName: "doc_ref", label: common.OGHG_Emission_Factor_Library.doc_ref, type: "text" }, 
    { keyName: "origin_correlation_id", label: common.OGHG_Emission_Factor_Library.origin_correlation_id, type: "text" }, 
    { keyName: "year", label: common.OGHG_Emission_Factor_Library.year, type: "range" }, 
    { keyName: "version", label: common.OGHG_Emission_Factor_Library.version, type: "range" }, 
    { keyName: "Created_By", label: common.OGHG_Emission_Factor_Library.Created_By, type: "range" }, // TODO
    { keyName: "Created_On", label: common.OGHG_Emission_Factor_Library.Created_On, type: "date" }, // Check
    { keyName: "Modified_By", label: common.OGHG_Emission_Factor_Library.Modified_By, type: "range" }, // TODO
    { keyName: "Modified_On", label: common.OGHG_Emission_Factor_Library.Modified_On, type: "date" }, // Check
  ];
  
  /*
  
  export function convertToSmOrgGroup4List(
    data: OGHG_Emission_Factor_Library_ReadDTO,
    lang: AvailableLang
  ): Entity {
    const result: Entity = {
      emission_factor_library_name: data.emission_factor_library_name ?? "",
      Description: data.Description ?? "",
      library_type: data.library_type ?? "",
      doc_ref: data.doc_ref ?? "",
      origin_correlation_id: data.origin_correlation_id ?? "",
      year: data.year ?? 0,
      version: data.version ?? 0,
      Created_By: data.Created_By ?? 0,
      Created_On: data.Created_On ?? "",
      Modified_By: data.Modified_By ?? 0,
      Modified_On: data.Modified_On ?? "",
    };
    return result;
  }*/