import type { Meta, StoryObj } from "@storybook/react";

import { ESGSearchDialog, ESGSearchDialogProps } from "./ESGSearchDialog";
import { fn } from "@storybook/test";
import {
  header,
  rows1,
} from "components/Base/Data Display/ESGTable/tests/testData";

const meta: Meta<typeof ESGSearchDialog> = {
  component: ESGSearchDialog,
};

export default meta;

type Story = StoryObj<typeof ESGSearchDialog>;

const args: ESGSearchDialogProps = {
  open: true,
  onClose: fn(),
  onSubmitData: fn(),
  title: "Title",
  header: header,
  rows: rows1,
  multiRowSelection: true,
};

export const Basic: Story = { args: args };
