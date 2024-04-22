import { Box, Grid, IconButton, TextField, Typography } from "@mui/material";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ESGLogo from "assets/icons/ESGLogo.svg?react";
import { ESGBackdrop, ESGButton, ESGCancelButton } from "components";
import React from "react";
import { login } from "controllers/api/login";
import { AppStates } from "controllers/AppController";

export interface PageLoginProps {
  title: string;
  stAccount: string;
  stPassword: string;
  stLogin: string;
  stForgetPassword: string;
  stBCtoFillFields: string;
  stBCLoginFail: string;
}

export function PageLogin({
  title = "title",
  stAccount = "Account",
  stPassword = "Password",
  stForgetPassword = "Forget Password",
  stBCtoFillFields = "Not all fields are filled in.",
  stBCLoginFail = "Login fail.",
  stLogin = "Login",
}: PageLoginProps) {
  const [showPWD, setShowPWD] = React.useState(false);
  const [account, setAccount] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showBackdrop, setShowBackdrop] = React.useState(false);
  const BCType = React.useRef<"field" | "login">("field");
  const [isLoading, setIsLoading] = React.useState(false);

  // useEffect(() => {
  //   console.log("PageLogin useEffect", showBackdrop, isLoading);
  // }, [showBackdrop, isLoading]);

  function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (showBackdrop) return; // prevent double click
    setIsLoading(true);
    if (!account || !password) {
      BCType.current = "field";
      setShowBackdrop(true);
      setIsLoading(false);
    } else {
      (async () => {
        const res = await login(account, password);
        setIsLoading(false);
        if (!res.success) {
          BCType.current = "login";
          setShowBackdrop(true);
        } else {
          AppStates.setCPNTreePath("/PageMainContainer");
        }
      })();
    }
  }

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
        key={"LogoRegion"}
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
          {title}
        </Typography>
      </Box>
      <Box sx={{ height: 40 }} />
      <form onSubmit={onFormSubmit}>
        <Grid
          container
          spacing={2}
          sx={{ maxWidth: "600px", margin: 0, padding: 0 }}
        >
          {/* //#region First Row for Account*/}
          <Grid item xs={1} />
          <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
            {stAccount}
          </Grid>
          <Grid item xs={8}>
            <TextField
              sx={{ width: "100%" }}
              autoComplete="username"
              error={!!!account}
              label={account ? "" : `*${"Your Account"}`}
              value={account}
              onChange={(e) => setAccount(e.target.value ?? "")}
              disabled={isLoading || showBackdrop}
            />
          </Grid>
          <Grid item xs={1} />
          {/* //#endregion First Row for Account*/}
          {/* //#region 2nd Row for Password*/}
          <Grid item xs={1} />
          <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
            {stPassword}
          </Grid>
          <Grid item xs={8}>
            <TextField
              sx={{ width: "100%" }}
              type={showPWD ? "text" : "password"}
              autoComplete="current-password"
              error={!!!password}
              label={password ? "" : `*${"Your Password"}`}
              value={password}
              onChange={(e) => setPassword(e.target.value ?? "")}
              disabled={isLoading || showBackdrop}
            />
          </Grid>
          <Grid item xs={1} sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              onClick={() => setShowPWD(!showPWD)}
              children={
                showPWD ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <VisibilityOutlinedIcon />
                )
              }
            />
          </Grid>
          {/* //#endregion 2nd Row for Password*/}
          <Grid
            item
            xs={12}
            sx={{ textAlign: "center", display: "flex", flexDirection: "row" }}
          >
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <ESGButton
                txt={stLogin}
                sx={{ flexShrink: 1 }}
                type="submit"
                disabled={isLoading || showBackdrop}
              ></ESGButton>
              <Box sx={{ height: 20 }} />
              <ESGCancelButton
                txt={stForgetPassword}
                onClick={() => AppStates.setCPNTreePath("/PageForgetPassword")}
              />
            </Box>
            <Box sx={{ flexGrow: 1 }} />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}></Grid>
        </Grid>
      </form>
      <ESGBackdrop
        show={showBackdrop}
        onClose={() => setShowBackdrop(false)}
        content={BCType.current === "field" ? stBCtoFillFields : stBCLoginFail}
        actions={[
          <ESGButton
            txt="OK"
            onClick={() => setShowBackdrop(false)}
          ></ESGButton>,
        ]}
      />
    </Box>
  );
}
