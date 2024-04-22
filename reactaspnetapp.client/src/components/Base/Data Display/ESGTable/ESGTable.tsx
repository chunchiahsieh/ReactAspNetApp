import { MRT_Localization_ZH_HANT } from "material-react-table/locales/zh-Hant";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import _ from "lodash";
import {
  MRT_ColumnDef,
  MRT_ColumnFiltersState,
  MRT_RowData,
  MRT_RowSelectionState,
  MRT_ShowHideColumnsButton,
  MRT_TableOptions,
  MRT_ToggleDensePaddingButton,
  MRT_ToggleFiltersButton,
  MRT_ToggleGlobalFilterButton,
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import ChkBoxIcon from "assets/icons/checkbox.svg?react";
import FilterIcon from "assets/icons/Filter.svg?react";
import RadioIcon from "assets/icons/radio.svg?react";

import { useEffect, useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  ESGIconEditColumn,
  ESGIconFilter,
  ESGIconFilterRemove,
} from "components";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export interface ESGTableOneHeaderRow<T extends MRT_RowData = MRT_RowData> {
  keyName: string;
  label: string;
  type?: MRT_ColumnDef<T>["filterVariant"];
  hide?: boolean;
}
export interface ESGTablePropBase<T extends MRT_RowData = MRT_RowData> {
  header: ESGTableOneHeaderRow<T>[];
  rows: T[];
  title?: string;
}

export interface ESGTableProps<T extends MRT_RowData = MRT_RowData>
  extends Omit<MRT_TableOptions<T>, "columns" | "data">,
    ESGTablePropBase<T> {
  multiRowSelection?: boolean;
}

export function ESGTable<T extends MRT_RowData = MRT_RowData>(
  props: ESGTableProps<T>
) {
  const [__, i18n] = useTranslation();
  const {
    header,
    rows,
    title,
    multiRowSelection = true,
    state,
    onRowSelectionChange,
    ...restProps
  } = props;
  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>(
    state?.rowSelection || {}
  );
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    []
  );
  const iniColVisibility = useMemo(() => {
    const colVisibility: Record<string, boolean> = {};
    if (!!header)
      header.forEach((col) => {
        if (col.hide) {
          colVisibility[col.keyName] = false;
        }
      });
    return colVisibility;
  }, [header]);

  const columns = useMemo<MRT_ColumnDef<(typeof rows)[0]>[]>(() => {
    return _(rows[0])
      .keys()
      .map((headName) => {
        const col = header.find((h) => h.keyName === headName);
        const colInfo: MRT_ColumnDef<(typeof rows)[0]> =
          col?.type === "date"
            ? {
                header: col?.label || headName,
                accessorFn: (row) => dayjs(row[headName]),
                id: headName,
                filterVariant: "date",
                Cell: ({ cell }) =>
                  dayjs(cell.getValue<Date>()).format("YYYY/MM/DD"),
              }
            : col?.type === "datetime"
              ? {
                  header: col?.label || headName,
                  accessorFn: (row) => dayjs(row[headName]),
                  id: headName,
                  filterVariant: "datetime",
                  Cell: ({ cell }) =>
                    dayjs(cell.getValue<Date>()).format("YYYY/MM/DD HH:mm"),
                }
              : col?.type === "select" || col?.type === "checkbox"
                ? {
                    header: col?.label || headName,
                    accessorKey: headName,
                    Cell: ({ cell }) => `${cell.getValue()}`,
                    filterVariant: col?.type ?? "select",
                  }
                : {
                    header: col?.label || headName,
                    accessorKey: headName,
                    filterVariant: col?.type ?? "text",
                  };
        return colInfo;
      })
      .value();
  }, [header, rows]);

  useEffect(() => {
    onRowSelectionChange?.(rowSelection);
  }, [rowSelection]);

  const table = useMaterialReactTable({
    renderTopToolbarCustomActions: () => (
      <Box>
        <h2 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>{title}</h2>
      </Box>
    ),
    renderToolbarInternalActions: ({ table }) => (
      <Box>
        {columnFilters.length > 0 ? (
          <IconButton
            sx={{ width: "20px", height: "20px" }}
            onClick={() => setColumnFilters([])}
          >
            <ESGIconFilterRemove
              pathColor="rgba(0, 0, 0, 0.54)"
              width={20}
              height={20}
            />
          </IconButton>
        ) : null}
        <MRT_ToggleDensePaddingButton table={table} />
        <MRT_ToggleFiltersButton table={table} />
        <MRT_ToggleGlobalFilterButton table={table} />
        <MRT_ShowHideColumnsButton table={table} />
      </Box>
    ),
    columns,
    data: rows,
    enableMultiRowSelection: multiRowSelection,
    enableBatchRowSelection: true,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    state: { rowSelection, columnFilters },
    muiSelectCheckboxProps: {
      icon: multiRowSelection ? (
        <Box sx={{ "& svg path": { fill: "white" } }}>
          <ChkBoxIcon style={{ width: "16px", height: "16px" }} />
        </Box>
      ) : (
        <Box
          sx={{
            "& ellipse": { stroke: "black" },
            "& circle": { fill: "white" },
          }}
        >
          <RadioIcon style={{ width: "16px", height: "16px" }} />
        </Box>
      ),
      checkedIcon: multiRowSelection ? (
        <ChkBoxIcon style={{ width: "16px", height: "16px" }} />
      ) : (
        <Box sx={{ "& circle": { fill: "#2C8646" } }}>
          <RadioIcon style={{ width: "16px", height: "16px" }} />
        </Box>
      ),
    },
    positionToolbarAlertBanner: "bottom",
    enableColumnOrdering: true,
    enableGlobalFilter: true,
    enableColumnFilterModes: true,
    enableHiding: true,
    enableColumnResizing: true,
    icons: {
      ViewColumnIcon: () => (
        <ESGIconEditColumn
          pathColor="rgba(0, 0, 0, 0.54)"
          width={24}
          height={24}
        />
      ),
      FilterListIcon: () => (
        <ESGIconFilter pathColor="rgba(0, 0, 0, 0.54)" width={20} height={20} />
      ),
      FilterListOffIcon: () => (
        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FilterIcon style={{ width: "20px", height: "20px" }} />{" "}
          <Box
            position={"absolute"}
            sx={{
              height: "140%",
              width: "1px",
              backgroundColor: "black",
              transform: "rotate(-45deg)",
            }}
          />
        </Box>
      ),
    },
    ...(i18n.language === "zh"
      ? { localization: MRT_Localization_ZH_HANT }
      : {}),
    initialState: { columnVisibility: iniColVisibility },
    ...restProps,
  });

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      dateFormats={{
        keyboardDate: "YYYY/MM/DD",
        keyboardDateTime24h: "YYYY/MM/DD HH:mm",
      }}
    >
      <MaterialReactTable table={table} />
    </LocalizationProvider>
  );
}
