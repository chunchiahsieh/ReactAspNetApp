import { Box, SxProps, Theme } from "@mui/material";
import React, { useEffect } from "react";
import {
  ESGAppBar,
  PageForgetPassword,
  PageLogin,
  PageMainContainer,
  PageOGHGContainer,
  PagePCFContainer,
  PageSPMContainer,
  PageSystemContainer,
} from "./components";
import { CPNTree, CPNTreePathString } from "./AppRootController";
import { observer } from "mobx-react-lite";
import { AppStates } from "controllers/AppController";
import localeCommon from "styles/locales/common";
import { useTranslation } from "react-i18next";

export const AppRoot = observer(AppRootRare);

export function AppRootRare() {
  const style: SxProps<Theme> = {
    flexGrow: 1,
    display: "flex",
    height: "100%",
    p: 0,
    m: 0,
    flexDirection: "column",
    overflow: "hidden",
  };

  const [path, setPath] = React.useState("");
  const [restPath, setRestPath] = React.useState("");
  const [t] = useTranslation("common");

  使用者改變了: useEffect(() => {
    if (
      !!!AppStates.User?.Name &&
      AppStates.CPNTreePath !== CPNTreePathString.PageForgetPassword.name
    ) {
      AppStates.setCPNTreePath("/PageLogin");
    }
  }, [AppStates.User, AppStates.CPNTreePath]);

  元件樹要求改變了: useEffect(() => {
    const nodes = AppStates.CPNTreePath.split("/");
    setPath(nodes[1]);
    setRestPath(nodes.slice(2).join("/"));
  }, [AppStates.CPNTreePath]);

  function context() {
    switch (path) {
      case "PageMainContainer":
        /* Just for linting*/ CPNTree[path];
        return <PageMainContainer />;
      case "PageLogin":
        /* Just for linting*/ CPNTree[path];
        return (
          <PageLogin
            title={t(localeCommon.platform_name)}
            stAccount={t(localeCommon.account)}
            stPassword={t(localeCommon.password)}
            stForgetPassword={t(localeCommon.forgetpassword)}
            stLogin={t(localeCommon.login)}
            stBCtoFillFields={t(localeCommon.login_page.not_all_filled)}
            stBCLoginFail={t(localeCommon.login_page.fail_login)}
          />
        );
      case "PageForgetPassword":
        /* Just for linting*/ CPNTree[path];
        return (
          <PageForgetPassword/>
        );
      case "PageSystemContainer": // TODO TODO TODO
        /* Just for linting*/ CPNTree[path];
        return <PageSystemContainer path={restPath} />;
      case "PageOGHGContainer": // TODO TODO TODO
        /* Just for linting*/ CPNTree[path];
        return <PageOGHGContainer prop={restPath} />;
      case "PagePCFContainer": // TODO TODO TODO
        /* Just for linting*/ CPNTree[path];
        return <PagePCFContainer prop={restPath} />;
      case "PageSPMContainer": // TODO TODO TODO
        /* Just for linting*/ CPNTree[path];
        return <PageSPMContainer prop={restPath} />;
      default:
        return null;
    }
  }

  return (
    <>
      <ESGAppBar title={localeCommon.platform_name} user={AppStates.User} />
      <Box sx={style}>
        <Box sx={{ flexShrink: 1, minHeight: "74px" }} />
        {/*因為AppBar固定住&高度為74px，所以需要此行。此外，用了flex，高度會變，所以用minHeight */}
        <Box sx={style}>{context()}</Box>
      </Box>
    </>
  );
}
