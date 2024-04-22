import type {Meta, StoryObj} from '@storybook/react';

import {OC_RYC_EditForm} from './OC_RYC_EditForm';

const meta: Meta<typeof OC_RYC_EditForm> = {
  component: OC_RYC_EditForm,
};

export default meta;

type Story = StoryObj<typeof OC_RYC_EditForm>;

export const Basic: Story = {args: {}};
