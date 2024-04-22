import {Switch, SwitchProps, useTheme } from "@mui/material";
import { SyntheticEvent, useState } from "react";

export interface ESGSwitchProps extends SwitchProps {
  width?: number;
  height?: number;
  checked?: boolean;
  onChange?: (
    event: SyntheticEvent<Element, Event> | undefined,
    checked: boolean
  ) => void;
}

export function ESGSwitch({
  checked = false,
  width = 55,
  height = 28,
  onChange=(e,chk)=>{console.log('dafault',e,chk)},
  ...props
}: ESGSwitchProps) {
  const theme = useTheme();
  const [isChecked, setIsChecked] = useState(checked);

  return (
        <Switch
          {...props}
          checked={isChecked}
          onChange={(e,chk)=>{
            setIsChecked(chk);
            onChange(e,chk);
          }}    
          sx={{
            width: width,
            height: height,
            padding: 0,
            "& .MuiSwitch-switchBase": {
              padding: 0,
              mt: 0.25,
              transitionDuration: "300ms",
              "&.Mui-checked": {
                transform: `translateX(${width - height + 4}px)`,
                color: "#fff",
                "& + .MuiSwitch-track": {
                  backgroundColor: "#2C8646",
                  opacity: 1,
                  border: 0,
                },
                "&.Mui-disabled + .MuiSwitch-track": {
                  backgroundColor: "#7D7D7D",
                  opacity: 1,
                },
              },
              "&.Mui-focusVisible .MuiSwitch-thumb": {
                color: "#33cf4d",
                border: "6px solid #fff",
              },
              "&.Mui-disabled .MuiSwitch-thumb": {
                color: "black"
              },
              "&.Mui-disabled + .MuiSwitch-track": {
                opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
              },
            },
            "& .MuiSwitch-thumb": {
              boxSizing: "border-box",
              width: height-4,
              height: height-4,
            },
            "& .MuiSwitch-track": {
              borderRadius: 26 / 2,
              backgroundColor: "#464646",
              opacity: 1,
              transition: theme.transitions.create(["background-color"], {
                duration: 500,
              }),
            },
            ...props.sx,
          }}
        />
      )};

