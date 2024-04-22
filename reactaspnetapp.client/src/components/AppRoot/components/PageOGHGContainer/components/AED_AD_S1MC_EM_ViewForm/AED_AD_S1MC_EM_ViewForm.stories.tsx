import type {Meta, StoryObj} from '@storybook/react';

import {AED_AD_S1MC_EM_ViewForm} from './AED_AD_S1MC_EM_ViewForm';

const meta: Meta<typeof AED_AD_S1MC_EM_ViewForm> = {
  component: AED_AD_S1MC_EM_ViewForm,
};

export default meta;

type Story = StoryObj<typeof AED_AD_S1MC_EM_ViewForm>;

export const Basic: Story = {args: {}};
