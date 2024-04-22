import type {Meta, StoryObj} from '@storybook/react';

import {OC_CHC_EditForm} from './OC_CHC_EditForm';

const meta: Meta<typeof OC_CHC_EditForm> = {
  component: OC_CHC_EditForm,
};

export default meta;

type Story = StoryObj<typeof OC_CHC_EditForm>;

export const Basic: Story = {args: {}};
