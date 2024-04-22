import type { Meta, StoryObj } from '@storybook/react';

import { TestAPI } from './TestAPI';

const meta = {
  title: 'Example/TestAPI',
  component: TestAPI,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TestAPI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};
