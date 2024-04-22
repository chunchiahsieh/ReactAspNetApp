import { useState, useEffect, useRef } from "react";
import { CPNTree } from "components/AppRoot/AppRootController";
import {
  Row4CPNTree,
  generateDataForListbox,
} from "utils/generateDataForListbox";
import { useTranslation } from "react-i18next";
import { SxProps, Box } from "@mui/material";
import { ESGListBoxData, ESGListbox } from "components";

export function SideBar({
  currentPath = "",
  ...props
}: SxProps & { currentPath?: string }) {
  //#region Listbox
  const listboxTable = useRef<Row4CPNTree[]>([]);
  const [treeData, setTreeData] = useState<ESGListBoxData>({
    name: "wait",
    isOpened: true,
  });
  //#endregion TreeBeard
  const [_, i18n] = useTranslation("common");
  useEffect(() => {
    const wholeTree = CPNTree.getTableForTreeBeard();
    listboxTable.current = wholeTree.filter((site) => {
      return new RegExp("^" + currentPath).test(site.path);
    });
  }, []);

  useEffect(() => {
    // 1. 取得Filter後的listboxTable
    let data = generateDataForListbox(
      listboxTable.current,
      i18n.language,
      undefined
    );
    // 2. 將data 的頭改成此頁面
    const nTimes =
      currentPath.trim() === "/" ? 0 : currentPath.split("/").length - 1;
    for (let i = 0; i < nTimes; i++) {
      data = data.children?.[0] ?? {
        name: "something wrong",
      };
    }
    setTreeData(data);
  }, [i18n.language, listboxTable.current]);

  return (
    <Box sx={{ height: "100%", ...props }}>
      <ESGListbox data={treeData} />
    </Box>
  );
}
