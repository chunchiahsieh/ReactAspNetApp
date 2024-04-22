import type { Meta, StoryObj } from "@storybook/react";

import { ESGBackdrop } from "./ESGBackdrop";
import { fn } from "@storybook/test";
import { ESGButton } from "components";
import { useState } from "react";

const meta: Meta<typeof ESGBackdrop> = {
  component: ESGBackdrop,
};

export default meta;

type Story = StoryObj<typeof ESGBackdrop>;

export const Basic: Story = {
  args: {show: true},
  render: ({show}) => 
{    const [show1, setShow1] = useState(show);
    return (<ESGBackdrop
      show={show1}
      content="This is a Test of ESGBackdrop"
      onClose={fn(()=>setShow1(false))}
      actions={[
          <ESGButton txt="confirm" onClick={fn()} sx={{}} />,
          <ESGButton txt="confirm" onClick={fn()} />
      ]}
    />)
}  ,
};
