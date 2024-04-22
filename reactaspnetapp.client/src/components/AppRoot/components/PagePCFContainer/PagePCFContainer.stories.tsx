import type {Meta, StoryObj} from '@storybook/react';

import {PagePCFContainer} from './PagePCFContainer';

const meta: Meta<typeof PagePCFContainer> = {
  component: PagePCFContainer,
};

export default meta;

type Story = StoryObj<typeof PagePCFContainer>;

export const Basic: Story = {args: {}};
