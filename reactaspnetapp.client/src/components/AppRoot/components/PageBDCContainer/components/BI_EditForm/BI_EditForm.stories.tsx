import type {Meta, StoryObj} from '@storybook/react';

import {BI_EditForm} from './BI_EditForm';

const meta: Meta<typeof BI_EditForm> = {
  component: BI_EditForm,
};

export default meta;

type Story = StoryObj<typeof BI_EditForm>;

export const Basic: Story = {args: {}};
