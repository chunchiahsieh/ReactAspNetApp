import type {Meta, StoryObj} from '@storybook/react';

import {AED_AD_S1MC_List} from './AED_AD_S1MC_List';
import dayjs from "dayjs";
import { fn } from "@storybook/test";

const meta: Meta<typeof AED_AD_S1MC_List> = {
  component: AED_AD_S1MC_List,
};

export default meta;

type Story = StoryObj<typeof AED_AD_S1MC_List>;


export const Basic: Story = {
  args: {
    isPending: false,
    error: null,
    data: [
      {
        Organizational_unit_ID: "",
        Facility_ID: "",
        Name: "",
        Utilization: "",
        Utilization_Remarks: "",
        Description: "",
        Fuel_type: "",
        Fuel_type_Remarks: "",
        Methodology_type: "",
        Quantity: "",
        Quantity_Unit: "",
        Consumption_start_date: dayjs().toString(),
        Consumption_end_date: dayjs().toString(),
        Transaction_date: dayjs().toString(),
        Evidence: "",
        Evidence_URL: "",
        Activity_data_quality_type: "",
        Activity_data_confidence_type: "", 

        Created_By: 1,
        Created_On: dayjs().toString(),
        Modified_By: 1,
        Modified_On: dayjs().toString(),
      },
      {
        Organizational_unit_ID: "",
        Facility_ID: "",
        Name: "",
        Utilization: "",
        Utilization_Remarks: "",
        Description: "",
        Fuel_type: "",
        Fuel_type_Remarks: "",
        Methodology_type: "",
        Quantity: "",
        Quantity_Unit: "",
        Consumption_start_date: dayjs().toString(),
        Consumption_end_date: dayjs().toString(),
        Transaction_date: dayjs().toString(),
        Evidence: "",
        Evidence_URL: "",
        Activity_data_quality_type: "",
        Activity_data_confidence_type: "",    
        
        Created_By: 1,
        Created_On: dayjs().toString(),
        Modified_By: 1,
        Modified_On: dayjs().toString(),
      },
    ],
    onRowSelectionChange: fn((d)=>console.log(d)),
  },
};
