import type {Meta, StoryObj} from '@storybook/react';

import {OC_RYC_ViewForm} from './OC_RYC_ViewForm';

const meta: Meta<typeof OC_RYC_ViewForm> = {
  component: OC_RYC_ViewForm,
};

export default meta;

type Story = StoryObj<typeof OC_RYC_ViewForm>;

export const Basic: Story = {args: {}};
