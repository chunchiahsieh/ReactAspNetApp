import type {Meta, StoryObj} from '@storybook/react';

import {AED_AD_S1SC_EM_CreateForm} from './AED_AD_S1SC_EM_CreateForm';

const meta: Meta<typeof AED_AD_S1SC_EM_CreateForm> = {
  component: AED_AD_S1SC_EM_CreateForm,
};

export default meta;

type Story = StoryObj<typeof AED_AD_S1SC_EM_CreateForm>;

export const Basic: Story = {args: {}};
