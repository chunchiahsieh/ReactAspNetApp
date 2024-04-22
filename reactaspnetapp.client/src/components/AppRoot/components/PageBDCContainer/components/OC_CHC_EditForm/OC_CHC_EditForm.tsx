import styles from './OC_CHC_EditForm.module.scss';
import { useTranslation } from "react-i18next";
import { ESGForm } from "components";
import localeCommon from "styles/locales/common";
import dayjs from "dayjs";

export interface OC_CHC_EditFormProps {
  title: string;
  columns: [];
  nColumn?: number;
}

export function OC_CHC_EditForm({}: OC_CHC_EditFormProps) {
  const [t, i18n] = useTranslation("common");
  return (
    <ESGForm
        title={t(localeCommon.Funcation_id.OC_CHC_EditForm)}
        columns = {[
          { name: { en: t(localeCommon.OC_CHC_CreateForm.org_group_profile_name), zh: t(localeCommon.OC_CHC_CreateForm.org_group_profile_name) }
          , cType: "text" , value: "", required: true},
          { name: t(localeCommon.OC_CHC_CreateForm.Description)//{ en: "說明", zh: "說明" }
          , cType: "text" , value: ""},        
          { name: t(localeCommon.OC_CHC_CreateForm.org_type)//{ name: { en: "組織類型", zh: "組織類型"}
            , cType: "select" , value: "", required: true},
          { name: t(localeCommon.OC_CHC_CreateForm.parent_org_unit_id)//{ name: { en: "上級組織單位", zh: "上級組織單位" }
          , cType: "search" , value: ""},
        
          { name: t(localeCommon.OC_CHC_CreateForm.stock_identification_no)//{ name: { en: "股票編號", zh: "股票編號" }
          , cType: "text" , value: ""},
          { name: t(localeCommon.OC_CHC_CreateForm.business_registration_no)//{ name: { en: "統編", zh: "統編" }
          , cType: "text" , value: ""},
          
          { name: t(localeCommon.OC_CHC_CreateForm.country_id)//{ name: { en: "國家", zh: "國家" }
          , cType: "text" , value: ""},
          { name: t(localeCommon.OC_CHC_CreateForm.website)//{ name: { en: "網址", zh: "網址" }
          , cType: "text" , value: ""},
          { name: t(localeCommon.OC_CHC_CreateForm.city_id)//{ name: { en: "縣市", zh: "縣市" }
          , cType: "text" , value: ""},
          { name: t(localeCommon.OC_CHC_CreateForm.longitude)//{ name: { en: "經度", zh: "經度" }
          , cType: "text" , value: ""},
          { name: t(localeCommon.OC_CHC_CreateForm.zip_postal_code)//{ name: { en: "郵遞區號", zh: "郵遞區號" }
          , cType: "text" , value: ""},
          { name: t(localeCommon.OC_CHC_CreateForm.latitude)//{ name: { en: "緯度", zh: "緯度" }
          , cType: "text" , value: ""},
          { name: t(localeCommon.OC_CHC_CreateForm.Address_1_Composite)//{ name: { en: "地址", zh: "地址" }
          , cType: "text" , value: ""},
          { name: t(localeCommon.OC_CHC_CreateForm.remark)//{ name: { en: "備註說明", zh: "備註說明" }
          , cType: "text" , value: ""},
          { name: t(localeCommon.OC_CHC_CreateForm.street)//{ name: { en: "詳細地址", zh: "詳細地址" }
          , cType: "text" , value: "", nCols: 1},
          { name: t(localeCommon.OC_CHC_CreateForm.Modified_By)//{ name: { en: "最後修改人", zh: "最後修改人" }
          , cType: "text" , value: "" , fnType: "disable"},
          { name:  { en: t(localeCommon.OC_CHC_CreateForm.Modified_On), zh:t(localeCommon.OC_CHC_CreateForm.Modified_On) }//{ name: { en: "最後修改時間", zh: "最後修改時間" }
          , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "disable"},
          { name: { en: t(localeCommon.OC_CHC_CreateForm.Created_By), zh:t(localeCommon.OC_CHC_CreateForm.Created_By) }//{ name: { en: "建立人", zh: "建立人" }
          , cType: "text" , value: "", fnType: "disable"},
          { name: t(localeCommon.OC_CHC_CreateForm.Created_On)//{ name: { en: "建立時間", zh: "建立時間" }
          , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "disable"},
        ]}
        nColumn={2}
        stSubmit= "save_and_close"
        stClose= "cancel"
      >
      </ESGForm>
  );
}
