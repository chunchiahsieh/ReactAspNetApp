import type {Meta, StoryObj} from '@storybook/react';

import {PersonalSetting} from './PersonalSetting';

const meta: Meta<typeof PersonalSetting> = {
  component: PersonalSetting,
};

export default meta;

type Story = StoryObj<typeof PersonalSetting>;

export const Basic: Story = {args: {}};
