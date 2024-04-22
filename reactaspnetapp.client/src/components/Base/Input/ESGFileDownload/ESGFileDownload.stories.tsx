import type {Meta, StoryObj} from '@storybook/react';

import {ESGFileDownload} from './ESGFileDownload';

const meta: Meta<typeof ESGFileDownload> = {
  component: ESGFileDownload,
};

export default meta;

type Story = StoryObj<typeof ESGFileDownload>;

export const Basic: Story = {args: {}};
