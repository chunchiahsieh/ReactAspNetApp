import { useTranslation } from "react-i18next";
import { ESGForm } from "components";
import localeEFMEFL from "styles/locales/EFMEFL";


export interface EFM_EFL_ViewFormProps {
  
}

export function EFM_EFL_ViewForm({}: EFM_EFL_ViewFormProps) {
  const [t, i18n] = useTranslation("common");
  return (
    <ESGForm
        title={t(localeEFMEFL.vam.vieFormTitle)}
        columns = {[
          { name: t(localeEFMEFL.vam.emission_factor_library_name)//因子庫名稱
            , cType: "text" , value: "", required: true, fnType: "view"},                        
            { name: { en: t(localeEFMEFL.vam.Description), zh: t(localeEFMEFL.vam.Description) }//說明
              , cType: "text" , value: "", fnType: "view"},
            
            { name: { en: t(localeEFMEFL.vam.library_type), zh: t(localeEFMEFL.vam.library_type) }//因子庫類型
            , cType: "text" , value: "", required: true, fnType: "view"},            
          
            { name: { en: t(localeEFMEFL.vam.doc_ref), zh: t(localeEFMEFL.vam.doc_ref) }//相關文件連結
            , cType: "text" , value: "", fnType: "view"},
            
            { name: { en: t(localeEFMEFL.vam.origin_correlation_id), zh: t(localeEFMEFL.vam.origin_correlation_id) }//關聯資料ID            
            , cType: "text" , value: "", fnType: "view"},                  
            { name: { en: t(localeEFMEFL.vam.year), zh: t(localeEFMEFL.vam.year) }//年份
            , cType: "text" , value: "", fnType: "view"},    
            { name: { en: t(localeEFMEFL.vam.version), zh: t(localeEFMEFL.vam.version) }//版本            
            , cType: "text" , value: "", fnType: "view"},
            { name: { en: "", zh: "" }
            , cType: "text" , value: "", fnType: "view"},
                       
      
            { name: t(localeEFMEFL.vam.modifiedById)//最後修改人
            , cType: "text" , value: "" , fnType: "view"},
            { name: t(localeEFMEFL.vam.modifiedOn)//最後修改時間            
            , cType: "date" , value: "", fnType: "view"},            
            { name: t(localeEFMEFL.vam.createById)//建立人
            , cType: "text" , value: "", fnType: "view"},            
            { name: t(localeEFMEFL.vam.createOn)//建立時間
            , cType: "date" , value: "", fnType: "view"},
        ]}
        nColumn={2}
        stSubmit= "save_and_close"
        stClose= "cancel"
      >
      </ESGForm>
  );
}
