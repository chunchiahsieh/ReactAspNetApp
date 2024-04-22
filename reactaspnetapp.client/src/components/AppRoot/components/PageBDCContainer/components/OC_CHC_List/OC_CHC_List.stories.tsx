import type {Meta, StoryObj} from '@storybook/react';

import {OC_CHC_List} from './OC_CHC_List';
import dayjs from "dayjs";
import { fn } from "@storybook/test";


const meta: Meta<typeof OC_CHC_List> = {
  component: OC_CHC_List,
};

export default meta;

type Story = StoryObj<typeof OC_CHC_List>;


export const Basic: Story = {
  args: {
    isPending: false,
    error: null,
    data: [
      {
        org_unit_name: "",
        Description: "",
        org_type: "",    
        parent_org_unit_id:"",
        website:"",
        business_registration_no:"",
        stock_identification_no:"",
        Address_1_Composite:"",
        country_id:"",
        zip_postal_code:"",
        city_id:"",
        street:"",
        latitude:"",
        longitude:"",
        remark:"",
        facility_name:"",
        facility_type:"",

        Created_By: 1,
        Created_On: dayjs().toString(),
        Modified_By: 1,
        Modified_On: dayjs().toString(),
      },
      {
        org_unit_name: "",
        Description: "",
        org_type: "",    
        parent_org_unit_id:"",
        website:"",
        business_registration_no:"",
        stock_identification_no:"",
        Address_1_Composite:"",
        country_id:"",
        zip_postal_code:"",
        city_id:"",
        street:"",
        latitude:"",
        longitude:"",
        remark:"",
        facility_name:"",
        facility_type:"",
        
        Created_By: 1,
        Created_On: dayjs().toString(),
        Modified_By: 1,
        Modified_On: dayjs().toString(),
      },
    ],
    onRowSelectionChange: fn((d)=>console.log(d)),
  },
};
