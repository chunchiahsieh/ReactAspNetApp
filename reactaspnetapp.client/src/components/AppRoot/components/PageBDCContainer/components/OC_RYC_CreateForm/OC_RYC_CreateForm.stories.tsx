import type {Meta, StoryObj} from '@storybook/react';

import {OC_RYC_CreateForm} from './OC_RYC_CreateForm';

const meta: Meta<typeof OC_RYC_CreateForm> = {
  component: OC_RYC_CreateForm,
};

export default meta;

type Story = StoryObj<typeof OC_RYC_CreateForm>;

export const Basic: Story = {args: {}};
