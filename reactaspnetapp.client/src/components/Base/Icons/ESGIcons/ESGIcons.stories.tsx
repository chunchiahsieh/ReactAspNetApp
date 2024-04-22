import type {Meta, StoryObj} from '@storybook/react';

import {ESGIcons} from './ESGIcons';

const meta: Meta<typeof ESGIcons> = {
  component: ESGIcons,
};

export default meta;

type Story = StoryObj<typeof ESGIcons>;

export const Basic: Story = {args: {pathColor: 'red', width: 100, height: 100}};
