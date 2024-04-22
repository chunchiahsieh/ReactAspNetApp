import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';

import {Delete} from './Delete';

const meta: Meta<typeof Delete> = {
  component: Delete,
};

export default meta;

type Story = StoryObj<typeof Delete>;

export const Basic: Story = {args: {
  show: true,
  onClose: fn(),
  onDelete: fn(),
}};
