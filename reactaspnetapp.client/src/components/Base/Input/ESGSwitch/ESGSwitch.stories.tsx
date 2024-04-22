import type {Meta, StoryObj} from '@storybook/react';

import {ESGSwitch} from './ESGSwitch';

const meta: Meta<typeof ESGSwitch> = {
  component: ESGSwitch,
};

export default meta;

type Story = StoryObj<typeof ESGSwitch>;

export const Basic: Story = {args: {
  width: 55,
  height: 28,
  checked: true,
  onChange: (_,chk) => {console.log(chk);},
  label: 'Switch',
}};

export const Disabled: Story = {args: {
  width: 55,
  height: 28,
  checked: true,
  onChange: (_,chk) => {console.log(chk);},
  label: 'Switch',
  disabled: true,
}};

export const DisabledFalse: Story = {args: {
  width: 55,
  height: 28,
  checked: false,
  onChange: (_,chk) => {console.log(chk);},
  label: 'Switch',
  disabled: true,
}};
