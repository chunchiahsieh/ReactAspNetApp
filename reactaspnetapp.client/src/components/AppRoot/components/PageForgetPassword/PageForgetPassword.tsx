import { Box, Grid, Typography } from "@mui/material";
import ESGLogo from "assets/icons/ESGLogo.svg?react";
import { ESGButton } from "components";
import { ESGTextinput } from "components";
import { AppStates } from "controllers/AppController";
import { getAdminInfo } from "controllers/api/getAdminInfo";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import localeCommon from "styles/locales/common";

interface PageForgetPasswordProps {
}

export function PageForgetPassword({}: PageForgetPasswordProps) {
  const [t] = useTranslation("common");
  const lc = localeCommon.forget_password_page;
  const [adminInfo, setAdminInfo] = useState<null | {
    company: string;
    adminName: string;
    adminEmail: string;
  }>(null);

  const 顯示公司名稱等資訊 = (()=>{
    if (!adminInfo) return null;
    const { company, adminName, adminEmail } = adminInfo!;
    return (
    <>
      <Box sx={{ maxWidth: 800 }}>{t(lc.title)}</Box>
      <Box sx={{ height: 30 }} />
      <Grid container sx={{ maxWidth: 800, padding: "0 200px" }} spacing={2}>
        <Grid item xs={4}>
          {t(lc.stCompany)}
        </Grid>
        <Grid item xs={8}>
          {company ? company : t(lc.stFieldEmpty)}
        </Grid>
        <Grid item xs={4}>
          {t(lc.stAdminName)}
        </Grid>
        <Grid item xs={8}>
          {adminName ? adminName : t(lc.stFieldEmpty)}
        </Grid>
        <Grid item xs={4}>
          {t(lc.stAdminEmail)}
        </Grid>
        <Grid item xs={8}>
          {adminEmail ? adminEmail : t(lc.stFieldEmpty)}
        </Grid>
      </Grid>
      <ESGButton
        sx={{ marginTop: 4 }}
        txt={t(localeCommon.return2)}
        onClick={() => AppStates.setCPNTreePath("/PageLogin")}
      />
    </>
  )})();

  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    (async () => {
      const res = await getAdminInfo(search);
      setIsLoading(false);
      if (res) {
        setAdminInfo(res);
      } else {
        alert(t(lc.stCannotFindCompany));
      }
    })();
  }

  const 查詢管理員 = (
    <form onSubmit={onFormSubmit}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h6" component="h1" sx={{fontWeight:"bold", color: "#175C2C" }}>
          {t(lc.stEnterCompanyID)}
        </Typography>
        <Box sx={{ height: 30 }} />
        <Box sx={{ maxWidth: 800 }}>
          <ESGTextinput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
        <Box sx={{ height: 30 }} />
        <ESGButton sx={{ marginTop: 4 }} txt={t(lc.stSubmit)} type="submit" disabled={isLoading}/>
      </Box>
    </form>
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        key={"LogoBox"}
        sx={{
          "& svg path": { fill: "#175C2C!important" },
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <ESGLogo style={{ width: 151, height: 160 }} />
        <Typography
          variant="h6"
          component="h1"
          sx={{ color: "#175C2C", fontSize: "2rem", margin: 4 }}
        >
          {t(localeCommon.platform_name)}
        </Typography>
      </Box>
      <Box sx={{ height: 40 }} />
      {adminInfo ? 顯示公司名稱等資訊 : 查詢管理員}
    </Box>
  );
}
