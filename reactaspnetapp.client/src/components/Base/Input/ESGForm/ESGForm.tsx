import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  FormGroup,
  FormLabel,
  Grid,
  IconButton,
  SxProps,
} from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { ESGDatepicker } from "../ESGDatepicker";
import { ESGTextinput } from "../ESGTextinput";
import { ESGButton, ESGCancelButton } from "../ESGButton";
import { ESGSearch } from "../ESGSearch";
// import { isString } from "mobx/dist/internal";
import { LocaleValue, getLocaleString } from "localModels/LocaleString";
import { sxColPile, sxFullSize, sxRowPile } from "styles/sxTemplates";
import { observer } from "mobx-react-lite";
import { makeAutoObservable } from "mobx";
import _ from "lodash";
import { ESGBackdrop, ESGSelect, ESGSwitch } from "components";
import localeCommon from "styles/locales/common";
import { ESGSelectProps } from "../ESGSelect";
import { ESGSwitchProps } from "../ESGSwitch";
import { ESGIconBack } from "components";
import { MRT_RowData } from "material-react-table";
import { UseQueryResult } from "@tanstack/react-query";
import { ESGTablePropBase } from "components/Base/Data Display/ESGTable";
import { AvailableLang } from "i18next_main";

type ColumnType = {
  date: string; // 為了 TextInput 的顯示而如此設定，不然應該用 Date
  datetime: string; // 為了 TextInput 的顯示而如此設定，不然應該用 Date
  search: any; // TODO
  text: string;
  number: string; // 為了 TextInput 的顯示而如此設定，不然會連英文字都打出來
  select: string | string[];
  boolean: boolean;
  button: any;
  empty: any;
  display: string; // 因為有顯示目前欄位們的值的組合的需求
};

export interface OneColumnOfESGFormProps<
  T extends MRT_RowData = MRT_RowData,
  TQA = any,
> {
  forSearch?: {
    t2string: (v: T | undefined) => string;
    useQueryTable: () => UseQueryResult<ESGTablePropBase<T>, Error>;
    onSearch?: (value: T | undefined) => void;
    queryArgs?: TQA;
  };
  name: LocaleValue;
  cType: keyof ColumnType;
  value?: any;
  fnType?: "input" | "disable" | "view";
  forSelect?: ESGSelectProps;
  forButton?: {
    localeTxt: string;
    onClick: () => void;
  };
  forSwitch?: ESGSwitchProps;
  forDisplay?: number[]; // 要顯示的欄位的 index
  nCols?: number;
  required?: boolean;
}

export interface OneColumnWithKeyName<T = any> extends OneColumnOfESGFormProps {
  keyName?: keyof T;
}

export interface ESGFormProps {
  columns: OneColumnOfESGFormProps[];
  title?: string;
  titleSX?: SxProps;
  onSubmit?: (values: ESGFormProps["columns"]) => void;
  onClose?: (values: ESGFormProps["columns"]) => void;
  onBack?: () => void;
  onChangeValues?: (values: OneColumnOfESGFormProps["value"][]) => void;
  stSubmit?: LocaleValue;
  hideSumbit?: boolean;
  stClose?: LocaleValue;
  hideClose?: boolean;
  hideBack?: boolean;
  nColumn?: number;
  extraLocales?: string[];
}

export const ESGForm = observer(ESGFormRare);
function ESGFormRare({
  title = "test",
  titleSX = {},
  columns = [],
  onSubmit,
  onClose,
  onBack,
  onChangeValues,
  stSubmit = "submit",
  hideSumbit = false,
  stClose = "cancel",
  hideClose = false,
  hideBack = false,
  nColumn = 2,
  extraLocales = [],
}: ESGFormProps) {
  const [showBackDrop, setShowBackDrop] = useState(false);
  const labelSXs = useMemo(() => {
    class SxObs {
      color?: "red" | "black";
      constructor(color?: "red" | "black") {
        this.color = color;
        makeAutoObservable(this);
      }
      setColor(color: "red" | "black") {
        this.color = color;
      }
    }
    return columns.map((__) => {
      return new SxObs("black");
    });
  }, [columns]);
  const [t, i18n] = useTranslation(
    extraLocales.length === 0 ? "common" : [...extraLocales, "common"]
  );
  const [newValues, setNewValues] = useState<
    OneColumnOfESGFormProps["value"][]
  >(columns.map(mapColumnToValue));
  const [locale, setLocale] = useState<AvailableLang>("en");

  useEffect(() => {
    setLocale(i18n.language as AvailableLang);
  }, [i18n.language]);
  useEffect(() => {
    setNewValues(columns.map(mapColumnToValue));
  }, [columns]);

  function mapColumnToValue(c: OneColumnOfESGFormProps) {
    let v = c.value;
    switch (c.cType) {
      case "date":
      case "datetime":
      case "text":
      case "number":
        v = v ?? "";
        break;
      case "search": // TODO 以下待想
      case "select":
      case "boolean":
      case "button":
      case "empty":
      case "display":
        break;
    }
    return v;
  }

  function isEmpty4Required(
    column: OneColumnOfESGFormProps<MRT_RowData>,
    v: any
  ) {
    return (
      column.required &&
      column.fnType !== "view" &&
      (column.cType === "boolean"
        ? v === null
        : !!!v || (_.isArray(v) && v.length === 0))
    );
  }

  useEffect(() => {
    onChangeValues?.(newValues);
  }, [newValues]);

  return (
    <>
      <Box
        component={"form"}
        noValidate
        sx={{ ...sxFullSize, ...sxColPile, overflow: "auto" } as SxProps}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (newValues.some((v, i) => isEmpty4Required(columns[i], v)))
            setShowBackDrop(true);
          else {
            setShowBackDrop(false);
            onSubmit?.(
              // submit 前的處理，僅此一處
              columns.map((c) => {
                if (c.cType === "number") {
                  return { ...c, value: +c.value };
                } else {
                  return c;
                }
              })
            );
          }
        }}
      >
        <FormLabel sx={{ fontSize: 24, fontWeight: "bold" }}>
          <Box sx={{ ...sxRowPile, width: "100%", p: 2 }}>
            <Button sx={{ display: "none" }}></Button>
            {hideBack ? (
              <></>
            ) : (
              <IconButton onClick={onBack}>
                <ESGIconBack pathColor="black" width={30} height={30} />
              </IconButton>
            )}
            <Box
              sx={
                {
                  flexGrow: 1,
                  ...sxRowPile,
                  alignItems: "center",
                  ...titleSX,
                } as SxProps
              }
            >
              {title}
            </Box>
            {hideSumbit ? (
              <></>
            ) : (
              <ESGButton
                sx={{ flexShrink: 1, margin: "0 20px", minWidth: "100px" }}
                txt={getLocaleString(stSubmit, t, locale)}
                type="submit"
              />
            )}
            {hideClose ? (
              <></>
            ) : (
              <ESGCancelButton
                onClick={() => {
                  onClose?.(columns);
                }}
                sx={{ flexShrink: 1, margin: "0 20px", minWidth: "100px" }}
                txt={getLocaleString(stClose, t, locale)}
              />
            )}
          </Box>
        </FormLabel>
        <FormGroup sx={{ flexGrow: 1, overflow: "hidden" }}>
          <Grid
            container
            spacing={0}
            sx={{
              padding: "0 20px",
              paddingRight: `${Math.round(200 / nColumn)}px`,
              overflow: "auto",
            }}
          >
            {columns.map((column, index) => (
              <Grid
                item
                xs={12 / (column.nCols ?? nColumn)}
                key={`form-${index}`}
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <Box sx={{ padding: "20px", ...sxRowPile, width: "100%" }}>
                  <Box sx={{ pl: 1, alignSelf: "center", width: "140px" }}>
                    <div style={{ color: labelSXs[index].color }}>
                      {typeof column.name === "string"
                        ? t(column.name)
                        : column.name[locale]}
                      {column.required ? "*" : ""}
                    </div>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}
                  >
                    {column.cType === "date" ? (
                      <ESGDatepicker
                        date={(newValues[index] ?? "") as string}
                        format="YYYY/MM/DD"
                        sx={{ width: "100%" }}
                        onDateChange={(newValue) => {
                          const vs = [...newValues];
                          vs[index] = newValue ?? "";
                          column.value = vs[index];
                          console.log(newValue);
                          setNewValues(vs);
                          if (column.required && !newValue) {
                            labelSXs[index].setColor("red");
                          } else {
                            labelSXs[index].setColor("black");
                          }
                        }}
                        isView={column.fnType === "view"}
                        disabled={column.fnType === "disable"}
                      />
                    ) : column.cType === "datetime" ? (
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                          value={dayjs(
                            newValues[index] as string,
                            "YYYY/MM/DD HH:mm"
                          )}
                          format="YYYY/MM/DD HH:mm"
                          onChange={(newValue) => {
                            const vs = [...newValues];
                            vs[index] = newValue?.format(
                              "YYYY/MM/DD HH:mm"
                            ) as string;
                            column.value = vs[index];
                            setNewValues(vs);
                            if (column.required && !newValue) {
                              labelSXs[index].setColor("red");
                            } else {
                              labelSXs[index].setColor("black");
                            }
                          }}
                        />
                      </LocalizationProvider>
                    ) : column.cType === "search" ? (
                      <ESGSearch
                        sx={{ width: "100%" }}
                        iniValue={newValues[index]}
                        onSearch={(val) => {
                          const vs = [...newValues];
                          vs[index] = val;
                          column.value = vs[index];
                          setNewValues(vs);
                          column.forSearch?.onSearch?.(val);
                        }}
                        t2string={column.forSearch?.t2string}
                        useQueryTable={column.forSearch?.useQueryTable}
                        queryArgs={column.forSearch?.queryArgs}
                        disabled={column.fnType === "disable"}
                      />
                    ) : column.cType === "select" ? (
                      <ESGSelect
                        data={[]}
                        {...column.forSelect}
                        onSelectChange={(data) => {
                          const vs = [...newValues];
                          vs[index] = data;
                          column.value = vs[index];
                          setNewValues(vs);
                          if (
                            column.required &&
                            (!!!data || data.length === 0)
                          ) {
                            labelSXs[index].setColor("red");
                          } else {
                            labelSXs[index].setColor("black");
                          }
                        }}
                      />
                    ) : column.cType === "boolean" ? (
                      <ESGSwitch
                        checked={newValues[index] as boolean}
                        {...column.forSwitch}
                        onChange={(__, chk) => {
                          const vs = [...newValues];
                          vs[index] = chk;
                          column.value = vs[index];
                          setNewValues(vs);
                          if (column.required && vs[index] === null) {
                            labelSXs[index].setColor("red");
                          } else {
                            labelSXs[index].setColor("black");
                          }
                        }}
                        disabled={
                          column.fnType === "disable" ||
                          column.fnType === "view"
                        }
                      />
                    ) : column.cType === "button" ? (
                      <ESGButton
                        txt={getLocaleString(
                          column.forButton?.localeTxt ?? "",
                          t,
                          locale
                        )}
                        onClick={column.forButton?.onClick}
                      />
                    ) : column.cType === "empty" ? (
                      <div></div>
                    ) : column.cType === "display" ? (
                      <ESGTextinput
                        sx={{ width: "100%" }}
                        value={column.forDisplay
                          ?.map((i) => {
                            const value = newValues[i];
                            if (
                              columns[i].cType === "search" &&
                              value?.[locale]
                            ) {
                              return value[locale];
                            } else {
                              return value;
                            }
                          })
                          .join(" ")}
                        isView={true}
                      />
                    ) : (
                      <ESGTextinput
                        sx={{ width: "100%" }}
                        value={newValues[index]}
                        onChange={(e) => {
                          if (
                            column.cType === "number" &&
                            e.target.value.trim() !== "0" &&
                            _.isNaN(+e.target.value)
                          ) {
                            setNewValues([...newValues]);
                            alert("Please input a number");
                            return;
                          }
                          const vs = [...newValues];
                          vs[index] = e.target.value;
                          column.value = vs[index];
                          setNewValues(vs);
                          if (column.required && !!!vs[index]) {
                            labelSXs[index].setColor("red");
                          } else {
                            labelSXs[index].setColor("black");
                          }
                        }}
                        disabled={column.fnType === "disable"}
                        isView={column.fnType === "view"}
                      />
                    )}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      </Box>
      <ESGBackdrop
        show={showBackDrop}
        content={
          <Box sx={{ ...sxColPile }}>
            <div>{t(localeCommon.missing_required_field)}</div>
            <div style={{ height: "10px" }}></div>
            <div style={{ color: "red" }}>
              {newValues
                .map((v, i) => {
                  return isEmpty4Required(columns[i], v)
                    ? getLocaleString(columns[i].name, t, locale)
                    : "";
                })
                .filter((v) => v !== "")
                .join(",")}
            </div>
          </Box>
        }
        onClose={() => {
          setShowBackDrop(false);
        }}
      />
    </>
  );
}
