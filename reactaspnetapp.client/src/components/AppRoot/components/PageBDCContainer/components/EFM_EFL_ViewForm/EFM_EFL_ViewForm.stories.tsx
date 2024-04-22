import type {Meta, StoryObj} from '@storybook/react';

import {EFM_EFL_ViewForm} from './EFM_EFL_ViewForm';

const meta: Meta<typeof EFM_EFL_ViewForm> = {
  component: EFM_EFL_ViewForm,
};

export default meta;

type Story = StoryObj<typeof EFM_EFL_ViewForm>;

export const Basic: Story = {args: {}};
