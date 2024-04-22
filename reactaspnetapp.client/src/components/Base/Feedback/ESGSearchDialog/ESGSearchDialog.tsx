import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  useTheme,
} from "@mui/material";
import { ESGButton, ESGCancelButton } from "components";
import { ESGTable, ESGTableProps } from "components/Base/Data Display/ESGTable";
import { FetchingData } from "components/Base/components";
import { MRT_RowData, MRT_RowSelectionState } from "material-react-table";
import { FormEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import localeCommon from "styles/locales/common";

export interface ESGSearchDialogProps<T extends MRT_RowData = MRT_RowData>
  extends Omit<DialogProps, "onSubmit">,
    ESGTableProps<T> {
  multiRowSelection?: boolean;
  onSubmitData?: (rowSelection: MRT_RowSelectionState) => void;
  queryState?: "loading" | "success" | Error;
}

// function useResizeListener() { //失敗，未成功
//   const [btnWidth, setBtnWidth] = useState(0);
//   const btnRef = useRef<HTMLButtonElement>(null);
//   useEffect(() => {
//     const observer = new ResizeObserver((entries) => {
//       setBtnWidth(entries[0].contentRect.width);
//     });
//     if (btnRef.current)
//       observer.observe(btnRef.current);
//     return () => observer.disconnect();
//   },[btnRef]);

//   return { btnWidth, btnRef };
// }

export function ESGSearchDialog<T extends MRT_RowData = MRT_RowData>({
  open = true,
  onClose,
  onSubmitData,
  PaperProps,
  multiRowSelection = false,
  onRowSelectionChange,
  rows,
  header,
  title,
  queryState="success",
  ...props
}: ESGSearchDialogProps<T>) {
  // const { btnWidth, btnRef } = useResizeListener();
  const [t] = useTranslation("common");
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(open);
  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  return (
    <Dialog
      open={isOpen}
      onClose={(e, r) => {
        setIsOpen(false);
        onClose && onClose(e, r);
      }}
      PaperProps={{
        component: "form",
        sx: { width: "90%", minWidth: "90%", height: "90%", ...PaperProps?.sx },
        onSubmit: (e: FormEvent<HTMLDivElement>) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(false);
          onSubmitData && onSubmitData(rowSelection);
        },
      }}
      {...props}
    >
      <DialogTitle sx={{ bgcolor: theme.palette.primary.main, color: "white" }}>
        {title}
      </DialogTitle>
      <DialogContent sx={{ p: 0, mt: 1 }}>
        {queryState === "loading" ? (
          <FetchingData />
        ) : queryState==="success" ?(
          <ESGTable<T>
            rows={rows}
            header={header}
            multiRowSelection={multiRowSelection}
            onRowSelectionChange={(newRowSelection) => {
              setRowSelection(newRowSelection);
              onRowSelectionChange && onRowSelectionChange(newRowSelection);
            }}
            state={rowSelection}
          />
        ):(<>{Error}</>)}
      </DialogContent>
      <DialogActions>
        <ESGButton
          txt={t(localeCommon.confirmSelection)}
          sx={{ margin: "1rem 3rem" }}
          type="submit"
          // ref={btnRef}
        />
        <ESGCancelButton
          txt={t(localeCommon.return2)}
          sx={{ margin: "1rem 3rem", minWidth: "6rem" }}
          onClick={() => {
            setIsOpen(false);
            onClose && onClose({}, "escapeKeyDown");
          }}
          // style={{ minWidth: btnWidth}}
        />
      </DialogActions>
    </Dialog>
  );
}
