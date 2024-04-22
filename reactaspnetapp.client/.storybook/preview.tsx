import { ThemeProvider } from "@mui/material/styles";
import { GlobalTheme } from "../src/styles/globalTheme";
import { CssBaseline } from "@mui/material";

import type { Preview } from "@storybook/react";
import "tailwindcss/tailwind.css";
import "../src/App.css";
import "./preview.css";
import i18n from "../src/i18next_main";
import { Suspense, useEffect } from "react";
import { I18nextProvider, I18nextProviderProps } from "react-i18next";
import React from "react";
import { use } from "i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: "(^on|\.on)[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    i18n,
    docs: { source: { type: "code" } },
  },
  globals: {
    locale: "en",
    locales: {
      en: "English",
      zh: "繁中",
    },
  },
};

const withI18next = (Story: any, context: any) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  const queryClient = new QueryClient();

  return (
    <Suspense fallback="loading">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={GlobalTheme}>
          <CssBaseline />
          {/* <I18nextProvider i18n={i18n}> */}
          <Story {...context} />
          {/* </I18nextProvider> */}
        </ThemeProvider>
      </QueryClientProvider>
    </Suspense>
  );
};

export const decorators = [withI18next];
export default preview;
