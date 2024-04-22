import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

export interface ESGTabsPanelProps {
  children: { name: string; component: JSX.Element }[];
  onSelect?: (index: number) => void;
  iTab?: number;
}

export function ESGTabsPanel({ children = [], onSelect, iTab=0 }: ESGTabsPanelProps) {
  const [ithTab, setIthTab] = useState(iTab);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Tabs
        sx={{ flexShrink: 1 }}
        onChange={(_, i) => {
          setIthTab(i);
          onSelect?.(i);
        }}
        value={ithTab}
      >
        {children.map((child, index) => (
          <Tab
            key={`tab-${index}`}
            label={child.name}
            sx={{
              p: 0,
              ml: 0.2,
              mr: 0.2,
              background: index == ithTab ? "#DEDEDE" : "#FEF3F0",
              color: index == ithTab ? "#2C8646" : "#7D7D7D",
              minWidth: "200px",
            }}
          />
        ))}
      </Tabs>
      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
        {children[ithTab].component}
      </Box>
    </Box>
  );
}
