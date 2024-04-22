import type {Meta, StoryObj} from '@storybook/react';

import {FetchingData} from './FetchingData';

const meta: Meta<typeof FetchingData> = {
  component: FetchingData,
};

export default meta;

type Story = StoryObj<typeof FetchingData>;

export const Basic: Story = {args: {}};
