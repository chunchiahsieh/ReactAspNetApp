import {
    ESGTableOneHeaderRow
  } from "components/Base/Data Display/ESGTable";
  //import { SmOrgGroupReadDTO } from "API_Generated/data-contracts";
  import _ from "lodash";
  import common from "styles/locales/common";
  //import { AvailableLang, i18nFront2Back } from "i18next_main";
  
  export interface Entity {    
    Organizational_unit_ID:string;
    Facility_ID:string;
    Name:string;
    Utilization:string;
    Utilization_Remarks:string;
    Description:string;
    Fuel_type:string;
    Fuel_type_Remarks:string;
    Methodology_type:string;
    Quantity:string;
    Quantity_Unit:string;
    Consumption_start_date:string;
    Consumption_end_date:string;
    Transaction_date:string;
    Evidence:string;
    Evidence_URL:string;
    Activity_data_quality_type:string;
    Activity_data_confidence_type:string;
      
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
      
      Documentation_reference: data.orgGroupName ?? "",
      Origin_correlation_ID: data.orgGroupName ?? "",
      Year: data.orgGroupName ?? "",
      Version: data.orgGroupName ?? "",
      Remarks: data.orgGroupName ?? "",
  
      CO2: data.orgGroupName ?? "",
      CO2_Unit_ID: data.orgGroupName ?? "",
      CH4: data.orgGroupName ?? "",
      CH4_Unit_ID: data.orgGroupName ?? "",
      N2O: data.orgGroupName ?? "",
      N2O_Unit_ID: data.orgGroupName ?? "",
  
      HFCs: data.orgGroupName ?? "",
      HFCs_Unit_ID: data.orgGroupName ?? "",
      PFCs: data.orgGroupName ?? "",
      PFCs_Unit_ID: data.orgGroupName ?? "",
      SF6: data.orgGroupName ?? "",
      SF6_Unit_ID: data.orgGroupName ?? "",
  
      NF3: data.orgGroupName ?? "",
      NF3_Unit_ID: data.orgGroupName ?? "",
      Other_GHGs: data.orgGroupName ?? "",
      GHGs_Unit_ID: data.orgGroupName ?? "",
      CO2E: data.orgGroupName ?? "",
      CO2E_Unit_ID: data.orgGroupName ?? "",
      Biogenic_CO2_factor: data.orgGroupName ?? "",
      Biogenic_CO2_factor_Unit_ID: data.orgGroupName ?? "",
      
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
    { keyName: "Organizational_unit_ID", label: common.OGHG_Stationary_combustion.Organizational_unit_ID, type: "text" },
    { keyName: "Facility_ID", label: common.OGHG_Stationary_combustion.Facility_ID, type: "text" },
    { keyName: "Name", label: common.OGHG_Stationary_combustion.Name, type: "text" },
    { keyName: "Utilization", label: common.OGHG_Stationary_combustion.Utilization, type: "text" },
    { keyName: "Utilization_Remarks", label: common.OGHG_Stationary_combustion.Utilization_Remarks, type: "text" },

    { keyName: "Description", label: common.OGHG_Stationary_combustion.Description, type: "text" },
    { keyName: "Fuel_type", label: common.OGHG_Stationary_combustion.Fuel_type, type: "text" },
    { keyName: "Fuel_type_Remarks", label: common.OGHG_Stationary_combustion.Fuel_type_Remarks, type: "text" },
    { keyName: "Methodology_type", label: common.OGHG_Stationary_combustion.Methodology_type, type: "text" },
    { keyName: "Quantity", label: common.OGHG_Stationary_combustion.Quantity, type: "text" },
    { keyName: "Quantity_Unit", label: common.OGHG_Stationary_combustion.Quantity_Unit, type: "text" },
    { keyName: "Consumption_start_date", label: common.OGHG_Stationary_combustion.Consumption_start_date, type: "date" },
    { keyName: "Consumption_end_date", label: common.OGHG_Stationary_combustion.Consumption_end_date, type: "date" },
    { keyName: "Transaction_date", label: common.OGHG_Stationary_combustion.Transaction_date, type: "date" },

    { keyName: "Evidence", label: common.OGHG_Stationary_combustion.Evidence, type: "text" },
    { keyName: "Evidence_URL", label: common.OGHG_Stationary_combustion.Evidence_URL, type: "text" },
    { keyName: "Activity_data_quality_type", label: common.OGHG_Stationary_combustion.Activity_data_quality_type, type: "text" },
    { keyName: "Activity_data_confidence_type", label: common.OGHG_Stationary_combustion.Activity_data_confidence_type, type: "text" },

    { keyName: "Created_By", label: common.OGHG_Emission_Factor.Created_By, type: "range" }, // TODO
    { keyName: "Created_On", label: common.OGHG_Emission_Factor.Created_On, type: "date" }, // Check
    { keyName: "Modified_By", label: common.OGHG_Emission_Factor.Modified_By, type: "range" }, // TODO
    { keyName: "Modified_On", label: common.OGHG_Emission_Factor.Modified_On, type: "date" }, // Check
  ];
  