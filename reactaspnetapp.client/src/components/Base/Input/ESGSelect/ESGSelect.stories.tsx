import type {Meta, StoryObj} from '@storybook/react';

import {ESGSelect} from './ESGSelect';
import { fn } from '@storybook/test';

const meta: Meta<typeof ESGSelect> = {
  component: ESGSelect,
};

export default meta;

type Story = StoryObj<typeof ESGSelect>;

export const Basic: Story = {args: {
  data: [
    'Option 1',
    'Option 2',
    'Option 3',
  ],
  onSelectChange: fn(),
  multiple: true,
  sx: {width: 300},
}};

export const Single: Story = {args: {
  data: [
    'Option 1',
    'Option 2',
    'Option 3',
  ],
  onSelectChange: fn(),
  multiple: false,
  sx: {width: 300},
}};

export const Disabled: Story = {args: {
  data: [
    'Option 1',
    'Option 2',
    'Option 3',
  ],
  onSelectChange: fn(),
  multiple: true,
  disabled: true,
  sx: {width: 300},
}};
