import type {Meta, StoryObj} from '@storybook/react';

import {PageOGHGContainer} from './PageOGHGContainer';

const meta: Meta<typeof PageOGHGContainer> = {
  component: PageOGHGContainer,
};

export default meta;

type Story = StoryObj<typeof PageOGHGContainer>;

export const Basic: Story = {args: {}};
