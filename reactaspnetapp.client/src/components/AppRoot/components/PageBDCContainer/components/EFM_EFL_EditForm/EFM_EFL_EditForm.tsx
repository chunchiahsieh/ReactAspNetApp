import styles from './EFM_EFL_EditForm.module.scss';
import { useTranslation } from "react-i18next";
import { ESGForm } from "components";
import localeCommon from "styles/locales/common";
import dayjs from "dayjs";

export interface EFM_EFL_EditFormProps {
  
}

export function EFM_EFL_EditForm({}: EFM_EFL_EditFormProps) {
  const [t, i18n] = useTranslation("common");
  return (
    <ESGForm
        title={t(localeCommon.Funcation_id.EFM_EFL_EditForm)}
        columns = {[            
            { name: { en: t(localeCommon.OGHG_Emission_Factor_Library.emission_factor_library_name), zh: t(localeCommon.OGHG_Emission_Factor_Library.emission_factor_library_name) }//因子庫名稱
            , cType: "text" , value: "", required: true,nCols:1},                        
            { name: { en: t(localeCommon.OGHG_Emission_Factor_Library.Description), zh: t(localeCommon.OGHG_Emission_Factor_Library.Description) }//說明
              , cType: "text" , value: ""},          
            { name: { en: t(localeCommon.OGHG_Emission_Factor_Library.library_type), zh: t(localeCommon.OGHG_Emission_Factor_Library.library_type) }//因子庫類型
            , cType: "select" , value: "", required: true},                        
            { name: { en: t(localeCommon.OGHG_Emission_Factor_Library.doc_ref), zh: t(localeCommon.OGHG_Emission_Factor_Library.doc_ref) }//相關文件連結
            , cType: "text" , value: ""},
                        
            { name: { en: t(localeCommon.OGHG_Emission_Factor_Library.origin_correlation_id), zh: t(localeCommon.OGHG_Emission_Factor_Library.origin_correlation_id) }//關聯資料ID
            , cType: "text" , value: ""},                  
            { name: { en: t(localeCommon.OGHG_Emission_Factor_Library.year), zh: t(localeCommon.OGHG_Emission_Factor_Library.year) }//年份
            , cType: "text" , value: ""},    
                        
            { name: { en: t(localeCommon.OGHG_Emission_Factor_Library.version), zh: t(localeCommon.OGHG_Emission_Factor_Library.version) }//版本
            , cType: "text" , value: ""},
            { name: { en: "", zh: "" }
            , cType: "text" , value: "", fnType: "view"},
                       
            { name: { en: t(localeCommon.OGHG_Emission_Factor_Library.Modified_By), zh: t(localeCommon.OGHG_Emission_Factor_Library.Modified_By) }//最後修改人
            , cType: "text" , value: "" , fnType: "disable"},
            { name: { en: t(localeCommon.OGHG_Emission_Factor_Library.Modified_On), zh: t(localeCommon.OGHG_Emission_Factor_Library.Modified_On) }//最後修改時間
            , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "disable"},            
            { name: { en: t(localeCommon.OGHG_Emission_Factor_Library.Created_By), zh: t(localeCommon.OGHG_Emission_Factor_Library.Created_By) }//建立人
            , cType: "text" , value: "", fnType: "disable"},            
            { name: { en: t(localeCommon.OGHG_Emission_Factor_Library.Created_On), zh: t(localeCommon.OGHG_Emission_Factor_Library.Created_On) }//建立時間
            , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "disable"},
        ]}
        nColumn={2}
        stSubmit= "save_and_close"
        stClose= "cancel"
      >
      </ESGForm>
  );
}
