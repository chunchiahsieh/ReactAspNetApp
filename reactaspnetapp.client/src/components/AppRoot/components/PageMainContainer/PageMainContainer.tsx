import { Theme } from "@emotion/react";
import { Box, Button, Grid, SxProps, TextField } from "@mui/material";
import {
  ESGIconDocMultiple,
  ESGIconOGHG,
  ESGIconPCF,
  ESGIconSPM,
  ESGIconSetting,
} from "components";
import { CPNTreePathString } from "components/AppRoot/AppRootController";
import { AppStates } from "controllers/AppController";
import { useTranslation } from "react-i18next";
import localeCommon from "styles/locales/common";
import { CPNTree } from "components/AppRoot/AppRootController";
import React, { useEffect } from "react";
import {
  Row4CPNTree,
  generateDataForListbox,
} from "utils/generateDataForListbox";
import { ESGListbox, ESGListBoxData } from "components";
import { sidebarStyle } from "styles/globalTheme";

export function PageMainContainer() {
  //#region Listbox
  const listboxTable = React.useRef<Row4CPNTree[]>([]);
  const [treeData, setTreeData] = React.useState<ESGListBoxData>({
    name: "wait",
    isOpened: true,
  });
  //#endregion TreeBeard
  const [t, i18n] = useTranslation("common");
  const [stSearch, setStSearch] = React.useState("");

  const tileStyle: SxProps<Theme> = {
    margin: 2,
    width: 215,
    height: 161,
    background: "#2C8646",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    ":hover": { background: "#175C2C" },
  };

  useEffect(() => {
    listboxTable.current = CPNTree.getTableForTreeBeard();
  }, []);

  useEffect(() => {
    if (listboxTable.current.length > 0) {
      const data = generateDataForListbox(
        listboxTable.current,
        i18n.language,
        stSearch ? new RegExp(stSearch, "i") : undefined
      );

      setTreeData(data);
    }
  }, [stSearch, i18n.language]);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", height: "100%" }}>
      <Box
        sx={{
          ...sidebarStyle,
          background: "#D9D9D9",
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
        }}
      >
        <TextField
          label="Search"
          variant="standard"
          sx={{ marginLeft: 1 }}
          value={stSearch}
          onChange={(e) => setStSearch(e.target.value)}
        />
        <ESGListbox data={treeData} />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          p: 0,
          m: 0,
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box sx={{ margin: 2, textAlign: "left" }}>
          {t(localeCommon.page_main.title)}
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Grid item xs={4}>
            <Button
              sx={tileStyle}
              onClick={() =>
                AppStates.setCPNTreePath(
                  CPNTreePathString.PageSystemContainer.name
                )
              }
            >
              <ESGIconSetting pathColor="white" width={53.15} height={51} />
              {t(localeCommon.page_main.system_management)}
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              sx={tileStyle}
              onClick={() =>
                AppStates.setCPNTreePath(
                  CPNTreePathString.PageSystemContainer.name //TODO TODO 等待阿嘉
                )
              }
            >
              <ESGIconDocMultiple pathColor="white" width={53.15} height={51} />
              {t(localeCommon.bdc_management)}
            </Button>
          </Grid>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Grid item xs={4}>
            <Button
              sx={tileStyle}
              onClick={() =>
                AppStates.setCPNTreePath(
                  CPNTreePathString.PageOGHGContainer.name
                )
              }
            >
              <ESGIconOGHG pathColor="white" width={53.15} height={51} />
              {t(localeCommon.page_main.oghg_management)}
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              sx={tileStyle}
              onClick={() =>
                AppStates.setCPNTreePath(
                  CPNTreePathString.PagePCFContainer.name
                )
              }
            >
              <ESGIconPCF pathColor="white" width={53.15} height={51} />
              {t(localeCommon.page_main.pcf_management)}
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              sx={tileStyle}
              onClick={() =>
                AppStates.setCPNTreePath(
                  CPNTreePathString.PageSPMContainer.name
                )
              }
            >
              <ESGIconSPM pathColor="white" width={53.15} height={51} />
              {t(localeCommon.page_main.spm_management)}
            </Button>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
