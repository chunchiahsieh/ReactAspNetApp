import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import SettingSVG from "assets/icons/Setting.svg?react";
import OGHGSVG from "assets/icons/OGHG.svg?react";
import AddSVG from "assets/icons/Add.svg?react";
import BackSVG from "assets/icons/Back.svg?react";
import DeleteSVG from "assets/icons/Delete.svg?react";
import DownloadTemplate from "assets/icons/Download\ Template.svg?react";
import EditColumn from "assets/icons/Edit\ Column.svg?react";
import Edit from "assets/icons/Edit.svg?react";
import Export from "assets/icons/Export.svg?react";
import Filter from "assets/icons/Filter.svg?react";
import HomePage from "assets/icons/Home\ Page.svg?react";
import NextPage from "assets/icons/Next\ Page.svg?react";
import PopupAlert from "assets/icons/Pop\ up-Alert.svg?react";
import PreviousPage from "assets/icons/Previous\ Page.svg?react";
import Profile from "assets/icons/Profile.svg?react";
import Refresh from "assets/icons/Refresh.svg?react";
import Upload from "assets/icons/Upload.svg?react";
import View from "assets/icons/View.svg?react";
import ViewOff from "assets/icons/ViewOff.svg?react";
import PCF from "assets/icons/PCF.svg?react";
import SPM from "assets/icons/SPM.svg?react";
import FilterRemove from "assets/icons/Filter-remove.svg?react";
import DocMultiple from "assets/icons/document_multiple.svg?react";

import React from "react";
import { Theme } from "@emotion/react";

export type ESGIconProps = SxProps<Theme> & {
  pathColor: string;
};

export function ESGIcons({ pathColor, ...props }: ESGIconProps) {
  return (
    <Box  sx={{background: "yellow", display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
        <Box sx={{display:"flex",flexDirection:"column"}}>Setting<ESGIconSetting pathColor={pathColor} {...props} /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>OGHG<ESGIconOGHG pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>Add<ESGIconAdd pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>Back<ESGIconBack pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>Delete<ESGIconDelete pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>DownloadTemplate<ESGIconDownloadTemplate pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>EditColumn<ESGIconEditColumn pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>Edit<ESGIconEdit pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>Export<ESGIconExport pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>Filter<ESGIconFilter pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>HomePage<ESGIconHomePage pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>NextPage<ESGIconNextPage pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>PopupAlert<ESGIconPopupAlert pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>PervousPage<ESGIconPrevousPage pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>Profile<ESGIconProfile pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>Refresh<ESGIconRefresh pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>Upload<ESGIconUpload pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>View<ESGIconView pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>ViewOff<ESGIconViewOff pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>PCF<ESGIconPCF pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>SPM<ESGIconSPM pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>Filter Remove<ESGIconFilterRemove pathColor={pathColor} {...props}  /></Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>Doc Multiple<ESGIconDocMultiple pathColor={pathColor} {...props}  /></Box>
    </Box>
  );
}

export function HOCESGIcons(svgIcon: React.ReactNode, pathColor: string) {
  return (props: SxProps<Theme>) => (
    <Box sx={{ ...props, "& svg path": { fill: pathColor }, '& svg': {
      width: 'inherit',
      height: 'inherit'
    } }}>{svgIcon}</Box>
  );
}

export function ESGIconFilterRemove({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<FilterRemove />, pathColor)(props);
}

export function ESGIconSetting({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<SettingSVG />, pathColor)(props);
}

export function ESGIconOGHG({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<OGHGSVG />, pathColor)(props);
}

export function ESGIconAdd({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<AddSVG />, pathColor)(props);
}

export function ESGIconBack({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<BackSVG />, pathColor)(props);
} 

export function ESGIconDelete({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<DeleteSVG />, pathColor)(props);
}

export function ESGIconDownloadTemplate({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<DownloadTemplate />, pathColor)(props);
}

export function ESGIconEditColumn({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<EditColumn />, pathColor)(props);
}

export function ESGIconEdit({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<Edit />, pathColor)(props);
}

export function ESGIconExport({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<Export />, pathColor)(props);
}

export function ESGIconFilter({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<Filter />, pathColor)(props);
}

export function ESGIconHomePage({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<HomePage />, pathColor)(props);
}

export function ESGIconNextPage({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<NextPage />, pathColor)(props);
}

export function ESGIconPopupAlert({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<PopupAlert />, pathColor)(props);
}

export function ESGIconPrevousPage({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<PreviousPage />, pathColor)(props);
}

export function ESGIconProfile({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<Profile />, pathColor)(props);
}

export function ESGIconRefresh({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<Refresh />, pathColor)(props);
}

export function ESGIconUpload({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<Upload />, pathColor)(props);
}

export function ESGIconView({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<View />, pathColor)(props);
}

export function ESGIconViewOff({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<ViewOff />, pathColor)(props);
}

export function ESGIconPCF({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<PCF />, pathColor)(props);
}

export function ESGIconSPM({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<SPM />, pathColor)(props);
}

export function ESGIconDocMultiple({ pathColor, ...props }: ESGIconProps) {
  return HOCESGIcons(<DocMultiple />, pathColor)(props);
}