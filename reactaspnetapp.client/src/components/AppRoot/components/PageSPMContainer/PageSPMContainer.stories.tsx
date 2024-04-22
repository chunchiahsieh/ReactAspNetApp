import type {Meta, StoryObj} from '@storybook/react';

import {PageSPMContainer} from './PageSPMContainer';

const meta: Meta<typeof PageSPMContainer> = {
  component: PageSPMContainer,
};

export default meta;

type Story = StoryObj<typeof PageSPMContainer>;

export const Basic: Story = {args: {}};
