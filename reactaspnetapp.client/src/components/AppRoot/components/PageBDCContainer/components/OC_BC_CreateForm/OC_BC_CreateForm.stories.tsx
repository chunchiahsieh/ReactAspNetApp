import type {Meta, StoryObj} from '@storybook/react';

import {OC_BC_CreateForm} from './OC_BC_CreateForm';

const meta: Meta<typeof OC_BC_CreateForm> = {
  component: OC_BC_CreateForm,
};

export default meta;

type Story = StoryObj<typeof OC_BC_CreateForm>;

export const Basic: Story = {args: {}};
