import type {Meta, StoryObj} from '@storybook/react';
import {EFM_EFL_List} from './EFM_EFL_List';
import dayjs from "dayjs";
import { fn } from "@storybook/test";

const meta: Meta<typeof EFM_EFL_List> = {
  component: EFM_EFL_List,
};

export default meta;

type Story = StoryObj<typeof EFM_EFL_List>;


export const Basic: Story = {
  args: {
    isPending: false,
    error: null,
    data: [
      {
        emission_factor_library_name: "",
        Description: "",
        library_type: "",
        doc_ref: "",
        origin_correlation_id: "",
        year: 2024,
        version: 1,        

        Created_By: 1,
        Created_On: dayjs().toString(),
        Modified_By: 1,
        Modified_On: dayjs().toString(),
      },
      {
        emission_factor_library_name: "",
        Description: "",
        library_type: "",
        doc_ref: "",
        origin_correlation_id: "",
        year: 2024,
        version: 1,
        
        Created_By: 1,
        Created_On: dayjs().toString(),
        Modified_By: 1,
        Modified_On: dayjs().toString(),
      },
    ],
    onRowSelectionChange: fn((d)=>console.log(d)),
  },
};