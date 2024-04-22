import type {Meta, StoryObj} from '@storybook/react';

import {BI_ViewForm} from './BI_ViewForm';

const meta: Meta<typeof BI_ViewForm> = {
  component: BI_ViewForm,
};

export default meta;

type Story = StoryObj<typeof BI_ViewForm>;

export const Basic: Story = {args: {}};
