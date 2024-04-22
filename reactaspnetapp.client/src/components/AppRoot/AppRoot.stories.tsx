import type {Meta, StoryObj} from '@storybook/react';

import {AppRoot} from './AppRoot';

const meta: Meta<typeof AppRoot> = {
  component: AppRoot,
};

export default meta;

type Story = StoryObj<typeof AppRoot>;

export const Basic: Story = {args: {}};
