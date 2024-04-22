import styles from './AED_AD_S1IP_PM_EditForm.module.scss';
import { useTranslation } from "react-i18next";
import { ESGForm } from "components";
import localeCommon from "styles/locales/common";
import dayjs from "dayjs";

export interface AED_AD_S1IP_PM_Edit_FormProps {
  
}

export function AED_AD_S1IP_PM_EditForm({}: AED_AD_S1IP_PM_EditFormProps) {
  const [t, i18n] = useTranslation("common");  
  return (
    <ESGForm
        title={t(localeCommon.Funcation_id.AED_AD_S1IP_PM_EditForm)}
        columns = {[
          { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Organizational_unit_ID), zh: t(localeCommon.OGHG_Industrial_process_PM.Organizational_unit_ID) }//{ name: { en: "所屬組織單位", zh: "所屬組織單位" }
            , cType: "search" , value: "", required: true}, 
            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Facility_ID), zh: t(localeCommon.OGHG_Industrial_process_PM.Facility_ID) }//{ name: { en: "所屬據點", zh: "所屬據點"}
            , cType: "search" , value: "",required: true},            
            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Name), zh: t(localeCommon.OGHG_Industrial_process_PM.Name) }//{ name: { en: "排放名稱", zh: "排放名稱" }
            , cType: "text" , value: "", required: true, nCols: 1,fnType: "disable" },
            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Industrial_process_type_ID), zh: t(localeCommon.OGHG_Industrial_process_PM.Industrial_process_type_ID) }//{ name: { en: "製程類型", zh: "製程類型" }
            , cType: "search" , value: "", required: true},                     
            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Industrial_process_type_Remarks), zh: t(localeCommon.OGHG_Industrial_process_PM.Industrial_process_type_Remarks) }//{ name: { en: "製程類型備註", zh: "製程類型備註" }
            , cType: "text" , value: "", required: false},
            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Description), zh: t(localeCommon.OGHG_Industrial_process_PM.Description) }//{ name: { en: "說明", zh: "說明" }
            , cType: "text" , value: "", nCols: 1,required: false },

            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Industrial_process_material_type), zh: t(localeCommon.OGHG_Industrial_process_PM.Industrial_process_material_type) }//{ name: { en: "原物料類型", zh: "原物料類型" }
            , cType: "search" , value: "", required: true},
            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Industrial_process_material_type_Remarks), zh: t(localeCommon.OGHG_Industrial_process_PM.Industrial_process_material_type_Remarks) }//{ name: { en: "原物料類型備註", zh: "原物料類型備註" }
            , cType: "text" , value: "", required: true}, 

            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Industrial_process_equipment_type), zh: t(localeCommon.OGHG_Industrial_process_PM.Industrial_process_equipment_type) }//{ name: { en: "製程設備類型", zh: "製程設備類型" }
            , cType: "search" , value: "", required: true},
            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Industrial_process_equipment_type_Remarks), zh: t(localeCommon.OGHG_Industrial_process_PM.Industrial_process_equipment_type_Remarks) }//{ name: { en: "製程設備類型備註", zh: "製程設備類型備註" }
            , cType: "text" , value: "", required: false}, 

            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Methodology_type), zh: t(localeCommon.OGHG_Industrial_process_PM.Methodology_type) }//{ name: { en: "計算方法", zh: "計算方法" }
            , cType: "text" , value: "", required: true, fnType: "disable"  },
            { name: { en: "", zh: "" }
            , cType: "text" , value: "",  fnType: "view"  },
           
            
            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Quantity), zh: t(localeCommon.OGHG_Industrial_process_PM.Quantity) }//{ name: { en: "數量", zh: "數量" }
            , cType: "number" , value: "", required: true},

          
            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Quantity_Unit), zh: t(localeCommon.OGHG_Industrial_process_PM.Quantity_Unit) }//{ name: { en: "數量單位", zh: "數量單位" }
            , cType: "search" , value: "", required: true}, 
           
            
            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Consumption_start_date), zh: t(localeCommon.OGHG_Industrial_process_PM.Consumption_start_date) }//{ name: { en: "認列開始日", zh: "認列開始日" }
            , cType: "date" , value: "", required: true},           
            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Consumption_end_date), zh: t(localeCommon.OGHG_Industrial_process_PM.Consumption_end_date) }//{ name: { en: "認列結束日", zh: "認列結束日" }
            , cType: "date" , value: "",required: true},

            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Transaction_date), zh: t(localeCommon.OGHG_Industrial_process_PM.Transaction_date) }//{ name: { en: "交易日", zh: "交易日" }
            , cType: "date" , value: "",required: true},
            { name: { en: "", zh: "" }
            , cType: "text" , value: "",  fnType: "view"  },

            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Evidence), zh: t(localeCommon.OGHG_Industrial_process_PM.Evidence) }//{ name: { en: "佐證資料", zh: "佐證資料" }
            , cType: "text" , value: ""},
            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Evidence_URL), zh: t(localeCommon.OGHG_Industrial_process_PM.Evidence_URL) }//{ name: { en: "佐證資料連結", zh: "佐證資料連結" }
            , cType: "text" , value: ""},
                       
            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Modified_By), zh: t(localeCommon.OGHG_Industrial_process_PM.Modified_By) }//{ name: { en: "最後修改人", zh: "最後修改人" }
            , cType: "text" , value: "" , fnType: "disable"},
            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Modified_On), zh: t(localeCommon.OGHG_Industrial_process_PM.Modified_On) }//{ name: { en: "最後修改時間", zh: "最後修改時間" }
            , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "disable"},
            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Created_By), zh: t(localeCommon.OGHG_Industrial_process_PM.Created_By) }//{ name: { en: "建立人", zh: "建立人" }
            , cType: "text" , value: "", fnType: "disable"},
            { name: { en: t(localeCommon.OGHG_Industrial_process_PM.Created_On), zh: t(localeCommon.OGHG_Industrial_process_PM.Created_On) }//{ name: { en: "建立時間", zh: "建立時間" }
            , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "disable"},
        ]}
        nColumn={2}
        stSubmit= "save_and_close"
        stClose= "cancel"
      >
      </ESGForm>
  );
}
