import type {Meta, StoryObj} from '@storybook/react';

import {PageBDCContainer} from './PageBDCContainer';

const meta: Meta<typeof PageBDCContainer> = {
  component: PageBDCContainer,
};

export default meta;

type Story = StoryObj<typeof PageBDCContainer>;

export const Basic: Story = {args: {}};
