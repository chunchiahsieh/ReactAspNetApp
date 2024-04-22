import { Backdrop, Box, Typography } from "@mui/material";
import { ErrorOutlineOutlined } from "@mui/icons-material";
import React from "react";

export interface ESGBackdropProps {
  show?: boolean;
  content?: React.ReactNode;
  actions?: React.ReactNode[];
  onClose: () => void;
}

export function ESGBackdrop({
  show = false,
  content = undefined,
  actions = undefined,
  onClose = () => {},
}: ESGBackdropProps) {
  return (
    <Backdrop
      open={show}
      onClick={onClose}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: 637,
          height: 291,
          background: "#EBF0EC",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Box
          sx={{
            flexGrow: 0,
            width: "100%",
            background: "#2C8646",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ErrorOutlineOutlined
            sx={{ fontSize: 57, color: "#FFFFFF", margin: 1 }}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            m:2
          }}
        >
          {content}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {actions &&
            actions.map((action, index) => (
              <Box children={action} key={`act-${index}`} />
            ))}
        </Box>
        <Box sx={{ flexGrow: 1 }} />
      </Box>
    </Backdrop>
  );
}
