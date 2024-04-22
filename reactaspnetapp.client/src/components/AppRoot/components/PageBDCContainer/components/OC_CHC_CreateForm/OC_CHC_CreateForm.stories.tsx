import type {Meta, StoryObj} from '@storybook/react';

import {OC_CHC_CreateForm} from './OC_CHC_CreateForm';

const meta: Meta<typeof OC_CHC_CreateForm> = {
  component: OC_CHC_CreateForm,
};

export default meta;

type Story = StoryObj<typeof OC_CHC_CreateForm>;

export const Basic: Story = {args: {}};
