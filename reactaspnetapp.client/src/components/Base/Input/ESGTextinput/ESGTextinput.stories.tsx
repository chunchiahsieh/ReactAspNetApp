import type { Meta, StoryObj } from "@storybook/react";

import { ESGTextinput, ESGTextinputProps } from "./ESGTextinput";
import { useState } from "react";
import { fn } from "@storybook/test";

const meta: Meta<typeof ESGTextinput> = {
  component: ESGTextinput,
};

export default meta;

type Story = StoryObj<typeof ESGTextinput>;

export const Basic: Story = {
  render: ({value, ...props}:ESGTextinputProps) => {
    const [value1, setValue] = useState<string>(value as string);
  return <ESGTextinput {...props} value={value1} onChange={(e)=>setValue(e.target.value)}/>;},
  args: {
    height: "40px",
    sx: { width: "100%" },
    value: "測試",
    disabled: true,
    isView: false,
    onChange: fn(),
  },
};
