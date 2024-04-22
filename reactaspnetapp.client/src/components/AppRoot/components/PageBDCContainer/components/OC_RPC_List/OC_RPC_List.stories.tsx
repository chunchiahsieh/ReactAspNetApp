import type {Meta, StoryObj} from '@storybook/react';

import {OC_RPC_List} from './OC_RPC_List';

import dayjs from "dayjs";
import { fn } from "@storybook/test";

const meta: Meta<typeof OC_RPC_List> = {
  component: OC_RPC_List,
};

export default meta;

type Story = StoryObj<typeof OC_RPC_List>;

export const Basic: Story = {
  args: {
    isPending: false,
    error: null,
    data: [
      {
        reporting_year_id: "",
        reporting_period_name: "",
        start_date: dayjs().toString(),
        end_date: dayjs().toString(),
        period_status: "",

        Created_By: 1,
        Created_On: dayjs().toString(),
        Modified_By: 1,
        Modified_On: dayjs().toString(),
      },
      {
        reporting_year_id: "",
        reporting_period_name: "",
        start_date: dayjs().toString(),
        end_date: dayjs().toString(),
        period_status: "",
        
        Created_By: 1,
        Created_On: dayjs().toString(),
        Modified_By: 1,
        Modified_On: dayjs().toString(),
      },
    ],
    onRowSelectionChange: fn((d)=>console.log(d)),
  },
};
