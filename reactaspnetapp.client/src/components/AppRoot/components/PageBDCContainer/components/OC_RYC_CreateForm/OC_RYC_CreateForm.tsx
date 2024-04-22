import styles from './OC_RYC_CreateForm.module.scss';
import { useTranslation } from "react-i18next";
import { ESGForm } from "components";
import localeCommon from "styles/locales/common";
import dayjs from "dayjs";

export interface OC_RYC_CreateFormProps {
  title: string;
    columns: [];
    nColumn?: number;
}

export function OC_RYC_CreateForm({}: OC_RYC_CreateFormProps) {
  const [t, i18n] = useTranslation("common");
  return (
    <ESGForm
        title={t(localeCommon.Funcation_id.OC_RYC_CreateForm)}
        columns = {[            
            { name: { en: t(localeCommon.OGHG_Reporting_year.reporting_year_name), zh: t(localeCommon.OGHG_Reporting_year.reporting_year_name) }//報告年度
            , cType: "text" , value: "", required: true, nCols: 1},                        
            { name: { en: t(localeCommon.OGHG_Reporting_year.start_date), zh: t(localeCommon.OGHG_Reporting_year.start_date) }//開始日期
              , cType: "date" , value: "", required: true, nCols: 1},            
            { name: { en: t(localeCommon.OGHG_Reporting_year.end_date), zh: t(localeCommon.OGHG_Reporting_year.end_date) }//結束日期
              , cType: "date" , value: "", required: true, fnType: "disable", nCols: 1},                                           
            { name: { en: t(localeCommon.OGHG_Reporting_year.Created_By), zh: t(localeCommon.OGHG_Reporting_year.Created_By) }//建立人
            , cType: "text" , value: "", fnType: "disable", nCols: 1},            
            { name: { en: t(localeCommon.OGHG_Reporting_year.Created_On), zh: t(localeCommon.OGHG_Reporting_year.Created_On) }//建立時間
            , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "disable", nCols: 1},            
            { name: { en: t(localeCommon.OGHG_Reporting_year.Modified_By), zh: t(localeCommon.OGHG_Reporting_year.Modified_By) }//最後修改人
            , cType: "text" , value: "" , fnType: "disable", nCols: 1},
            { name: { en: t(localeCommon.OGHG_Reporting_year.Modified_On), zh: t(localeCommon.OGHG_Reporting_year.Modified_On) }//最後修改時間
            , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "disable", nCols: 1},
        ]}
        nColumn={2}
        stSubmit= "save_and_close"
        stClose= "cancel"
      >
      </ESGForm>
  );
}
