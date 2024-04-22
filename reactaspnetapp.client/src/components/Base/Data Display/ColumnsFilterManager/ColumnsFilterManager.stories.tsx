import type {Meta, StoryObj} from '@storybook/react';

import {Column4Filter, ColumnsFilterManager} from './ColumnsFilterManager';

const meta: Meta<typeof ColumnsFilterManager> = {
  component: ColumnsFilterManager,
};

export default meta;

type Story = StoryObj<typeof ColumnsFilterManager>;

const columns: Column4Filter[] = [
  {
    name: "name",
    list: ["name1", "name2", "name3"],
    selected: ["name1"],
    ftype: "equal"
  },
  {
    name: "age",
    list: ["age1", "age2", "age3"],
    selected: ["age1"],
    ftype: "equal"
  },
];


export const Basic: Story = {args: { columns}};

