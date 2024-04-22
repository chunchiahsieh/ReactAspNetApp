import styles from './BI_EditForm.module.scss';
import { Box, Grid } from "@mui/material";
import {  ESGButton, ESGTabsPanel,ESGForm } from "components";
import localeCommon from "styles/locales/common";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

export interface BI_EditFormProps {
  
}

export function BI_EditForm({}: BI_EditFormProps) {
  const [t, i18n] = useTranslation("common");
  return (
    <ESGForm
      title={t(localeCommon.Funcation_id.BI_EditForm)}
      columns = {[
          { name: { en: t(localeCommon.BI_ViewForm.org_group_profile_name), zh: t(localeCommon.BI_ViewForm.org_group_profile_name) }
          , cType: "text" , value: "",nCols:1},            
          { name: { en: t(localeCommon.BI_ViewForm.business_registration_no), zh: t(localeCommon.BI_ViewForm.business_registration_no) }
            , cType: "text" , value: ""},
          { name: { en: t(localeCommon.BI_ViewForm.stock_identification_no), zh: t(localeCommon.BI_ViewForm.stock_identification_no) }
          , cType: "text" , value: ""},
          { name: { en: t(localeCommon.BI_ViewForm.website), zh: t(localeCommon.BI_ViewForm.website) }
          , cType: "text" , value: "",nCols:1},
          { name: { en: t(localeCommon.BI_ViewForm.country_id), zh: t(localeCommon.BI_ViewForm.country_id) }
          , cType: "search" , value: ""},
          { name: { en: t(localeCommon.BI_ViewForm.city_id), zh: t(localeCommon.BI_ViewForm.city_id) }
          , cType: "search" , value: ""},
          { name: { en: t(localeCommon.BI_ViewForm.zip_postal_code), zh: t(localeCommon.BI_ViewForm.zip_postal_code) }
          , cType: "text" , value: ""},
          { name: { en: t(localeCommon.BI_ViewForm.street), zh: t(localeCommon.BI_ViewForm.street) }
          , cType: "text" , value: ""},
          { name: { en: t(localeCommon.BI_ViewForm.Address_1_Composite), zh: t(localeCommon.BI_ViewForm.Address_1_Composite) }
          , cType: "text" , value: "",nCols:1},          
          { name: { en: t(localeCommon.BI_ViewForm.latitude), zh: t(localeCommon.BI_ViewForm.latitude) }
          , cType: "text" , value: ""},
          { name: { en: t(localeCommon.BI_ViewForm.longitude), zh: t(localeCommon.BI_ViewForm.longitude) }
          , cType: "text" , value: ""},
          { name: { en: t(localeCommon.BI_ViewForm.remark), zh: t(localeCommon.BI_ViewForm.remark) }
          , cType: "text" , value: "",nCols:1},          
          { name: { en: t(localeCommon.BI_ViewForm.Modified_By), zh: t(localeCommon.BI_ViewForm.Modified_By) }//{ name: { en: "最後修改人", zh: "最後修改人" }
          , cType: "text" , value: "" , fnType: "disable"},
          { name: { en: t(localeCommon.BI_ViewForm.Modified_On), zh: t(localeCommon.BI_ViewForm.Modified_On) }//{ name: { en: "最後修改時間", zh: "最後修改時間" }
          , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "disable"},
          { name: { en: t(localeCommon.BI_ViewForm.Created_By), zh: t(localeCommon.BI_ViewForm.Created_By) }//{ name: { en: "建立人", zh: "建立人" }
          , cType: "text" , value: "", fnType: "disable"},
          { name: { en: t(localeCommon.BI_ViewForm.Created_On), zh: t(localeCommon.BI_ViewForm.Created_On) }//{ name: { en: "建立時間", zh: "建立時間" }
          , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "disable"},
      ]}
      nColumn={2}
      stSubmit= "save_and_close"
      stClose= "cancel"
    >
    </ESGForm>
);
}
