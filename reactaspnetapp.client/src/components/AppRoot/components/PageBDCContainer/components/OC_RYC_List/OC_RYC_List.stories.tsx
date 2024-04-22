import type {Meta, StoryObj} from '@storybook/react';

import {OC_RYC_List} from './OC_RYC_List';


import dayjs from "dayjs";
import { fn } from "@storybook/test";

const meta: Meta<typeof OC_RYC_List> = {
  component: OC_RYC_List,
};

export default meta;

type Story = StoryObj<typeof OC_RYC_List>;

export const Basic: Story = {
  args: {
    isPending: false,
    error: null,
    data: [
      {
        org_unit_name: "",               
        start_date: dayjs().toString(),
        end_date: dayjs().toString(),

        Created_By: 1,
        Created_On: dayjs().toString(),
        Modified_By: 1,
        Modified_On: dayjs().toString(),
      },
      {
        org_unit_name: "",               
        start_date: dayjs().toString(),
        end_date: dayjs().toString(),
        
        Created_By: 1,
        Created_On: dayjs().toString(),
        Modified_By: 1,
        Modified_On: dayjs().toString(),
      },
    ],
    onRowSelectionChange: fn((d)=>console.log(d)),
  },
};
