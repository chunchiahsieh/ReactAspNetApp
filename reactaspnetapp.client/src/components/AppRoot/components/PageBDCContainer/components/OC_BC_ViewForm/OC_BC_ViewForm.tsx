import styles from './OC_BC_ViewForm.module.scss';
import { useTranslation } from "react-i18next";
import { ESGForm } from "components";
import localeCommon from "styles/locales/common";
import dayjs from "dayjs";


export interface OC_BC_ViewFormProps {
  title: string;
  columns: [];
  nColumn?: number; 
}

export function OC_BC_ViewForm({}: OC_BC_ViewFormProps) {
  const [t, i18n] = useTranslation("common");
  return (
    <ESGForm
        title={t(localeCommon.Funcation_id.OC_BC_ViewForm)}
        columns = {[
          { name: { en: t(localeCommon.OGHG_Organizational_Unit.org_unit_name), zh: t(localeCommon.OGHG_Organizational_Unit.org_unit_name) }//"所屬組織單位"
            , cType: "text" , value: "", required: true, fnType: "view"},            
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.facility_type), zh: t(localeCommon.OGHG_Organizational_Unit.facility_type) }//"據點類型"
              , cType: "text" , value: "", required: true, fnType: "view"},
              { name: { en: t(localeCommon.OGHG_Organizational_Unit.facility_name), zh: t(localeCommon.OGHG_Organizational_Unit.facility_name) }//"據點類型"
              , cType: "text" , value: "", required: true, fnType: "view",nCols:1},
             
            
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.country_id), zh: t(localeCommon.OGHG_Organizational_Unit.country_id) }//"國家"
            , cType: "text" , value: "", fnType: "view"},
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.city_id), zh: t(localeCommon.OGHG_Organizational_Unit.city_id) }//"縣市"
            , cType: "text" , value: "", fnType: "view"},           
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.zip_postal_code), zh: t(localeCommon.OGHG_Organizational_Unit.zip_postal_code) }//"郵遞區號"
            , cType: "text" , value: "", fnType: "view"},           
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.Address_1_Composite), zh: t(localeCommon.OGHG_Organizational_Unit.Address_1_Composite) }//"地址"
            , cType: "text" , value: "", fnType: "view"},              

            { name: { en: t(localeCommon.OGHG_Organizational_Unit.street), zh: t(localeCommon.OGHG_Organizational_Unit.street) }//詳細地址
            , cType: "text" , value: "", fnType: "view", nCols: 1},     

            { name: { en:  t(localeCommon.OGHG_Organizational_Unit.latitude), zh:  t(localeCommon.OGHG_Organizational_Unit.longitude) }//經度
            , cType: "text" , value: "", fnType: "view"},  
            { name: { en:  t(localeCommon.OGHG_Organizational_Unit.latitude), zh:  t(localeCommon.OGHG_Organizational_Unit.latitude) }//緯度
            , cType: "text" , value: "", fnType: "view"},            
                                  
            { name: { en:  t(localeCommon.OGHG_Organizational_Unit.latitude), zh:  t(localeCommon.OGHG_Organizational_Unit.remark) }//備註說明
            , cType: "text" , value: "", nCols: 1, fnType: "view"},            
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.Modified_By), zh: t(localeCommon.OGHG_Organizational_Unit.Modified_By) }, cType: "text" , value: "" , fnType: "view"},
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.Modified_On), zh: t(localeCommon.OGHG_Organizational_Unit.Modified_On) }, cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "view"},
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.Created_By), zh:  t(localeCommon.OGHG_Organizational_Unit.Created_By) }, cType: "text" , value: "", fnType: "view"},
            { name: { en: t(localeCommon.OGHG_Organizational_Unit.Created_On), zh: t(localeCommon.OGHG_Organizational_Unit.Created_On) }, cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "view"},
        ]}
        nColumn={2}
        stSubmit= "save_and_close"
        stClose= "cancel"
      >
      </ESGForm>
  ); 
}
