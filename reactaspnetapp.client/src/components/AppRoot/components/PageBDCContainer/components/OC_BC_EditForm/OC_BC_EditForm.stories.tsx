import type {Meta, StoryObj} from '@storybook/react';

import {OC_BC_EditForm} from './OC_BC_EditForm';

const meta: Meta<typeof OC_BC_EditForm> = {
  component: OC_BC_EditForm,
};

export default meta;

type Story = StoryObj<typeof OC_BC_EditForm>;

export const Basic: Story = {args: {}};
