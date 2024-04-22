import styles from './OC_RYC_ViewForm.module.scss';
import { useTranslation } from "react-i18next";
import { ESGForm } from "components";
import localeCommon from "styles/locales/common";
import dayjs from "dayjs";


export interface OC_RYC_ViewFormProps {
  title: string;
  columns: [];
  nColumn?: number;
}

export function OC_RYC_ViewForm({}: OC_RYC_ViewFormProps) {
  const [t, i18n] = useTranslation("common");
  return (
    <ESGForm
        title={t(localeCommon.Funcation_id.OC_RYC_ViewForm)}
        columns = {[
          { name: { en: t(localeCommon.OGHG_Reporting_year.reporting_year_name), zh: t(localeCommon.OGHG_Reporting_year.reporting_year_name) }//最後修改時間
            , cType: "text" , value: "", required: true, nCols: 1, fnType: "view"},            
            { name: { en: t(localeCommon.OGHG_Reporting_year.start_date), zh: t(localeCommon.OGHG_Reporting_year.start_date) }//最後修改時間
              , cType: "date" , value: "", required: true, nCols: 1, fnType: "view"},
              { name: { en: t(localeCommon.OGHG_Reporting_year.end_date), zh: t(localeCommon.OGHG_Reporting_year.end_date) }//最後修改時間
              , cType: "date" , value: "", required: true, fnType: "view", nCols: 1},                               
              { name: { en: t(localeCommon.OGHG_Reporting_year.Created_By), zh: t(localeCommon.OGHG_Reporting_year.Created_By) }//最後修改時間
            , cType: "text" , value: "", fnType: "view", nCols: 1},
            { name: { en: t(localeCommon.OGHG_Reporting_year.Created_On), zh: t(localeCommon.OGHG_Reporting_year.Created_On) }//最後修改時間
            , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "view", nCols: 1},
            { name: { en: t(localeCommon.OGHG_Reporting_year.Modified_By), zh: t(localeCommon.OGHG_Reporting_year.Modified_By) }//最後修改時間
            , cType: "text" , value: "" , fnType: "view", nCols: 1},
            { name: { en: t(localeCommon.OGHG_Reporting_year.Modified_On), zh: t(localeCommon.OGHG_Reporting_year.Modified_On) }//最後修改時間
            , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "view", nCols: 1},
        ]}
        nColumn={2}
        stSubmit= "save_and_close"
        stClose= "cancel"
      >
      </ESGForm>
  );
}
