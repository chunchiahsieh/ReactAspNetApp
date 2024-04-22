///<reference types="vite-plugin-svgr/client" />
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import "./ESGDatepicker.module.scss";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import CalendarIcon from "assets/icons/calendar.svg?react";
import { useState } from "react";
import { Box, BoxProps } from "@mui/material";

export interface ESGDatepickerProps extends BoxProps {
  date: string;
  format?: string;
  onDateChange?: (value: string | null) => void;
  hideBtn?: boolean;
  height?: string;
  isView?: boolean;
  disabled?: boolean;
}

export function ESGDatepicker({
  date = "2024/03/05",
  format = "YYYY/MM/DD",
  onDateChange = () => {},
  hideBtn = false,
  height = "30px",
  isView = false,
  ...props
}: ESGDatepickerProps) {
  const [currentDate, setCurrentDate] = useState(date);

  const [defaultSize, _] = useState(height ?? "37px");
  return (
    <Box {...props}>
      {isView ? (
        <Box sx={{ margin: "6px 24px", height }}>{date}</Box>
      ) : (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={dayjs(currentDate, format)}
            format={format}
            onChange={(value) => {
              const stNewDate = value ? dayjs(value).format(format) : "";
              setCurrentDate(stNewDate);
              onDateChange(stNewDate);
            }}
            sx={{
              "& .MuiInputBase-root": {
                height: defaultSize,
                padding: "0 10px",
                borderRadius: 0,
                "& fieldset": {
                  border: props.disabled ? "none" : "1px solid rgb(44,133,70)",
                },
              },
              "& .MuiInputAdornment-root": {
                display: hideBtn ? "none" : "relate",
              },
              width: "100%",
              background:
                props.disabled && !hideBtn ? "rgb(239,239,239)" : "white",
              "& .MuiButtonBase-root": {
                background: props.disabled
                  ? "#AAAAAA!important"
                  : "rgb(44,133,70)",
                borderRadius: 0,
                "& svg": { width: defaultSize, height: defaultSize },
                "& svg path": { fill: "white" },
                width: defaultSize,
                height: defaultSize,
                ":hover": {
                  background: props.disabled
                    ? "#AAAAAA!important"
                    : "darkgreen",
                },
              },
              ...props.sx,
            }}
            disabled={props.disabled}
            slots={{ openPickerIcon: CalendarIcon }}
          />
        </LocalizationProvider>
      )}
    </Box>
  );
}
