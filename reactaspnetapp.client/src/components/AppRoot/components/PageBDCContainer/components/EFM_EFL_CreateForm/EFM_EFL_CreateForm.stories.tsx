import type {Meta, StoryObj} from '@storybook/react';

import {EFM_EFL_CreateForm} from './EFM_EFL_CreateForm';

const meta: Meta<typeof EFM_EFL_CreateForm> = {
  component: EFM_EFL_CreateForm,
};

export default meta;

type Story = StoryObj<typeof EFM_EFL_CreateForm>;

export const Basic: Story = {args: {}};
