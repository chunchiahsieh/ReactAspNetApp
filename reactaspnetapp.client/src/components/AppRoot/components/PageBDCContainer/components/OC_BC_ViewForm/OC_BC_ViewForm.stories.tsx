import type {Meta, StoryObj} from '@storybook/react';

import {OC_BC_ViewForm} from './OC_BC_ViewForm';

const meta: Meta<typeof OC_BC_ViewForm> = {
  component: OC_BC_ViewForm,
};

export default meta;

type Story = StoryObj<typeof OC_BC_ViewForm>;

export const Basic: Story = {args: {}};
