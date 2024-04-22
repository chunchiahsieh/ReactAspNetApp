import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';

import {ESGFileUpload} from './ESGFileUpload';

const meta: Meta<typeof ESGFileUpload> = {
  component: ESGFileUpload,
};

export default meta;

type Story = StoryObj<typeof ESGFileUpload>;

export const Basic: Story = {args: {
  txt: 'confirm Upload',
  disabled: false,
  key: 'basic',
  onFileUpload: fn(), //(e)=>{console.log('onFileUpload:', e.target.files);},
  multiple: false,
}};
