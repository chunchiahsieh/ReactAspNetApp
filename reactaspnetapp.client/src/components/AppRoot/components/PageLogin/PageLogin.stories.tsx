import type {Meta, StoryObj} from '@storybook/react';

import {PageLogin} from './PageLogin';

const meta: Meta<typeof PageLogin> = {
  component: PageLogin,
};

export default meta;

type Story = StoryObj<typeof PageLogin>;

export const Basic: Story = {args: {}};
