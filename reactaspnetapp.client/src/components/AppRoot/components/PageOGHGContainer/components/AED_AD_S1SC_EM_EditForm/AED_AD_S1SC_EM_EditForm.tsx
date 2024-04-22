import styles from './AED_AD_S1SC_EM_EditForm.module.scss';
import { useTranslation } from "react-i18next";
import { ESGForm } from "components";
import localeCommon from "styles/locales/common";
import dayjs from "dayjs";

export interface AED_AD_S1SC_EM_EditFormProps {
  
}

export function AED_AD_S1SC_EM_EditForm({}: AED_AD_S1SC_EM_EditFormProps) {
  const [t, i18n] = useTranslation("common");
  return (
    <ESGForm
        title={t(localeCommon.Funcation_id.AED_AD_S1SC_EM_EditForm)}
        columns = {[
           { name: { en: t(localeCommon.OGHG_Stationary_combustion.Organizational_unit_ID), zh: t(localeCommon.OGHG_Stationary_combustion.Organizational_unit_ID) }//{ name: { en: "所屬組織單位", zh: "所屬組織單位" }
            , cType: "search" , value: "", required: true},            
            { name: { en: t(localeCommon.OGHG_Stationary_combustion.Facility_ID), zh: t(localeCommon.OGHG_Stationary_combustion.Facility_ID) }//{ name: { en: "所屬據點", zh: "所屬據點"}
              , cType: "search" , value: "",required: true},

              { name: { en: t(localeCommon.OGHG_Stationary_combustion.Name), zh: t(localeCommon.OGHG_Stationary_combustion.Name) }//{ name: { en: "排放名稱", zh: "排放名稱" }
            , cType: "text" , value: "", required: true, fnType: "disable",nCols:1 },
            
            
            { name: { en: t(localeCommon.OGHG_Stationary_combustion.Utilization), zh: t(localeCommon.OGHG_Stationary_combustion.Utilization) }//{ name: { en: "用途", zh: "用途" }
            , cType: "select" , value: "", required: true },
            { name: { en: t(localeCommon.OGHG_Stationary_combustion.Utilization_Remarks), zh: t(localeCommon.OGHG_Stationary_combustion.Utilization_Remarks) }//{ name: { en: "用途備註", zh: "用途備註" }
            , cType: "text" , value: "" },
            { name: { en: t(localeCommon.OGHG_Stationary_combustion.Description), zh: t(localeCommon.OGHG_Stationary_combustion.Description) }//{ name: { en: "說明", zh: "說明" }
            , cType: "text" , value: "", required: true,nCols:1  },

            { name: { en: t(localeCommon.OGHG_Stationary_combustion.Fuel_type), zh: t(localeCommon.OGHG_Stationary_combustion.Fuel_type) }//{ name: { en: "燃料", zh: "燃料" }
            , cType: "select" , value: "", required: true},
            { name: { en: t(localeCommon.OGHG_Stationary_combustion.Fuel_type_Remarks), zh: t(localeCommon.OGHG_Stationary_combustion.Fuel_type_Remarks) }//{ name: { en: "燃料", zh: "燃料" }
            , cType: "text" , value: "", required: true},
            { name: { en: t(localeCommon.OGHG_Stationary_combustion.Methodology_type), zh: t(localeCommon.OGHG_Stationary_combustion.Methodology_type) }//{ name: { en: "計算方法", zh: "計算方法" }
            , cType: "text" , value: "", required: true, fnType: "disable"  },
            { name: ""
            , cType: "text" , value: "",  fnType: "view"  },


            { name: { en: t(localeCommon.OGHG_Stationary_combustion.Quantity), zh: t(localeCommon.OGHG_Stationary_combustion.Quantity) }//{ name: { en: "金額", zh: "金額" }
            , cType: "text" , value: "", required: true},
            { name: { en: t(localeCommon.OGHG_Stationary_combustion.Quantity_Unit), zh: t(localeCommon.OGHG_Stationary_combustion.Quantity_Unit) }//{ name: { en: "金額單位", zh: "金額單位" }
            , cType: "search" , value: "",required: true},

            { name: { en: t(localeCommon.OGHG_Stationary_combustion.Consumption_start_date), zh: t(localeCommon.OGHG_Stationary_combustion.Consumption_start_date) }//{ name: { en: "認列開始日", zh: "認列開始日" }
            , cType: "date" , value: "", required: true},
            { name: { en: t(localeCommon.OGHG_Stationary_combustion.Consumption_end_date), zh: t(localeCommon.OGHG_Stationary_combustion.Consumption_end_date) }//{ name: { en: "認列結束日", zh: "認列結束日" }
            , cType: "date" , value: "",required: true},

            { name: { en: t(localeCommon.OGHG_Stationary_combustion.Transaction_date), zh: t(localeCommon.OGHG_Stationary_combustion.Transaction_date) }//{ name: { en: "交易日期", zh: "交易日期" }
            , cType: "date" , value: "", required: true},            
            { name: ""
            , cType: "text" , value: "",  fnType: "view"  },

            { name: { en: t(localeCommon.OGHG_Stationary_combustion.Evidence), zh: t(localeCommon.OGHG_Stationary_combustion.Evidence) }//{ name: { en: "佐證資料", zh: "佐證資料" }
            , cType: "button"             
            , value: "",
              forButton: {
                localeTxt: "上傳資料",
                onClick: () => console.log("click me!"),
              },
            },
            { name: { en: t(localeCommon.OGHG_Stationary_combustion.Evidence_URL), zh: t(localeCommon.OGHG_Stationary_combustion.Evidence_URL) }//{ name: { en: "佐證資料連結", zh: "佐證資料連結" }
            , cType: "text" , value: "",required: false },

            { name: { en: t(localeCommon.OGHG_Stationary_combustion.Activity_data_quality_type), zh: t(localeCommon.OGHG_Stationary_combustion.Activity_data_quality_type) }//{ name: { en: "活動資料種類", zh: "活動資料種類" }
            , cType: "select" , value: "", required: true},
            { name: { en: t(localeCommon.OGHG_Stationary_combustion.Activity_data_confidence_type), zh: t(localeCommon.OGHG_Stationary_combustion.Activity_data_confidence_type) }//{ name: { en: "活動資料可信度", zh: "活動資料可信度" }
            , cType: "text" , value: "",required: true},

            
            { name: { en: t(localeCommon.OGHG_Stationary_combustion.Modified_By), zh: t(localeCommon.OGHG_Stationary_combustion.Modified_By) }//{ name: { en: "最後修改人", zh: "最後修改人" }
            , cType: "text" , value: "" , fnType: "disable"},
            { name: { en: t(localeCommon.OGHG_Stationary_combustion.Modified_On), zh: t(localeCommon.OGHG_Stationary_combustion.Modified_On) }//{ name: { en: "最後修改時間", zh: "最後修改時間" }
            , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "disable"},
            { name: { en: t(localeCommon.OGHG_Stationary_combustion.Created_By), zh: t(localeCommon.OGHG_Stationary_combustion.Created_By) }//{ name: { en: "建立人", zh: "建立人" }
            , cType: "text" , value: "", fnType: "disable"},
            { name: { en: t(localeCommon.OGHG_Stationary_combustion.Created_On), zh: t(localeCommon.OGHG_Stationary_combustion.Created_On) }//{ name: { en: "建立時間", zh: "建立時間" }
            , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "disable"},
        ]}
        nColumn={2}
        stSubmit= "save_and_close"
        stClose= "cancel"
      >
      </ESGForm>
  );
}
