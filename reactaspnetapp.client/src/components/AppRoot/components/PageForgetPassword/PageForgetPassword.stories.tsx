import type {Meta, StoryObj} from '@storybook/react';

import {PageForgetPassword} from './PageForgetPassword';

const meta: Meta<typeof PageForgetPassword> = {
  component: PageForgetPassword,
};

export default meta;

type Story = StoryObj<typeof PageForgetPassword>;

export const Basic: Story = {args: {}};
