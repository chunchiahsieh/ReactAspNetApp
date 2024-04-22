import type {Meta, StoryObj} from '@storybook/react';

import {EFM_EF_ViewForm} from './EFM_EF_ViewForm';

const meta: Meta<typeof EFM_EF_ViewForm> = {
  component: EFM_EF_ViewForm,
};

export default meta;

type Story = StoryObj<typeof EFM_EF_ViewForm>;

export const Basic: Story = {args: {}};
