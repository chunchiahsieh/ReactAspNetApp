import type {Meta, StoryObj} from '@storybook/react';

import {CC} from './CC';
import dayjs from "dayjs";
import { fn } from "@storybook/test";

const meta: Meta<typeof CC> = {
  component: CC,
};

export default meta;

type Story = StoryObj<typeof CC>;


export const Basic: Story = {
  args: {
    isPending: false,
    error: null,
    data: [
      {
        emission_factor_library_name: "emission_factor_library_name",
        Description: "Description",
        library_type: "library_type",
        doc_ref: "doc_ref",
        origin_correlation_id: "origin_correlation_id",    
        year: 2024,    
        version: 1,    
        Created_By: 1,  
        Created_On: dayjs().toString(),
        Modified_By: 1,
        Modified_On: dayjs().toString(),
      },
      {
        emission_factor_library_name: "emission_factor_library_name",
        Description: "Description",
        library_type: "library_type",
        doc_ref: "doc_ref",
        origin_correlation_id: "origin_correlation_id",    
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

