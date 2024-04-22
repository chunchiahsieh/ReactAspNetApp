import type {Meta, StoryObj} from '@storybook/react';

import {AED_AD_S1IP_EM_EditForm} from './AED_AD_S1IP_EM_EditForm';

const meta: Meta<typeof AED_AD_S1IP_EM_EditForm> = {
  component: AED_AD_S1IP_EM_EditForm,
};

export default meta;

type Story = StoryObj<typeof AED_AD_S1IP_EM_EditForm>;

export const Basic: Story = {args: {}};
