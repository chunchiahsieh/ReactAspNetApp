import styles from './AED_AD_S1IP_EM_View_Form.module.scss';
import { useTranslation } from "react-i18next";
import { ESGForm } from "components";
import localeCommon from "styles/locales/common";
import dayjs from "dayjs";

export interface AED_AD_S1IP_EM_ViewFormProps {
  
}

export function AED_AD_S1IP_EM_ViewForm({}: AED_AD_S1IP_EM_ViewFormProps) {
  const [t, i18n] = useTranslation("common");  
  return (
    <ESGForm
        title={t(localeCommon.Funcation_id.AED_AD_S1IP_EM_ViewForm)}
        columns = {[
          { name: { en: t(localeCommon.OGHG_Industrial_process.Organizational_unit_ID), zh: t(localeCommon.OGHG_Industrial_process.Organizational_unit_ID) }//{ name: { en: "所屬組織單位", zh: "所屬組織單位" }
          , cType: "text" , value: "", required: true, fnType: "view"}, 
          { name: { en: t(localeCommon.OGHG_Industrial_process.Facility_ID), zh: t(localeCommon.OGHG_Industrial_process.Facility_ID) }//{ name: { en: "所屬據點", zh: "所屬據點"}
          , cType: "text" , value: "",required: true, fnType: "view"},            
          { name: { en: t(localeCommon.OGHG_Industrial_process.Name), zh: t(localeCommon.OGHG_Industrial_process.Name) }//{ name: { en: "排放名稱", zh: "排放名稱" }
          , cType: "text" , value: "", required: true, nCols: 1,fnType: "view" },
          { name: { en: t(localeCommon.OGHG_Industrial_process.Industrial_process_type_ID), zh: t(localeCommon.OGHG_Industrial_process.Industrial_process_type_ID) }//{ name: { en: "製程類型", zh: "製程類型" }
          , cType: "text" , value: "", required: true, fnType: "view"},                     
          { name: { en: t(localeCommon.OGHG_Industrial_process.Industrial_process_type_Remarks), zh: t(localeCommon.OGHG_Industrial_process.Industrial_process_type_Remarks) }// { name: { en: "製程類型備註", zh: "製程類型備註" }
          , cType: "text" , value: "", required: false, fnType: "view"},
          { name: { en: t(localeCommon.OGHG_Industrial_process.Description), zh: t(localeCommon.OGHG_Industrial_process.Description) }//{ name: { en: "說明", zh: "說明" }
          , cType: "text" , value: "", nCols: 1,required: false , fnType: "view"},

          { name: { en: t(localeCommon.OGHG_Industrial_process.Industrial_process_material_type), zh: t(localeCommon.OGHG_Industrial_process.Industrial_process_material_type) }//{ name: { en: "原物料類型", zh: "原物料類型" }
          , cType: "text" , value: "", required: true, fnType: "view"},
          { name: { en: t(localeCommon.OGHG_Industrial_process.Industrial_process_material_type_Remarks), zh: t(localeCommon.OGHG_Industrial_process.Industrial_process_material_type_Remarks) }//{ name: { en: "原物料類型備註", zh: "原物料類型備註" }
          , cType: "text" , value: "", required: true, fnType: "view"}, 

          { name: { en: t(localeCommon.OGHG_Industrial_process.Industrial_process_equipment_type), zh: t(localeCommon.OGHG_Industrial_process.Industrial_process_equipment_type) }// { name: { en: "製程設備類型", zh: "製程設備類型" }
          , cType: "text" , value: "", required: true, fnType: "view"},
          { name: { en: t(localeCommon.OGHG_Industrial_process.Industrial_process_equipment_type_Remarks), zh: t(localeCommon.OGHG_Industrial_process.Industrial_process_equipment_type_Remarks) }//{ name: { en: "製程設備備註", zh: "製程設備備註" }
          , cType: "text" , value: "", required: false, fnType: "view"}, 

          { name: { en: t(localeCommon.OGHG_Industrial_process.Methodology_type), zh: t(localeCommon.OGHG_Industrial_process.Methodology_type) }//{ name: { en: "計算方法", zh: "計算方法" }
          , cType: "text" , value: "", required: true, fnType: "view"  },
          { name: { en: "", zh: "" }
          , cType: "text" , value: "", fnType: "view"},
         
          
          { name: { en: t(localeCommon.OGHG_Industrial_process.Quantity), zh: t(localeCommon.OGHG_Industrial_process.Quantity) }//{ name: { en: "金額", zh: "金額" }
          , cType: "number" , value: "", required: true, fnType: "view"},
          { name: { en: t(localeCommon.OGHG_Industrial_process.Quantity_Unit), zh: t(localeCommon.OGHG_Industrial_process.Quantity_Unit) }//{ name: { en: "金額單位", zh: "金額單位" }
          , cType: "text" , value: "", required: true, fnType: "view"}, 
         
          
          { name: { en: t(localeCommon.OGHG_Industrial_process.Consumption_start_date), zh: t(localeCommon.OGHG_Industrial_process.Consumption_start_date) }//{ name: { en: "認列開始日", zh: "認列開始日" }
          , cType: "date" , value: "", required: true, fnType: "view"},           
          { name: { en: t(localeCommon.OGHG_Industrial_process.Consumption_end_date), zh: t(localeCommon.OGHG_Industrial_process.Consumption_end_date) }//{ name: { en: "認列結束日", zh: "認列結束日" }
          , cType: "date" , value: "",required: true, fnType: "view"},

          { name: { en: t(localeCommon.OGHG_Industrial_process.Transaction_date), zh: t(localeCommon.OGHG_Industrial_process.Transaction_date) }//{ name: { en: "交易日", zh: "交易日" }
          , cType: "date" , value: "",required: true, fnType: "view"},
          { name: { en: "", zh: "" }
          , cType: "text" , value: "",  fnType: "view"  },

          { name: { en: t(localeCommon.OGHG_Industrial_process.Activity_data_quality_type), zh: t(localeCommon.OGHG_Industrial_process.Activity_data_quality_type) }//{ name: { en: "佐證資料", zh: "佐證資料" }
          , cType: "text" , value: "" , fnType: "view"},
          { name: { en: t(localeCommon.OGHG_Industrial_process.Activity_data_confidence_type), zh: t(localeCommon.OGHG_Industrial_process.Activity_data_confidence_type) }//{ name: { en: "佐證資料連結", zh: "佐證資料連結" }
          , cType: "text" , value: "" , fnType: "view"},
                     
          { name: { en: t(localeCommon.OGHG_Industrial_process.Modified_By), zh: t(localeCommon.OGHG_Industrial_process.Modified_By) }//{ name: { en: "最後修改人", zh: "最後修改人" }
          , cType: "text" , value: "" , fnType: "view"},
          { name: { en: t(localeCommon.OGHG_Industrial_process.Modified_On), zh: t(localeCommon.OGHG_Industrial_process.Modified_On) }//{ name: { en: "最後修改時間", zh: "最後修改時間" }
          , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "view"},
          { name: { en: t(localeCommon.OGHG_Industrial_process.Created_By), zh: t(localeCommon.OGHG_Industrial_process.Created_By) }//{ name: { en: "建立人", zh: "建立人" }
          , cType: "text" , value: "", fnType: "view"},
          { name: { en: t(localeCommon.OGHG_Industrial_process.Created_On), zh: t(localeCommon.OGHG_Industrial_process.Created_On) }//{ name: { en: "建立時間", zh: "建立時間" }          
          , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "view"},
        ]}
        nColumn={2}
        stSubmit= "save_and_close"
        stClose= "cancel"
      >
      </ESGForm>
  );
}
