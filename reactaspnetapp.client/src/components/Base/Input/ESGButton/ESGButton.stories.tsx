import type { Meta, StoryObj } from "@storybook/react";

import { ESGButton, ESGButtonProps } from "./ESGButton";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof ESGButton> = {
  component: ESGButton,
};

export default meta;

type Story = StoryObj<typeof ESGButton>;

const ButtonWithHooks = ({ txt = "confirm", ...props }:ESGButtonProps) => {
  const [t] = useTranslation("common");
  const [ctxt, setCtxt] = useState(txt);
  useEffect(() => {
    setCtxt(t(txt));
  }, [txt]);
  return <ESGButton txt={ctxt} {...props} />;
};

export const Basic: Story = { render: () => <ButtonWithHooks txt="confirm" /> };
export const Disable: Story = {
  render: () => <ButtonWithHooks txt="delete2" disabled={true} />,
};
