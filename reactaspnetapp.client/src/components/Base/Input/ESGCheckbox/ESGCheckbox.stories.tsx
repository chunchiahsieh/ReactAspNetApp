import type {Meta, StoryObj} from '@storybook/react';

import {ESGCheckbox} from './ESGCheckbox';

const meta: Meta<typeof ESGCheckbox> = {
  component: ESGCheckbox,
};

export default meta;

type Story = StoryObj<typeof ESGCheckbox>;

export const Basic: Story = {args: {
  onChange: (e, chk) => {console.log(`ESG Checkbox Storybook`,e,chk);},
  checked: false,
  sx: {
    fontSize: '2rem',
    width: '100%',
    height: '100%',
  },
  disabled: false,
}};

export const DisableCheck: Story = {args: {
  onChange: (e, chk) => {console.log(`ESG Checkbox Storybook`,e,chk);},
  checked: true,
  sx: {
    fontSize: '2rem',
  },
  disabled: true,
}};

export const DisableunCheck: Story = {args: {
  onChange: (e, chk) => {console.log(`ESG Checkbox Storybook`,e,chk);},
  checked: false,
  sx: {
    fontSize: '2rem',
  },
  disabled: true,
}};

