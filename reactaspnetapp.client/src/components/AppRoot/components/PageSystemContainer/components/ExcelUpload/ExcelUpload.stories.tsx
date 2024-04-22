import type {Meta, StoryObj} from '@storybook/react';

import {ExcelUpload} from './ExcelUpload';

const meta: Meta<typeof ExcelUpload> = {
  component: ExcelUpload,
};

export default meta;

type Story = StoryObj<typeof ExcelUpload>;

export const Basic: Story = {args: {}};
