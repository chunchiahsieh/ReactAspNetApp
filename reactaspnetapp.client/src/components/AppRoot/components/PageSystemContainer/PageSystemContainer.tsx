import { Box } from "@mui/material";
import styles from "./PageSystemContainer.module.scss";
import { RoleAuthorize, SupplierAuthorize } from "./components";
import { SideBar } from "components/Base/components";
import { CPNTree } from "./PageSystemContainerController";
import { useEffect, useState } from "react";
import { sxNoOverflow } from "styles/sxTemplates";
import { sidebarStyle } from "styles/globalTheme";
import { CPNTreePathString } from "components/AppRoot/AppRootController";

export interface PageSystemContainerProps {
  path?: string;
}

export function PageSystemContainer({ path = "" }: PageSystemContainerProps) {
  const [currentPath, setCurrentPath] = useState("");
  const [restPath, setRestPath] = useState("");

  useEffect(() => {
    const pathArr = path.split("/");
    setCurrentPath(pathArr[0]);
    setRestPath(pathArr.slice(1).join("/"));
  }, [path]);

  function context() {
    switch (currentPath) {
      case "SupplierAuthorize":
        /*Just for linting*/ CPNTree[currentPath];
        return <SupplierAuthorize path={restPath} />;
      case "RoleAuthorize":
        /*Just for linting*/ CPNTree[currentPath];
        return <RoleAuthorize prop={restPath} />;
      default:
        return <div>default</div>;
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "100%",
      }}
    >
      <SideBar
        {...sidebarStyle}
        flexGrow={0}
        background={"#D9D9D9"}
        textAlign={"left"}
        currentPath={CPNTreePathString.PageSystemContainer.name}
      />
      <Box
        className={styles.PageSystemContainer}
        sx={{ flexGrow: 1, ...sxNoOverflow }}
      >
        {context()}
      </Box>
    </Box>
  );
}
