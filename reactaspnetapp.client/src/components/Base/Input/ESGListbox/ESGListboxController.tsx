import { Theme } from "@emotion/react";
import { ListItemButtonProps, SxProps } from "@mui/material";
import { makeAutoObservable } from "mobx";

export const SEPERATOR = "_";

export interface ESGListBoxData
  extends Omit<ListItemButtonProps, "children" | "onClick"> {
  name: string;
  key?: string;
  description?: string;
  icon?: JSX.Element;
  isOpened?: boolean;
  children?: ESGListBoxData[];
  onClick?: (node: ESGListBoxDataWithOpened) => void;
}

export interface ESGListBoxDataWithOpened
  extends Omit<ESGListBoxData, "children" | "onSelect"> {
  isOpened: boolean;
  sxObs?: SxObs;
  onSelect?: (node: ESGListBoxDataWithOpened) => void;
  children?: ESGListBoxDataWithOpened[];
}

export interface OneListProps {
  data: ESGListBoxDataWithOpened;
}

export interface ESGListboxProps {
  data: ESGListBoxData;
  listHeader?: string;
}

export class SxObs {
    sx?: SxProps<Theme>;
    constructor(sx?: SxProps<Theme>) {
        this.sx = sx;
        makeAutoObservable(this);
    }
    setSx(sx: SxProps<Theme>) {
        this.sx = sx;
    }
}

export class Cursor {
    prev?: ESGListBoxDataWithOpened;
    prevSx: SxProps<Theme> = {};

    onSelect(node: ESGListBoxDataWithOpened) {
        if (this.prev?.key === node.key) return;
        //還原原來的顏色，再改變目前的顏色
        if (this.prev?.key) this.prev.sxObs?.setSx({...this.prevSx});
        this.prev = node;
        this.prevSx = {...node.sxObs?.sx};
        if (!!!node.children)
          node.sxObs?.setSx({
            ...node.sxObs.sx,
            color: "green",
            "& .MuiListItemText-primary": {
              fontWeight: "bold",
              fontSize: node.children ? "1.2rem" : "1rem",
            },
          });
        //   console.log("onSelect: SX", this.prevSx, node.sxObs?.sx);
      }    
}
