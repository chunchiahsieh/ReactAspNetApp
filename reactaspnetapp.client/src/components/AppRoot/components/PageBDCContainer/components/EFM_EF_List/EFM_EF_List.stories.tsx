import type {Meta, StoryObj} from '@storybook/react';
import {EFM_EF_List} from './EFM_EF_List';
import dayjs from "dayjs";
import { fn } from "@storybook/test";

const meta: Meta<typeof EFM_EF_List> = {
  component: EFM_EF_List,
};

export default meta;

type Story = StoryObj<typeof EFM_EF_List>;

//export const Basic: Story = {args: {}};

export const Basic: Story = {
  args: {
    isPending: false,
    error: null,
    data: [
      {
        Emission_factor_library_ID: "",
        Description: "",
        Emission_factor_source: "",
        Emission_factor_source_Remarks: "",
        Emission_factor_category: "",
        Country: "",
        Unit_ID: "",
        
        Documentation_reference: "",
        Origin_correlation_ID: "",
        Year: "",
        Version: "",
        Remarks: "",

        CO2: "",
        CO2_Unit_ID: "",
        CH4: "",
        CH4_Unit_ID: "",
        N2O: "",
        N2O_Unit_ID: "",

        HFCs: "",
        HFCs_Unit_ID: "",
        PFCs: "",
        PFCs_Unit_ID: "",
        SF6: "",
        SF6_Unit_ID: "",

        NF3: "",
        NF3_Unit_ID: "",
        Other_GHGs: "",
        GHGs_Unit_ID: "",
        CO2E: "",
        CO2E_Unit_ID: "",
        Biogenic_CO2_factor: "",
        Biogenic_CO2_factor_Unit_ID: "",

        Created_By: 1,
        Created_On: dayjs().toString(),
        Modified_By: 1,
        Modified_On: dayjs().toString(),
      },
      {
        Emission_factor_library_ID: "",
        Description: "",
        Emission_factor_source: "",
        Emission_factor_source_Remarks: "",
        Emission_factor_category: "",
        Country: "",
        Unit_ID: "",
        
        Documentation_reference: "",
        Origin_correlation_ID: "",
        Year: "",
        Version: "",
        Remarks: "",

        CO2: "",
        CO2_Unit_ID: "",
        CH4: "",
        CH4_Unit_ID: "",
        N2O: "",
        N2O_Unit_ID: "",

        HFCs: "",
        HFCs_Unit_ID: "",
        PFCs: "",
        PFCs_Unit_ID: "",
        SF6: "",
        SF6_Unit_ID: "",

        NF3: "",
        NF3_Unit_ID: "",
        Other_GHGs: "",
        GHGs_Unit_ID: "",
        CO2E: "",
        CO2E_Unit_ID: "",
        Biogenic_CO2_factor: "",
        Biogenic_CO2_factor_Unit_ID: "",
        
        Created_By: 1,
        Created_On: dayjs().toString(),
        Modified_By: 1,
        Modified_On: dayjs().toString(),
      },
    ],
    onRowSelectionChange: fn((d)=>console.log(d)),
  },
};
