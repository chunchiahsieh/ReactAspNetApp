import styles from './EFM_EF_CreateForm.module.scss';
import { useTranslation } from "react-i18next";
import { ESGForm } from "components";
import localeCommon from "styles/locales/common";
import dayjs from "dayjs";

export interface EFM_EF_CreateFormProps {
 
}

export function EFM_EF_CreateForm({}: EFM_EF_CreateFormProps) {
  const [t, i18n] = useTranslation("common");
  return (
    <ESGForm
        title={t(localeCommon.Funcation_id.EFM_EF_CreateForm)}
        columns = {[
          { name: { en: t(localeCommon.OGHG_Emission_Factor.Emission_factor_library_ID), zh: t(localeCommon.OGHG_Emission_Factor.Emission_factor_library_ID) }//{ name: { en: "排放因子庫", zh: "排放因子庫" }
            , cType: "search" , value: "", required: true, nCols: 1},            
            { name: { en: t(localeCommon.OGHG_Emission_Factor.Description), zh: t(localeCommon.OGHG_Emission_Factor.Description) }//{ name: { en: "說明", zh: "說明"}
              , cType: "text" , value: ""},
            { name: { en: t(localeCommon.OGHG_Emission_Factor.Unit_ID), zh: t(localeCommon.OGHG_Emission_Factor.Unit_ID) }//{ name: { en: "排放因子單位", zh: "排放因子單位" }
            , cType: "search" , value: "", required: true},  
            

            { name: { en: t(localeCommon.OGHG_Emission_Factor.Emission_factor_source), zh: t(localeCommon.OGHG_Emission_Factor.Emission_factor_source) }//{ name: { en: "排放因子來源", zh: "排放因子來源" }
            , cType: "select" , value: "", required: true},
            { name: { en: t(localeCommon.OGHG_Emission_Factor.Documentation_reference), zh: t(localeCommon.OGHG_Emission_Factor.Documentation_reference) }//{ name: { en: "相關文件連結", zh: "相關文件連結" }
            , cType: "text" , value: ""},

            { name: { en: t(localeCommon.OGHG_Emission_Factor.Emission_factor_source_Remarks), zh: t(localeCommon.OGHG_Emission_Factor.Emission_factor_source_Remarks) }//{ name: { en: "排放因子來源備註", zh: "排放因子來源備註" }
            , cType: "text" , value: ""},
            { name: { en: t(localeCommon.OGHG_Emission_Factor.Origin_correlation_ID), zh: t(localeCommon.OGHG_Emission_Factor.Origin_correlation_ID) }//{ name: { en: "關聯資料ID", zh: "關聯資料ID" }
            , cType: "text" , value: ""},      
            
            { name: { en: t(localeCommon.OGHG_Emission_Factor.Emission_factor_category), zh: t(localeCommon.OGHG_Emission_Factor.Emission_factor_category) }//{ name: { en: "排放因子種類", zh: "排放因子種類" }
            , cType: "select" , value: "", required: true},
            { name: { en: t(localeCommon.OGHG_Emission_Factor.Year), zh: t(localeCommon.OGHG_Emission_Factor.Year) }//{ name: { en: "年份", zh: "年份" }
            , cType: "text" , value: ""},               

            { name: { en: t(localeCommon.OGHG_Emission_Factor.Country), zh: t(localeCommon.OGHG_Emission_Factor.Country) }//{ name: { en: "國家", zh: "國家" }
            , cType: "select" , value: ""},
            { name: { en: t(localeCommon.OGHG_Emission_Factor.Version), zh: t(localeCommon.OGHG_Emission_Factor.Version) }//{ name: { en: "版本", zh: "版本" }
            , cType: "text" , value: ""},
           
            { name: { en: t(localeCommon.OGHG_Emission_Factor.Remarks), zh: t(localeCommon.OGHG_Emission_Factor.Remarks) }//{ name: { en: "備註", zh: "備註" }
            , cType: "text" , value: "", nCols: 1},

            { name: { en: t(localeCommon.OGHG_Emission_Factor.CO2), zh: t(localeCommon.OGHG_Emission_Factor.CO2) }//{ name: { en: "CO₂", zh: "CO₂" }
            , cType: "text" , value: ""},
            { name: { en: t(localeCommon.OGHG_Emission_Factor.CO2_Unit_ID), zh: t(localeCommon.OGHG_Emission_Factor.CO2_Unit_ID) }//{ name: { en: "CO₂ unit", zh: "CO₂ unit" }
            , cType: "search" , value: ""},

            { name: { en: t(localeCommon.OGHG_Emission_Factor.CH4), zh: t(localeCommon.OGHG_Emission_Factor.CH4) }//{ name: { en: "CH₄", zh: "CH₄" }
            , cType: "text" , value: ""},
            { name: { en: t(localeCommon.OGHG_Emission_Factor.CH4_Unit_ID), zh: t(localeCommon.OGHG_Emission_Factor.CH4_Unit_ID) }//{ name: { en: "CH₄ unit", zh: "CH₄ unit" }
            , cType: "search" , value: ""},

            { name: { en: t(localeCommon.OGHG_Emission_Factor.N2O), zh: t(localeCommon.OGHG_Emission_Factor.N2O) }//{ name: { en: "N₂O", zh: "N₂O" }
            , cType: "text" , value: ""},
            { name: { en: t(localeCommon.OGHG_Emission_Factor.N2O_Unit_ID), zh: t(localeCommon.OGHG_Emission_Factor.N2O_Unit_ID) }//{ name: { en: "N₂O unit", zh: "N₂O unit" }
            , cType: "search" , value: ""},

            { name: { en: t(localeCommon.OGHG_Emission_Factor.HFCs), zh: t(localeCommon.OGHG_Emission_Factor.HFCs) }//{ name: { en: "HFCs", zh: "HFCs" }
            , cType: "text" , value: ""},
            { name: { en: t(localeCommon.OGHG_Emission_Factor.HFCs_Unit_ID), zh: t(localeCommon.OGHG_Emission_Factor.HFCs_Unit_ID) }//{ name: { en: "HFCs unit", zh: "HFCs unit" }
            , cType: "search" , value: ""},

            { name: { en: t(localeCommon.OGHG_Emission_Factor.PFCs), zh: t(localeCommon.OGHG_Emission_Factor.PFCs) }//{ name: { en: "PFCs", zh: "PFCs" }
            , cType: "text" , value: ""},
            { name: { en: t(localeCommon.OGHG_Emission_Factor.PFCs_Unit_ID), zh: t(localeCommon.OGHG_Emission_Factor.PFCs_Unit_ID) }//{ name: { en: "PFCs unit", zh: "PFCs unit" }
            , cType: "search" , value: ""},

            { name: { en: t(localeCommon.OGHG_Emission_Factor.SF6), zh: t(localeCommon.OGHG_Emission_Factor.SF6) }// { name: { en: "SF₆", zh: "SF₆" }
            , cType: "text" , value: ""},
            { name: { en: t(localeCommon.OGHG_Emission_Factor.SF6_Unit_ID), zh: t(localeCommon.OGHG_Emission_Factor.SF6_Unit_ID) }//{ name: { en: "SF₆ unit", zh: "SF₆ unit" }
            , cType: "search" , value: ""},

            { name: { en: t(localeCommon.OGHG_Emission_Factor.NF3), zh: t(localeCommon.OGHG_Emission_Factor.NF3) }//{ name: { en: "NF₃", zh: "NF₃" }
            , cType: "text" , value: ""},
            { name: { en: t(localeCommon.OGHG_Emission_Factor.NF3_Unit_ID), zh: t(localeCommon.OGHG_Emission_Factor.NF3_Unit_ID) }//{ name: { en: "NF₃ unit", zh: "NF₃ unit" }
            , cType: "search" , value: ""},

            { name: { en: t(localeCommon.OGHG_Emission_Factor.Other_GHGs), zh: t(localeCommon.OGHG_Emission_Factor.Other_GHGs) }//{ name: { en: "Other GHGs", zh: "Other GHGs" }
            , cType: "text" , value: ""},
            { name: { en: t(localeCommon.OGHG_Emission_Factor.GHGs_Unit_ID), zh: t(localeCommon.OGHG_Emission_Factor.GHGs_Unit_ID) }//{ name: { en: "Other GHGs unit", zh: "Other GHGs unit" }
            , cType: "search" , value: ""},

            { name: { en: t(localeCommon.OGHG_Emission_Factor.CO2E), zh: t(localeCommon.OGHG_Emission_Factor.CO2E) }//{ name: { en: "CO₂E", zh: "CO₂E" }
            , cType: "text" , value: ""},
            { name: { en: t(localeCommon.OGHG_Emission_Factor.CO2E_Unit_ID), zh: t(localeCommon.OGHG_Emission_Factor.CO2E_Unit_ID) }//{ name: { en: "CO₂E unit", zh: "CO₂E unit" }
            , cType: "search" , value: ""},

            { name: { en: t(localeCommon.OGHG_Emission_Factor.Biogenic_CO2_factor), zh: t(localeCommon.OGHG_Emission_Factor.Biogenic_CO2_factor) }//{ name: { en: "Biogenic CO₂ factor", zh: "Biogenic CO₂ factor" }
            , cType: "text" , value: ""},
            { name: { en: t(localeCommon.OGHG_Emission_Factor.Biogenic_CO2_factor_Unit_ID), zh: t(localeCommon.OGHG_Emission_Factor.Biogenic_CO2_factor_Unit_ID) }//{ name: { en: "Biogenic CO₂ factor unit", zh: "Biogenic CO₂ factor unit" }
            , cType: "search" , value: ""},
            
            { name: { en: t(localeCommon.OGHG_Emission_Factor.Modified_By), zh: t(localeCommon.OGHG_Emission_Factor.Modified_By) }//{ name: { en: "最後修改人", zh: "最後修改人" }
            , cType: "text" , value: "" , fnType: "disable"},
            { name: { en: t(localeCommon.OGHG_Emission_Factor.Modified_On), zh: t(localeCommon.OGHG_Emission_Factor.Modified_On) }//{ name: { en: "最後修改時間", zh: "最後修改時間" }
            , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "disable"},
            { name: { en: t(localeCommon.OGHG_Emission_Factor.Created_By), zh: t(localeCommon.OGHG_Emission_Factor.Created_By) }//{ name: { en: "建立人", zh: "建立人" }
            , cType: "text" , value: "", fnType: "disable"},
            { name: { en: t(localeCommon.OGHG_Emission_Factor.Created_On), zh: t(localeCommon.OGHG_Emission_Factor.Created_On) }//{ name: { en: "建立時間", zh: "建立時間" }
            , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "disable"},
        ]}
        nColumn={2}
        stSubmit= "save_and_close"
        stClose= "cancel"
      >
      </ESGForm>
  );
}
