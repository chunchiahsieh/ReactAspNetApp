import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {EFM_EFL} from './EFM_EFL';

const meta: Meta<typeof EFM_EFL> = {
  component: EFM_EFL,
};

export default meta;

type Story = StoryObj<typeof EFM_EFL>;

export const Basic: Story = {args: {}};