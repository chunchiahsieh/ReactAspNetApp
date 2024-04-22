import type {Meta, StoryObj} from '@storybook/react';

import {PageSystemContainer} from './PageSystemContainer';

const meta: Meta<typeof PageSystemContainer> = {
  component: PageSystemContainer,
};

export default meta;

type Story = StoryObj<typeof PageSystemContainer>;

export const Basic: Story = {args: {}};
