import type {Meta, StoryObj} from '@storybook/react';

import {OC_RPC_CreateForm} from './OC_RPC_CreateForm';

const meta: Meta<typeof OC_RPC_CreateForm> = {
  component: OC_RPC_CreateForm,
};

export default meta;

type Story = StoryObj<typeof OC_RPC_CreateForm>;

export const Basic: Story = {args: {}};
