import type { SxProps } from "@mui/material";
import { Checkbox, CheckboxProps } from "@mui/material";
import { ChangeEvent, useState } from "react";
import ChkBoxIcon from "assets/icons/checkbox.svg?react";
import { Theme } from "@mui/material/styles/createTheme";

export interface ESGCheckboxProps extends CheckboxProps {
  sx?: SxProps<Theme>;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>, chk: boolean) => void;
  disabled?: boolean;
}

export function ESGCheckbox({
  sx = { width: "26px", height: "26px" },
  checked = false,
  onChange = (e, chk) => {
    console.log("dafault", e, chk);
  },
  disabled=false,
  ...props
}: ESGCheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <Checkbox
      icon={<ChkBoxIcon />}
      checkedIcon={<ChkBoxIcon />}
      checked={isChecked}
      onChange={(e, chk) => {
        setIsChecked(chk);
        onChange(e, chk);
      }}
      sx={{
        width: "26px", height: "26px" ,
        p:0,
        opacity: (disabled)?0.5:1,
        "& svg path": { fill: "white" },
        "& svg rect": { fill: "black" },
        "& svg": {
          width: (sx as any).width ?? "100%",
          height: (sx as any).height ?? "100%",
        },
        "&.Mui-checked": {
          color: "white",
          "& svg path": { fill: "green" },
        },
        ...sx,
      }}
      {...props}
    />
  );
}
