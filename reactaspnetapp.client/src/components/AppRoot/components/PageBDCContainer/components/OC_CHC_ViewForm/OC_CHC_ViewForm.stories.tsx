import type {Meta, StoryObj} from '@storybook/react';

import {OC_CHC_ViewForm} from './OC_CHC_ViewForm';

const meta: Meta<typeof OC_CHC_ViewForm> = {
  component: OC_CHC_ViewForm,
};

export default meta;

type Story = StoryObj<typeof OC_CHC_ViewForm>;

export const Basic: Story = {args: {}};
