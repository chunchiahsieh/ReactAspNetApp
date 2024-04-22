import type {Meta, StoryObj} from '@storybook/react';

import {EFM_EF_CreateForm} from './EFM_EF_CreateForm';

const meta: Meta<typeof EFM_EF_CreateForm> = {
  component: EFM_EF_CreateForm,
};

export default meta;

type Story = StoryObj<typeof EFM_EF_CreateForm>;

export const Basic: Story = {args: {}};
