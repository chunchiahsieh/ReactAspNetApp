import {
  ESGTableOneHeaderRow
} from "components/Base/Data Display/ESGTable";
//import { SmOrgGroupReadDTO } from "API_Generated/data-contracts";
import _ from "lodash";
import common from "styles/locales/common";
//import { AvailableLang, i18nFront2Back } from "i18next_main";

export interface Entity {
  Emission_factor_library_ID: string;
  Description: string;
  Emission_factor_source: string;
  Emission_factor_source_Remarks: string;
  Emission_factor_category: string;
  Country: string;
  Unit_ID: string;
  
  Documentation_reference: string;
  Origin_correlation_ID: string;
  Year: string;
  Version: string;
  Remarks: string;

  CO2: string;
  CO2_Unit_ID: string;
  CH4: string;
  CH4_Unit_ID: string;
  N2O: string;
  N2O_Unit_ID: string;

  HFCs: string;
  HFCs_Unit_ID: string;
  PFCs: string;
  PFCs_Unit_ID: string;
  SF6: string;
  SF6_Unit_ID: string;

  NF3: string;
  NF3_Unit_ID: string;
  Other_GHGs: string;
  GHGs_Unit_ID: string;
  CO2E: string;
  CO2E_Unit_ID: string;
  Biogenic_CO2_factor: string;
  Biogenic_CO2_factor_Unit_ID: string;
  
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
  { keyName: "Emission_factor_library_ID", label: common.OGHG_Emission_Factor.Emission_factor_library_ID, type: "text" },
  { keyName: "Description", label: common.OGHG_Emission_Factor.Description, type: "text" },

  { keyName: "Emission_factor_source", label: common.OGHG_Emission_Factor.Emission_factor_source, type: "text" },
  { keyName: "Emission_factor_source_Remarks", label: common.OGHG_Emission_Factor.Emission_factor_source_Remarks, type: "text" },
  { keyName: "Emission_factor_category", label: common.OGHG_Emission_Factor.Emission_factor_category, type: "text" },
  { keyName: "Country", label: common.OGHG_Emission_Factor.Country, type: "text" },
  { keyName: "Unit_ID", label: common.OGHG_Emission_Factor.Unit_ID, type: "text" },
  { keyName: "Documentation_reference", label: common.OGHG_Emission_Factor.Documentation_reference, type: "text" },

  { keyName: "Origin_correlation_ID", label: common.OGHG_Emission_Factor.Origin_correlation_ID, type: "text" },
  { keyName: "Year", label: common.OGHG_Emission_Factor.Year, type: "text" },
  { keyName: "Version", label: common.OGHG_Emission_Factor.Version, type: "text" },
  { keyName: "Remarks", label: common.OGHG_Emission_Factor.Remarks, type: "text" },
  { keyName: "CO2", label: common.OGHG_Emission_Factor.CO2, type: "text" },
  { keyName: "CO2_Unit_ID", label: common.OGHG_Emission_Factor.CO2_Unit_ID, type: "text" },

  { keyName: "CH4", label: common.OGHG_Emission_Factor.CH4, type: "text" },
  { keyName: "CH4_Unit_ID", label: common.OGHG_Emission_Factor.CH4_Unit_ID, type: "text" },
  { keyName: "N2O", label: common.OGHG_Emission_Factor.N2O, type: "text" },
  { keyName: "N2O_Unit_ID", label: common.OGHG_Emission_Factor.N2O_Unit_ID, type: "text" },
  { keyName: "HFCs", label: common.OGHG_Emission_Factor.HFCs, type: "text" },
  { keyName: "HFCs_Unit_ID", label: common.OGHG_Emission_Factor.HFCs_Unit_ID, type: "text" },

  { keyName: "PFCs", label: common.OGHG_Emission_Factor.PFCs, type: "text" },
  { keyName: "PFCs_Unit_ID", label: common.OGHG_Emission_Factor.PFCs_Unit_ID, type: "text" },
  { keyName: "SF6", label: common.OGHG_Emission_Factor.SF6, type: "text" },
  { keyName: "SF6_Unit_ID", label: common.OGHG_Emission_Factor.SF6_Unit_ID, type: "text" },
  { keyName: "NF3", label: common.OGHG_Emission_Factor.NF3, type: "text" },
  { keyName: "NF3_Unit_ID", label: common.OGHG_Emission_Factor.NF3_Unit_ID, type: "text" },

  { keyName: "Other_GHGs", label: common.OGHG_Emission_Factor.Other_GHGs, type: "text" },
  { keyName: "GHGs_Unit_ID", label: common.OGHG_Emission_Factor.GHGs_Unit_ID, type: "text" },
  { keyName: "CO2E", label: common.OGHG_Emission_Factor.CO2E, type: "text" },
  { keyName: "CO2E_Unit_ID", label: common.OGHG_Emission_Factor.CO2E_Unit_ID, type: "text" },
  { keyName: "Biogenic_CO2_factor", label: common.OGHG_Emission_Factor.Biogenic_CO2_factor, type: "text" },
  { keyName: "Biogenic_CO2_factor_Unit_ID", label: common.OGHG_Emission_Factor.Biogenic_CO2_factor_Unit_ID, type: "text" },

  
  { keyName: "Created_By", label: common.OGHG_Emission_Factor.Created_By, type: "range" }, // TODO
  { keyName: "Created_On", label: common.OGHG_Emission_Factor.Created_On, type: "date" }, // Check
  { keyName: "Modified_By", label: common.OGHG_Emission_Factor.Modified_By, type: "range" }, // TODO
  { keyName: "Modified_On", label: common.OGHG_Emission_Factor.Modified_On, type: "date" }, // Check
];
