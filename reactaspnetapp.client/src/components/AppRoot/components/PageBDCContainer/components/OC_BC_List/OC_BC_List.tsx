import { useTranslation } from "react-i18next";
import { OnChangeFn, RowSelectionState } from "@tanstack/table-core";
import { useEffect, useState } from "react";
import { Entity, header_List } from "./ListMode";
import { Box } from "@mui/material";
import { sxFullSize } from "styles/sxTemplates";
import { ESGTable } from "components";
import common from "styles/locales/common";
import { FetchingData } from "components/Base/components";

export interface OC_BC_ListProps {
  isPending: boolean;
  error: Error | null;
  data: Entity[] | undefined;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
}

export function OC_BC_List({isPending, error, data, onRowSelectionChange}: OC_BC_ListProps) {
  const [t, i18n] = useTranslation("sm");
  const [header, setHeader] = useState(header_List);
  useEffect(() => {
    const headerBuffer = header_List.map((header) => ({
      ...header,
      label: t(`${header.label}`),
    }));
    setHeader(headerBuffer);
  }, [, i18n.language]);

  return isPending ? (
    <FetchingData />
  ) : !!error ? (
    <Box>{error.message}</Box>
  ) : (
    <Box sx={{ ...sxFullSize, flexGrow: 1 }}>
      <ESGTable
        rows={data ?? []}
        header={header}
        title={t(common.Funcation_id.OC_BC_List)}
        onRowSelectionChange={onRowSelectionChange}
      />
    </Box>
  );
}
