import { Box, CircularProgress } from "@mui/material";
import { sxFullSize } from "styles/sxTemplates";

export interface FetchingDataProps {}

export function FetchingData({}: FetchingDataProps) {
  return (
    <Box
      sx={{
        ...sxFullSize,
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>{"Fetching Data...."}</div>
      <CircularProgress />
    </Box>
  );
}
