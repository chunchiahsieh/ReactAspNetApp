import { useTranslation } from "react-i18next";
import { OnChangeFn, RowSelectionState } from "@tanstack/table-core";
import { useEffect, useState } from "react";
import { Entity, headerSM_VAM_List } from "./ListModel";
import { Box } from "@mui/material";
import { sxFullSize } from "styles/sxTemplates";
import { ESGTable } from "components";
import localeSM from "styles/locales/sm";
import { FetchingData } from "components/Base/components";

export interface CCProps {
  isPending: boolean;
  error: Error | null;
  data: Entity[] | undefined;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
}

export function CC({isPending, error, data, onRowSelectionChange}: CCProps) {
  const [t, i18n] = useTranslation("sm");
  const [header, setHeader] = useState(headerSM_VAM_List);
  useEffect(() => {
    const headerBuffer = headerSM_VAM_List.map((header) => ({
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
        title={t(localeSM.vam.listTitle)}
        onRowSelectionChange={onRowSelectionChange}
      />
    </Box>
  );
}
