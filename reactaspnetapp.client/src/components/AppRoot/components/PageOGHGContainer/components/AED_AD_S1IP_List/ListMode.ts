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
  Description: string;
  Industrial_process_type_ID: string;
  Industrial_process_type_Remarks: string;
  Industrial_process_equipment_type: string;
  Industrial_process_equipment_type_Remarks: string;
  Industrial_process_material_type: string;
  Industrial_process_material_type_Remarks: string;
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
): SmOrgGroup4List {
  const result: SmOrgGroup4List = {
    Organizational_unit_ID: data.Organizational_unit_ID ?? "",
    Facility_ID: data.Facility_ID ?? "",
    Name: data.Name ?? "",
    Description: data.Description ?? "",
    Industrial_process_type_ID: data.Industrial_process_type_ID ?? "",
    
    Industrial_process_type_Remarks: data.Industrial_process_type_Remarks ?? "",
    Industrial_process_equipment_type: data.Industrial_process_equipment_type ?? "",
    Industrial_process_equipment_type_Remarks: data.Industrial_process_equipment_type_Remarks ?? "",
    Industrial_process_material_type: data.Industrial_process_material_type ?? "",
    Industrial_process_material_type_Remarks: data.Industrial_process_material_type_Remarks ?? "",
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
  { keyName: "Organizational_unit_ID", label: common.OGHG_Industrial_process.Organizational_unit_ID, type: "text" },
  { keyName: "Facility_ID", label: common.OGHG_Industrial_process.Facility_ID, type: "text" },
  { keyName: "Name", label: common.OGHG_Industrial_process.Name, type: "text" },
  { keyName: "Description", label: common.OGHG_Industrial_process.Description, type: "text" },
  { keyName: "Industrial_process_type_ID", label: common.OGHG_Industrial_process.Industrial_process_type_ID, type: "text" },
  { keyName: "Industrial_process_type_Remarks", label: common.OGHG_Industrial_process.Industrial_process_type_Remarks, type: "text" },
  { keyName: "Industrial_process_equipment_type", label: common.OGHG_Industrial_process.Industrial_process_equipment_type, type: "text" },
  { keyName: "Industrial_process_equipment_type_Remarks", label: common.OGHG_Industrial_process.Industrial_process_equipment_type_Remarks, type: "text" },
  { keyName: "Industrial_process_material_type", label: common.OGHG_Industrial_process.Industrial_process_material_type, type: "text" },
  { keyName: "Industrial_process_material_type_Remarks", label: common.OGHG_Industrial_process.Industrial_process_material_type_Remarks, type: "text" },
  { keyName: "Methodology_type", label: common.OGHG_Industrial_process.Methodology_type, type: "text" },

  { keyName: "Quantity", label: common.OGHG_Industrial_process.Quantity, type: "text" },
  { keyName: "Quantity_Unit", label: common.OGHG_Industrial_process.Quantity_Unit, type: "text" },
  { keyName: "Consumption_start_date", label: common.OGHG_Industrial_process.Consumption_start_date, type: "text" },
  { keyName: "Consumption_end_date", label: common.OGHG_Industrial_process.Consumption_end_date, type: "text" },
  { keyName: "Transaction_date", label: common.OGHG_Industrial_process.Transaction_date, type: "text" },
  { keyName: "Evidence", label: common.OGHG_Industrial_process.Evidence, type: "text" },
  { keyName: "Evidence_URL", label: common.OGHG_Industrial_process.Evidence_URL, type: "text" },
  { keyName: "Activity_data_quality_type", label: common.OGHG_Industrial_process.Activity_data_quality_type, type: "text" },
  { keyName: "Activity_data_confidence_type", label: common.OGHG_Industrial_process.Activity_data_confidence_type, type: "text" },

  { keyName: "Created_By", label: common.OGHG_Industrial_process.Created_By, type: "range" }, // TODO
  { keyName: "Created_On", label: common.OGHG_Industrial_process.Created_On, type: "date" }, // Check
  { keyName: "Modified_By", label: common.OGHG_Industrial_process.Modified_By, type: "range" }, // TODO
  { keyName: "Modified_On", label: common.OGHG_Industrial_process.Modified_On, type: "date" }, // Check
];
