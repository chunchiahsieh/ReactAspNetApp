import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import SearchIcon from "@mui/icons-material/Search";

import { ESGListBoxData, ESGListbox } from "./ESGListbox";

const meta: Meta<typeof ESGListbox> = {
  component: ESGListbox,
};

export default meta;

type Story = StoryObj<typeof ESGListbox>;

const data: ESGListBoxData = {
  name: "react-treebeard",
  key: "root",
  sx: {width: "100%", bgcolor: "background.paper"},
  // toggled: true,
  children: [
    {
      name: "example",
      icon: <SearchIcon />,
      onClick: fn((e)=>console.log('example',e)),
      children: [
        { name: "app.js", onClick: fn((e)=>console.log('app.js',e)) },
        { name: "data.js" },
        { name: "index.html" },
        { name: "styles.js" },
        { name: "webpack.config.js" },
      ],
    },
    {
      name: "node_modules",
      children: [],
    },
    {
      name: "src",
      children: [
        {
          name: "components",
          children: [{ name: "decorators.js" }, { name: "treebeard.js" }],
        },
        { name: "index.js" },
      ],
    },
    {
      name: "themes",
      children: [{ name: "animations.js" }, { name: "default.js" }],
    },
    { name: "gulpfile.js" },
    { name: "index.js" },
    { name: "package.json" },
  ],
};

export const Basic: Story = { args: { data: data}};
