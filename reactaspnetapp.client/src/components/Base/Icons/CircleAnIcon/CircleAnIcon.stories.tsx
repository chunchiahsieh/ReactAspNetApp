import type {Meta, StoryObj} from '@storybook/react';

import {CircleAnIcon} from './CircleAnIcon';
import { Add } from '@mui/icons-material';

const meta: Meta<typeof CircleAnIcon> = {
  component: CircleAnIcon,
};

export default meta;

type Story = StoryObj<typeof CircleAnIcon>;

export const Basic: Story = {args: {icon: <Add />}};
