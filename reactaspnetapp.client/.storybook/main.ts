import type { StorybookConfig } from "@storybook/react-vite";
import remarkGfm from "remark-gfm";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    // {
    //   name: "@storybook/addon-docs",
    //   options: {
    //     mdxPluginOptions: {
    //       mdxCompileOptions: {
    //         remarkPlugins: [remarkGfm],
    //       },
    //     },
    //   },
    // },
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "storybook-react-i18next",
    "@storybook/addon-mdx-gfm",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    // Modify the Vite config here
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, {
      server: {
        proxy: {
          "/api": {
            target: "https://localhost:7058",
            changeOrigin: true,
            secure: false,
            // rewrite: (path) => path.replace(/^\/api/, ""),
          },
        },
      },
    });
  },
};
export default config;
