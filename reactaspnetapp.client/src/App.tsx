import { AppRoot } from "components";
import "./App.css";
import { useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { GlobalTheme } from "styles/globalTheme";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  useEffect(() => {
    const SplashScreen = document.querySelector("#SplashScreen");
    if (SplashScreen) {
      //delete splash screen
      window.dispatchEvent(new Event("splashscreen-remove"));
      SplashScreen.remove();
    }
  }, []);
  const queryClient = new QueryClient();
  return (
    <div className="App font-bold">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={GlobalTheme}>
          <CssBaseline />
          <AppRoot />
        </ThemeProvider>
      </QueryClientProvider>
      {/* <header className="App-header">
                <h1>React App</h1>
            </header> */}
    </div>
  );
}

export default App;
