import type {Meta, StoryObj} from '@storybook/react';

import {RoleAuthorize} from './RoleAuthorize';

const meta: Meta<typeof RoleAuthorize> = {
  component: RoleAuthorize,
};

export default meta;

type Story = StoryObj<typeof RoleAuthorize>;

export const Basic: Story = {args: {}};
