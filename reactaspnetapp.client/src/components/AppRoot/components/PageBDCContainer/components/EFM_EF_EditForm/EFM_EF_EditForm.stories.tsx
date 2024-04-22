import type {Meta, StoryObj} from '@storybook/react';

import {EFM_EF_EditForm} from './EFM_EF_EditForm';

const meta: Meta<typeof EFM_EF_EditForm> = {
  component: EFM_EF_EditForm,
};

export default meta;

type Story = StoryObj<typeof EFM_EF_EditForm>;

export const Basic: Story = {args: {}};
