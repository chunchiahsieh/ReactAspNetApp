import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
  TextFieldVariants,
} from "@mui/material";
import SearchIcon from "assets/icons/search.svg?react";
import { ESGSearchDialog } from "components/Base/Feedback";
import _ from "lodash";
import { useEffect, useState } from "react";
import { MRT_RowData } from "material-react-table";
import { UseQueryResult } from "@tanstack/react-query";
import { ESGTablePropBase } from "components/Base/Data Display/ESGTable";
import { ESGSearchDialogProps } from "components/Base/Feedback/ESGSearchDialog";

type Variant = { variant?: TextFieldVariants };
export interface ESGSearchProps<T extends MRT_RowData = MRT_RowData, TQA = any>
  extends Variant,
    Omit<TextFieldProps, "variant" | "value" | "onChange"> {
  onSearch?: (value: T | undefined) => void;
  height?: string;
  iniValue?: T;
  props4Table?: Omit<ESGSearchDialogProps<T>, "header" | "rows" | "open">;
  t2string?: (v: T | undefined) => string;
  useQueryTable?: (
    args?: TQA
  ) => UseQueryResult<ESGTablePropBase<T>, Error | null | undefined>;
  queryArgs?: TQA;
}

/**
 * 目前只支援單選，複選功能尚未實作 TODO
 * @returns JSX.Element
 */
export function ESGSearch<T extends MRT_RowData = MRT_RowData>({
  placeholder,
  sx,
  disabled,
  onSearch = () => {
    console.log("Developer, you need to implement onSearch");
  },
  useQueryTable,
  queryArgs,
  height = "30px",
  iniValue,
  t2string = (v: T | undefined) => _.toString(v),
  props4Table = {},
  ...props
}: ESGSearchProps<T>) {
  const [defaultSize] = useState(height ?? "40px");
  const [currentTxtValue, setCurrentTxtValue] = useState<string>(
    t2string(iniValue)
  );
  const {
    isPending,
    error,
    data: prop4Dialog,
  } = useQueryTable?.(queryArgs) ?? {
    isPending: false,
    error: null,
    data: null,
  };
  const [openDialog, setOpenDialog] = useState(false);
  useEffect(() => {
    setCurrentTxtValue(t2string(iniValue));
  }, [iniValue]);

  return (
    <>
      <TextField
        placeholder={placeholder}
        disabled={disabled}
        value={currentTxtValue ?? ""}
        sx={{
          width: "100%",
          "& .MuiInputBase-root": {
            height: defaultSize,
            padding: "0",
            borderRadius: 0,
            "& fieldset": {
              border: "1px solid rgb(44,133,70)",
            },
          },
          height: defaultSize,
          ...sx,
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{
                width: defaultSize,
                minHeight: defaultSize,
                background: disabled ? "grey" : "green",
                "& svg path": { fill: "white" },
              }}
            >
              <IconButton
                sx={{
                  width: defaultSize,
                  height: defaultSize,
                  ":hover": { background: "darkgreen" },
                  borderRadius: "0",
                }}
                disabled={disabled}
                onClick={() => setOpenDialog(true)}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        {...props}
      />
      <ESGSearchDialog<T>
        {...props4Table}
        open={openDialog}
        header={prop4Dialog?.header ?? []}
        rows={prop4Dialog?.rows ?? []}
        title={prop4Dialog?.title ?? ""}
        onSubmitData={(sel) => {
          const keys = _.keys(sel);
          const row = prop4Dialog?.rows?.[+keys[0]];
          if (keys.length == 1) {
            setCurrentTxtValue(t2string(row));
            onSearch?.(row);
          } else {
            onSearch?.(iniValue);
          }
          setOpenDialog(false);
        }}
        onClose={() => setOpenDialog(false)}
        queryState={isPending ? "loading" : !!error ? error : "success"}
      />
    </>
  );
}
