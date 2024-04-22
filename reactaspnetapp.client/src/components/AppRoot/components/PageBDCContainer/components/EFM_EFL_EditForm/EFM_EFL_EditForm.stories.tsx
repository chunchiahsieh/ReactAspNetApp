import type {Meta, StoryObj} from '@storybook/react';

import {EFM_EFL_EditForm} from './EFM_EFL_EditForm';

const meta: Meta<typeof EFM_EFL_EditForm> = {
  component: EFM_EFL_EditForm,
};

export default meta;

type Story = StoryObj<typeof EFM_EFL_EditForm>;

export const Basic: Story = {args: {}};
