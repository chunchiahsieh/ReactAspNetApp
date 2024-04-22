import styles from './OC_CHC_ViewForm.module.scss';

import { useTranslation } from "react-i18next";
import { ESGForm } from "components";
import localeCommon from "styles/locales/common";
import dayjs from "dayjs";

export interface OC_CHC_ViewFormProps {
  title: string;
  columns: [];
  nColumn?: number;
}

export function OC_CHC_ViewForm({}: OC_CHC_ViewFormProps) {
  const [t, i18n] = useTranslation("common");
  return (
    <ESGForm
        title={t(localeCommon.Funcation_id.OC_CHC_ViewForm)}
        columns = {[
            { name: { en: t(localeCommon.OC_CHC_CreateForm.org_group_profile_name), zh: t(localeCommon.OC_CHC_CreateForm.org_group_profile_name) }
            , cType: "text" , value: "", required: true, fnType: "view"},
            { name: t(localeCommon.OC_CHC_CreateForm.Description)//{ en: "說明", zh: "說明" }
            , cType: "text" , value: "", fnType: "view"},        
            { name: t(localeCommon.OC_CHC_CreateForm.org_type)//{ en: "組織類型", zh: "組織類型"}
              , cType: "text" , value: "", required: true, fnType: "view"},
            { name: t(localeCommon.OC_CHC_CreateForm.parent_org_unit_id)//{ en: "上級組織單位", zh: "上級組織單位" }
            , cType: "text" , value: "", fnType: "view"},
          
            { name: t(localeCommon.OC_CHC_CreateForm.stock_identification_no)//{ en: "股票編號", zh: "股票編號" }
            , cType: "text" , value: "", fnType: "view"},
            { name: t(localeCommon.OC_CHC_CreateForm.business_registration_no)//{ en: "統編", zh: "統編" }
            , cType: "text" , value: "", fnType: "view"},
            
            { name: t(localeCommon.OC_CHC_CreateForm.country_id)//{ en: "國家", zh: "國家" }
            , cType: "text" , value: "", fnType: "view"},
            { name: t(localeCommon.OC_CHC_CreateForm.website)//{ en: "網址", zh: "網址" }
            , cType: "text" , value: "", fnType: "view"},
            { name: t(localeCommon.OC_CHC_CreateForm.city_id)//{ en: "縣市", zh: "縣市" }
            , cType: "text" , value: "", fnType: "view"},
            { name: t(localeCommon.OC_CHC_CreateForm.longitude)//{ en: "經度", zh: "經度" }
            , cType: "text" , value: "", fnType: "view"},
            { name: t(localeCommon.OC_CHC_CreateForm.zip_postal_code)//{ en: "郵遞區號", zh: "郵遞區號" }
            , cType: "text" , value: "", fnType: "view"},
            { name: t(localeCommon.OC_CHC_CreateForm.latitude)//{ en: "緯度", zh: "緯度" }
            , cType: "text" , value: "", fnType: "view"},
            { name: t(localeCommon.OC_CHC_CreateForm.Address_1_Composite)//{ en: "地址", zh: "地址" }
            , cType: "text" , value: "", fnType: "view"},
            { name: t(localeCommon.OC_CHC_CreateForm.remark)//{ en: "備註說明", zh: "備註說明" }
            , cType: "text" , value: "", fnType: "view"},
            { name: t(localeCommon.OC_CHC_CreateForm.street)//{ en: "詳細地址", zh: "詳細地址" }
            , cType: "text" , value: "", nCols: 1, fnType: "view"},
            { name: t(localeCommon.OC_CHC_CreateForm.Modified_By)//{ en: "最後修改人", zh: "最後修改人" }
            , cType: "text" , value: "" , fnType: "view"},
            { name: t(localeCommon.OC_CHC_CreateForm.Modified_On)//{ en: "最後修改時間", zh: "最後修改時間" }
            , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "view"},
            { name: t(localeCommon.OC_CHC_CreateForm.Created_By)//{ en: "建立人", zh: "建立人" }
            , cType: "text" , value: "", fnType: "view"},
            { name: t(localeCommon.OC_CHC_CreateForm.Created_On)//{ en: "建立時間", zh: "建立時間" }
            , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "view"},
        ]}
        nColumn={2}
        stSubmit= "save_and_close"
        stClose= "delete"
      >
      </ESGForm>
  );
}
