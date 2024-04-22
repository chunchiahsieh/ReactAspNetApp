import { Box, Input, InputProps, TextFieldVariants } from "@mui/material";
import { ChangeEventHandler } from "react";

type Variant = { variant?: TextFieldVariants };
export interface ESGTextinputProps
  extends Variant,
    Omit<InputProps, "variant"> {
  height?: string;
  disabled?: boolean;
  isView?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

export function ESGTextinput({
  height = "30px",
  disabled = false,
  value = "",
  isView = false,
  onChange = (e) => {
    console.log("dafault", e);
  },
  ...props
}: ESGTextinputProps) {
  return (
    isView?(<Box sx={{
      margin: "4px 20px",
      ...props.sx,
    }}>{value?.toString()??""}</Box>):<Input
      type="text"
      {...props}
      value={value}
      onChange={onChange}
      disabled={disabled}
      sx={{
        border: "2px solid #2C8646",
        "& input": {
          padding: "0 20px",
        },
        "&.Mui-disabled::before": {
          border: "none",
        },
        "&.Mui-disabled": {
          bgcolor: "#EFEFEF",
        },
        "&::before": {
          border: "none",
        },
        "& fieldset": {
          ...{
            height: height,
            opacity: 0.3,
          },
          ...(disabled
            ? { transform: "translateY(3px)", background: "#E0E0E0" }
            : {}),
        },
        "& .MuiInputBase-root": { height: height },
        ...props.sx,
        height: height,
      }}
    />
  );
}
