import type {Meta, StoryObj} from '@storybook/react';
import {OC_BC_List} from './OC_BC_List';
import dayjs from "dayjs";
import { fn } from "@storybook/test";

const meta: Meta<typeof OC_BC_List> = {
  component: OC_BC_List,
};

export default meta;

type Story = StoryObj<typeof OC_BC_List>;


export const Basic: Story = {
  args: {
    isPending: false,
    error: null,
    data: [
      {
        org_unit_id: "",
        facility_name: "",
        facility_type: "",    
        Address_1_Composite:"",
        country_id:"",
        zip_postal_code:"",
        city_id:"",
        street:"",
        latitude:"",
        longitude:"",
        remark:"",

        Created_By: 1,
        Created_On: dayjs().toString(),
        Modified_By: 1,
        Modified_On: dayjs().toString(),
      },
      {
        org_unit_id: "",
        facility_name: "",
        facility_type: "",    
        Address_1_Composite:"",
        country_id:"",
        zip_postal_code:"",
        city_id:"",
        street:"",
        latitude:"",
        longitude:"",
        remark:"",
        
        Created_By: 1,
        Created_On: dayjs().toString(),
        Modified_By: 1,
        Modified_On: dayjs().toString(),
      },
    ],
    onRowSelectionChange: fn((d)=>console.log(d)),
  },
};
