import styles from './OC_BC_CreateForm.module.scss';
import { useTranslation } from "react-i18next";
import { ESGForm } from "components";
import localeCommon from "styles/locales/common";
import dayjs from "dayjs";

export interface OC_BC_CreateFormProps {  
    title: string;
    columns: [];
    nColumn?: number;
}

export function OC_BC_CreateForm({}: OC_BC_CreateFormProps) {
  const [t, i18n] = useTranslation("common");
  return (
    <ESGForm
        title={t(localeCommon.Funcation_id.OC_BC_CreateForm)}
        columns = {[            
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.org_unit_name), zh: t(localeCommon.OGHG_Organizational_Unit.org_unit_name) }//"所屬組織單位"
            , cType: "search" , value: "", required: true},                        
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.facility_type), zh: t(localeCommon.OGHG_Organizational_Unit.facility_type) }//"據點類型"
              , cType: "select" , value: "", required: true},            
          
              { name: { en: t(localeCommon.OGHG_Organizational_Unit.facility_name), zh: t(localeCommon.OGHG_Organizational_Unit.facility_name) }//"據點名稱"
              , cType: "select" , value: "", required: true,nCols:1},      
                        
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.country_id), zh: t(localeCommon.OGHG_Organizational_Unit.country_id) }//"國家"
            , cType: "search" , value: ""},            
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.city_id), zh: t(localeCommon.OGHG_Organizational_Unit.city_id) }//"縣市"
            , cType: "search" , value: ""},
           
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.zip_postal_code), zh: t(localeCommon.OGHG_Organizational_Unit.zip_postal_code) }//"郵遞區號"
            , cType: "text" , value: ""},
            
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.street), zh: t(localeCommon.OGHG_Organizational_Unit.street) }//詳細地址
            , cType: "text" , value: ""},
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.Address_1_Composite), zh: t(localeCommon.OGHG_Organizational_Unit.Address_1_Composite) }//"地址"
            , cType: "text" , value: "",nCols:1}, 
            { name: { en:  t(localeCommon.OGHG_Organizational_Unit.longitude), zh:  t(localeCommon.OGHG_Organizational_Unit.longitude) }
            , cType: "text" , value: ""},
            { name: { en:  t(localeCommon.OGHG_Organizational_Unit.latitude), zh:  t(localeCommon.OGHG_Organizational_Unit.latitude) }
            , cType: "text" , value: ""},
            
            
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.remark), zh: t(localeCommon.OGHG_Organizational_Unit.remark) }, cType: "text" , value: "", nCols: 1},
            
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.Modified_By), zh: t(localeCommon.OGHG_Organizational_Unit.Modified_By) }, cType: "text" , value: "" , fnType: "disable"},
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.Modified_On), zh: t(localeCommon.OGHG_Organizational_Unit.Modified_On) }, cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "disable"},
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.Created_By), zh: t(localeCommon.OGHG_Organizational_Unit.Created_By) }, cType: "text" , value: "", fnType: "disable"},
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.Created_On), zh: t(localeCommon.OGHG_Organizational_Unit.Created_On) }, cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "disable"},
        ]}
        nColumn={2}
        stSubmit= "save_and_close"
        stClose= "cancel"
      >
      </ESGForm>
  );
}
