/// <reference types="vite-plugin-svgr/client"/>
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  // Container,
  Avatar,
  // Button,
  Tooltip,
  MenuItem,
  Button,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import ESGLogo from "assets/icons/ESGLogo.svg?react";
import { User } from "models/dontModify/User";
import { useTranslation } from "react-i18next";
import logout from "controllers/api/logout";
import _ from "lodash";
import { AppStates } from "controllers/AppController";
export interface ESGAppBarProps {
  title?: string;
  user?: User | null;
}

// const pages: string[] = [];
// const settings = ["I18n", "Email", "Logout"];

export function ESGAppBar({ title, user }: ESGAppBarProps) {
  const [t, i18n] = useTranslation("common");
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElI18n, setAnchorElI18n] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function handleOpenI18nMenu(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void {
    setAnchorElI18n(event.currentTarget);
  }

  return (
    <AppBar position="fixed" style={{ height: 74, background: "#175C2C" }}>
      <Toolbar disableGutters>
        <Button
          sx={{ "& svg path": { fill: "white!important" }, margin: 1 }}
          onClick={() => AppStates.setCPNTreePath("/PageMainContainer")}
        >
          <ESGLogo style={{ width: 48, height: 51 }} />
        </Button>
        <Typography
          variant="h6"
          component="a"
          href="https://www.gudeng.com"
          sx={{
            mr: 2,
            display: { xs: "none", sm: "flex" },
            fontFamily: "Segoe UI, sans-serif",
            fontSize: "2rem",
            fontWeight: 700,
            // letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {`　`}
          {t(title ?? "platform name")}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />{" "}
        {/* This is for the space between title and user avatar */}
        <Typography variant="h6">{`${user?.Name ?? ""}　`}</Typography>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 3 }}>
              <Avatar alt="Remy Sharp" src={user?.Avatar} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {user?.Email ? (
              <MenuItem key={"Email"}>
                <Typography textAlign="center">{user?.Email}</Typography>
              </MenuItem>
            ) : null}
            <MenuItem key={"I18n"} onClick={handleOpenI18nMenu}>
              <Typography textAlign="center">{t("i18n")}</Typography>
            </MenuItem>
            <MenuItem
              key={"Logout"}
              onClick={() => {
                logout();
                handleCloseUserMenu();
              }}
            >
              <Typography textAlign="center">{t("logout")}</Typography>
            </MenuItem>

            <Menu
              id="menu-i18n"
              anchorEl={anchorElI18n}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElI18n)}
              onClose={() => setAnchorElI18n(null)}
            >
              <MenuItem
                key={"zh"}
                onClick={() => {
                  i18n.changeLanguage("zh");
                  setAnchorElI18n(null);
                }}
              >
                繁中
              </MenuItem>
              <MenuItem
                key={"en"}
                onClick={() => {
                  i18n.changeLanguage("en");
                  setAnchorElI18n(null);
                }}
              >
                English
              </MenuItem>
            </Menu>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
