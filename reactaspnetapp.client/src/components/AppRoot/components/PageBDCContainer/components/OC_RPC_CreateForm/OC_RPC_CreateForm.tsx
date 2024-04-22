import styles from './OC_RPC_CreateForm.module.scss';
import { useTranslation } from "react-i18next";
import { ESGForm } from "components";
import localeCommon from "styles/locales/common";
import dayjs from "dayjs";

export interface OC_RPC_CreateFormProps {
  title: string;
  columns: [];
  nColumn?: number;
}

export function OC_RPC_CreateForm({}: OC_RPC_CreateFormProps) {
  const [t, i18n] = useTranslation("common");
  return (
    <ESGForm
        title={t(localeCommon.Funcation_id.OC_RPC_CreateForm)}
        columns = {[            
            { name: { en: t(localeCommon.OGHG_Reporting_period.reporting_year_id), zh: t(localeCommon.OGHG_Reporting_period.reporting_year_id) }//報告年度
            , cType: "search" , value: "", required: true, nCols: 1, fnType: "disable"},                
            { name: { en: t(localeCommon.OGHG_Reporting_period.reporting_period_name), zh: t(localeCommon.OGHG_Reporting_period.reporting_period_name) }//報告區間
              , cType: "text" , value: "", required: true, nCols: 1},                              
            { name: { en: t(localeCommon.OGHG_Reporting_period.start_date), zh: t(localeCommon.OGHG_Reporting_period.start_date) }//開始日期
              , cType: "date" , value: "", required: true, nCols: 1},            
            { name: { en: t(localeCommon.OGHG_Reporting_period.end_date), zh: t(localeCommon.OGHG_Reporting_period.end_date) }//結束日期
              , cType: "date" , value: "", required: true, nCols: 1},                          
            { name: { en: t(localeCommon.OGHG_Reporting_period.period_status), zh: t(localeCommon.OGHG_Reporting_period.period_status) }//狀態              
              , cType: "boolean" , value: true, nCols: 1}, 
         
            
            { name: { en: t(localeCommon.OGHG_Reporting_period.Created_By), zh: t(localeCommon.OGHG_Reporting_period.Created_By) }//建立人              
            , cType: "text" , value: "", fnType: "disable", nCols: 1},            
            { name: { en: t(localeCommon.OGHG_Reporting_period.Created_On), zh: t(localeCommon.OGHG_Reporting_period.Created_On) }//建立時間
            , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "disable", nCols: 1},            
            { name: { en: t(localeCommon.OGHG_Reporting_period.Modified_By), zh: t(localeCommon.OGHG_Reporting_period.Modified_By) }//最後修改人
            , cType: "text" , value: "" , fnType: "disable", nCols: 1},            
            { name: { en: t(localeCommon.OGHG_Reporting_period.Modified_On), zh: t(localeCommon.OGHG_Reporting_period.Modified_On) }//最後修改時間
            , cType: "date" , value: dayjs().format("YYYY/MM/DD"), fnType: "disable", nCols: 1},
        ]}
        nColumn={2}
        stSubmit= "save_and_close"
        stClose= "cancel"
      >
      </ESGForm>
  );
}
