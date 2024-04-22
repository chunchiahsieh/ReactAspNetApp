import type {Meta, StoryObj} from '@storybook/react';

import {PageMainContainer} from './PageMainContainer';

const meta: Meta<typeof PageMainContainer> = {
  component: PageMainContainer,
};

export default meta;

type Story = StoryObj<typeof PageMainContainer>;

export const Basic: Story = {args: {}};
