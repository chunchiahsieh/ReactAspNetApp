import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {AA} from './AA';

const meta: Meta<typeof AA> = {
  component: AA,
};

export default meta;

type Story = StoryObj<typeof AA>;

export const Basic: Story = {args: {}};
