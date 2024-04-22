import type {Meta, StoryObj} from '@storybook/react';

import {OC_RPC_EditForm} from './OC_RPC_EditForm';

const meta: Meta<typeof OC_RPC_EditForm> = {
  component: OC_RPC_EditForm,
};

export default meta;

type Story = StoryObj<typeof OC_RPC_EditForm>;

export const Basic: Story = {args: {}};
