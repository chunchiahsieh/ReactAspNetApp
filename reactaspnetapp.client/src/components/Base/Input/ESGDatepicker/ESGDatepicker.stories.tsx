import type {Meta, StoryObj} from '@storybook/react';

import {ESGDatepicker} from './ESGDatepicker';

const meta: Meta<typeof ESGDatepicker> = {
  component: ESGDatepicker,
};

export default meta;

type Story = StoryObj<typeof ESGDatepicker>;

export const Basic: Story = {args: {
  date: 'Apr 05, 2024',
  format: 'MMM DD, YYYY',
  onDateChange: (date) => {console.log(date);},
  sx: {height: '37px', width: '100%'},
  disabled: true,
  isView: false,
}};