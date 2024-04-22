import type {Meta, StoryObj} from '@storybook/react';

import {UserManagement} from './UserManagement';

const meta: Meta<typeof UserManagement> = {
  component: UserManagement,
};

export default meta;

type Story = StoryObj<typeof UserManagement>;

export const Basic: Story = {args: {}};
