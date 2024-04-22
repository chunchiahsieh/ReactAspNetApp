import {
    ESGTableOneHeaderRow
  } from "components/Base/Data Display/ESGTable";
  import { SmOrgGroupReadDTO } from "API_Generated/data-contracts";
  import _ from "lodash";
  import common from "styles/locales/common";
  import { AvailableLang, i18nFront2Back } from "i18next_main";
  
  export interface Entity {
    Organizational_unit_ID: string;
    Facility_ID: string;
    Name: string;
    Utilization: string;
    Utilization_Remarks: string;
    Description: string;
    Fuel_type: string;
    Fuel_type_Remarks: string;
    Methodology_type: string;
    Quantity: string;
    Quantity_Unit: string;
    Consumption_start_date: string;
    Consumption_end_date: string;
    Transaction_date: string;
    Evidence: string;
    Evidence_URL: string;
    Activity_data_quality_type: string;
    Activity_data_confidence_type: string;    
  
    Created_By: number; // TODO
    Created_On: string; // Check
    Modified_By: number; // TODO
    Modified_On: string; // Check
  }
  /*
  export function convertToSmOrgGroup4List(
    data: SmOrgGroupReadDTO,
    lang: AvailableLang
  ): Entity {
    const result: Entity = {
      Organizational_unit_ID: data.Organizational_unit_ID ?? "",
      FaciFacility_IDlity_ID: data.Facility_ID ?? "",
      Name: data.Name ?? "",
      Utilization: data.Utilization ?? "",
      Utilization_Remarks: data.Utilization_Remarks ?? "",
      Description: data.Description ?? "",
      Fuel_type: data.Fuel_type ?? "",
  
      Fuel_type_Remarks: data.Fuel_type_Remarks ?? "",
      Methodology_type: data.Methodology_type ?? "",
      
      Quantity: data.Quantity ?? "",
      Quantity_Unit: data.Quantity_Unit ?? "",
      Consumption_start_date: data.Consumption_start_date ?? "",
      Consumption_end_date: data.Consumption_end_date ?? "",
      Transaction_date: data.Transaction_date ?? "",
      Evidence: data.Evidence ?? "",
      Evidence_URL: data.Evidence_URL ?? "",
      Activity_data_quality_type: data.Activity_data_quality_type ?? "",
      Activity_data_confidence_type: data.Activity_data_confidence_type ?? "",
      
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
    { keyName: "Organizational_unit_ID", label: common.OGHG_Mobile_combustion.Organizational_unit_ID, type: "text" },
    { keyName: "Facility_ID", label: common.OGHG_Mobile_combustion.Facility_ID, type: "text" },
    { keyName: "Name", label: common.OGHG_Mobile_combustion.Name, type: "text" },
    { keyName: "Utilization", label: common.OGHG_Mobile_combustion.Utilization, type: "text" },
    { keyName: "Utilization_Remarks", label: common.OGHG_Mobile_combustion.Utilization_Remarks, type: "text" },
    { keyName: "Description", label: common.OGHG_Mobile_combustion.Description, type: "text" },
    { keyName: "Fuel_type", label: common.OGHG_Mobile_combustion.Fuel_type, type: "text" },
    { keyName: "Fuel_type_Remarks", label: common.OGHG_Mobile_combustion.Fuel_type_Remarks, type: "text" },
    { keyName: "Methodology_type", label: common.OGHG_Mobile_combustion.Methodology_type, type: "text" },
    { keyName: "Quantity", label: common.OGHG_Mobile_combustion.Quantity, type: "text" },
    { keyName: "Quantity_Unit", label: common.OGHG_Mobile_combustion.Quantity_Unit, type: "text" },
    { keyName: "Consumption_start_date", label: common.OGHG_Mobile_combustion.Consumption_start_date, type: "text" },
    { keyName: "Consumption_end_date", label: common.OGHG_Mobile_combustion.Consumption_end_date, type: "text" },
    { keyName: "Transaction_date", label: common.OGHG_Mobile_combustion.Transaction_date, type: "text" },
    { keyName: "Evidence", label: common.OGHG_Mobile_combustion.Evidence, type: "text" },
    { keyName: "Evidence_URL", label: common.OGHG_Mobile_combustion.Evidence_URL, type: "text" },
    { keyName: "Activity_data_quality_type", label: common.OGHG_Mobile_combustion.Activity_data_quality_type, type: "text" },
    { keyName: "Activity_data_confidence_type", label: common.OGHG_Mobile_combustion.Activity_data_confidence_type, type: "text" },
    { keyName: "Created_By", label: common.OGHG_Mobile_combustion.Created_By, type: "range" }, // TODO
    { keyName: "Created_On", label: common.OGHG_Mobile_combustion.Created_On, type: "date" }, // Check
    { keyName: "Modified_By", label: common.OGHG_Mobile_combustion.Modified_By, type: "range" }, // TODO
    { keyName: "Modified_On", label: common.OGHG_Mobile_combustion.Modified_On, type: "date" }, // Check
  ];
  