import {
    ESGTableOneHeaderRow
  } from "components/Base/Data Display/ESGTable";
  //import { SmOrgGroupReadDTO } from "API_Generated/data-contracts";
  import _ from "lodash";
  import common from "styles/locales/common";
  //import { AvailableLang, i18nFront2Back } from "i18next_main";
  
  export interface Entity {
    reporting_year_id: string;
    reporting_period_name: string;
    start_date: string;
    end_date: string;    
    period_status: string;    
    
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
    { keyName: "reporting_year_id", label: common.OGHG_Reporting_period.reporting_year_id, type: "text" },
    { keyName: "reporting_period_name", label: common.OGHG_Reporting_period.reporting_period_name, type: "text" },
    { keyName: "start_date", label: common.OGHG_Reporting_period.start_date, type: "date" },
    { keyName: "end_date", label: common.OGHG_Reporting_period.end_date, type: "date" },
    { keyName: "period_status", label: common.OGHG_Reporting_period.period_status, type: "text" },
    
    { keyName: "Created_By", label: common.OGHG_Emission_Factor.Created_By, type: "range" }, // TODO
    { keyName: "Created_On", label: common.OGHG_Emission_Factor.Created_On, type: "date" }, // Check
    { keyName: "Modified_By", label: common.OGHG_Emission_Factor.Modified_By, type: "range" }, // TODO
    { keyName: "Modified_On", label: common.OGHG_Emission_Factor.Modified_On, type: "date" }, // Check
  ];
  