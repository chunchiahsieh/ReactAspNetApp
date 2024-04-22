import { createTheme } from "@mui/material/styles";

export const GlobalTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2C8646",
    },
  },
  components: {
  },
  typography: {
    fontFamily: "'Segoe UI', system-ui, sans-serif",
  },
});

export const sidebarStyle = {
  minWidth: 300,
  maxWidth: 300,
  height: "100%",
}
