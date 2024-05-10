import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {EFM_EF} from './EFM_EF';

const meta: Meta<typeof EFM_EF> = {
  component: EFM_EF,
};

export default meta;

type Story = StoryObj<typeof EFM_EF>;

export const Basic: Story = {args: {}};
