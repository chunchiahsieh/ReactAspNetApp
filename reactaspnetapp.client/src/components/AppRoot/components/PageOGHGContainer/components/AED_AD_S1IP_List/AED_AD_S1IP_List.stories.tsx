import type {Meta, StoryObj} from '@storybook/react';

import {AED_AD_S1IP_List} from './AED_AD_S1IP_List';
import dayjs from "dayjs";
import { fn } from "@storybook/test";

const meta: Meta<typeof AED_AD_S1IP_List> = {
  component: AED_AD_S1IP_List,
};

export default meta;

type Story = StoryObj<typeof AED_AD_S1IP_List>;


export const Basic: Story = {
  args: {
    isPending: false,
    error: null,
    data: [
      {
        Organizational_unit_ID: "",
        Facility_ID: "",
        Name: "",
        Description: "",
        Industrial_process_type_ID: "",
        Industrial_process_type_Remarks: "",
        Industrial_process_equipment_type: "",
        Industrial_process_equipment_type_Remarks: "",
        Industrial_process_material_type: "",
        Industrial_process_material_type_Remarks: "",
        Methodology_type: "",
        Quantity: "",
        Quantity_Unit: "",
        Consumption_start_date: "",
        Consumption_end_date: "",
        Transaction_date: "",
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
        Description: "",
        Industrial_process_type_ID: "",
        Industrial_process_type_Remarks: "",
        Industrial_process_equipment_type: "",
        Industrial_process_equipment_type_Remarks: "",
        Industrial_process_material_type: "",
        Industrial_process_material_type_Remarks: "",
        Methodology_type: "",
        Quantity: "",
        Quantity_Unit: "",
        Consumption_start_date: "",
        Consumption_end_date: "",
        Transaction_date: "",
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