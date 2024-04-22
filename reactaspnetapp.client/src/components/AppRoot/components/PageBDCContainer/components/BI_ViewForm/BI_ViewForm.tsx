import { Box, Grid } from "@mui/material";
import {  ESGButton, ESGTabsPanel } from "components";
import localeCommon from "styles/locales/common";
import { useTranslation } from "react-i18next";
import { AppStates } from "controllers/AppController";

export interface BI_ViewFormProps {
  prop?: string;
}

export function BI_ViewForm({}: BI_ViewFormProps) {
  const [t, i18n] = useTranslation("common");

  const children = [
    {name: t(localeCommon.Funcation_id.BI_ViewForm), component: 
    <Box>
      <Box>{t(localeCommon.Funcation_id.BI_ViewForm)}</Box>
      <Grid  
        container
        spacing={6}
      >
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>{t(localeCommon.BI_ViewForm.org_group_profile_name)}</Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={2}>{t(localeCommon.BI_ViewForm.business_registration_no)}</Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>{t(localeCommon.BI_ViewForm.stock_identification_no)}</Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={2}>{t(localeCommon.BI_ViewForm.website)}</Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={2}>{t(localeCommon.BI_ViewForm.country_id)}</Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>{t(localeCommon.BI_ViewForm.city_id)}</Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={2}>{t(localeCommon.BI_ViewForm.zip_postal_code)}</Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>{t(localeCommon.BI_ViewForm.street)}</Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={2}>{t(localeCommon.BI_ViewForm.Address_1_Composite)}</Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={2}>{t(localeCommon.BI_ViewForm.latitude)}</Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>{t(localeCommon.BI_ViewForm.longitude)}</Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={2}>{t(localeCommon.BI_ViewForm.remark)}</Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={2}>{t(localeCommon.BI_ViewForm.Modified_By)}</Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>{t(localeCommon.BI_ViewForm.Modified_On)}</Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={2}>{t(localeCommon.BI_ViewForm.Created_By)}</Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>{t(localeCommon.BI_ViewForm.Created_On)}</Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Box>
  },
    {name: t(localeCommon.Funcation_id.OC_CHC_List), component: <Box>{t(localeCommon.Funcation_id.OC_CHC_List)}</Box>},
    {name: t(localeCommon.Funcation_id.OC_BC_List), component: <Box>{t(localeCommon.Funcation_id.OC_BC_List)}</Box>},
    {name: t(localeCommon.Funcation_id.OC_RYC_List), component: <Box>{t(localeCommon.Funcation_id.OC_RYC_List)}</Box>},
  ];

  return (
    <Grid
      container
      spacing={2}      
    >
      <Grid item xs={11} sx={{ display: "flex", alignItems: "center" }}>      
          <ESGTabsPanel
          children ={children}
          />
      </Grid>
      
      <Grid item xs={1} sx={{ display: "flex", flexDirection: "column",margin: 0, padding: 10 }}>      
            <ESGButton
                txt="編輯"
                onClick={() => AppStates.setCPNTreePath("/PageForgetPassword")}
              ></ESGButton>            
      </Grid>
    </Grid>
  );
}
