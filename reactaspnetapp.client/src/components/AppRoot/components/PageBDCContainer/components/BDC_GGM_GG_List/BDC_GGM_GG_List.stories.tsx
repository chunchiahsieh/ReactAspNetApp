import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';

import {BDC_GGM_GG_List} from './BDC_GGM_GG_List';

const meta: Meta<typeof BDC_GGM_GG_List> = {
  component: BDC_GGM_GG_List,
};

export default meta;

type Story = StoryObj<typeof BDC_GGM_GG_List>;

export const Basic: Story = {args: {}};
