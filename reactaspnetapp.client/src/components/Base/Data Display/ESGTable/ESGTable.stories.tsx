import type { Meta, StoryObj } from "@storybook/react";

import { ESGTable } from "./ESGTable";
import { header, rows1 } from "./tests/testData";
import { fn } from "@storybook/test";

const meta: Meta<typeof ESGTable> = {
  component: ESGTable,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ESGTable>;

export const Basic: Story = {
  args: {
    header,
    rows: rows1,
    title: "ESG Table",
    multiRowSelection: true,
    onRowSelectionChange: fn(),
  },
};
