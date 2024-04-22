import type {Meta, StoryObj} from '@storybook/react';

import {OC_RPC_ViewForm} from './OC_RPC_ViewForm';

const meta: Meta<typeof OC_RPC_ViewForm> = {
  component: OC_RPC_ViewForm,
};

export default meta;

type Story = StoryObj<typeof OC_RPC_ViewForm>;

export const Basic: Story = {args: {}};
