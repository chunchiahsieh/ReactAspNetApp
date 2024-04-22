import type {Meta, StoryObj} from '@storybook/react';

import {AED_AD_S1SC_PM_ViewForm} from './AED_AD_S1SC_PM_ViewForm';

const meta: Meta<typeof AED_AD_S1SC_PM_ViewForm> = {
  component: AED_AD_S1SC_PM_ViewForm,
};

export default meta;

type Story = StoryObj<typeof AED_AD_S1SC_PM_ViewForm>;

export const Basic: Story = {args: {}};
