import type { Meta, StoryObj } from "@storybook/react";

import { List } from "./List";
import dayjs from "dayjs";
import { fn } from "@storybook/test";

const meta: Meta<typeof List> = {
  component: List,
};

export default meta;

type Story = StoryObj<typeof List>;

export const Basic: Story = {
  args: {
    isPending: false,
    error: null,
    data: [
      {
        orgGroupName: "Organization group Name",
        vendorCode: "Internal Vendor Code",
        website: "Website URL",
        businessRegistrationNo: "Business Registration Number",
        stockIdentificationNo: "Stock Identification Number",
        addressComposite: "Address 1_Composite", //Added
        countryId: 1,
        zipPostalCode: "Address 1: ZIP/Postal Code",
        cityId: 2,
        street: "Address1_Line1",
        latitude: 10.2,
        longitude: 100.5,
        remark: "Remarks",
        account: "Contact Account ",
        firstName: "First Name",
        lastName: "Last Name",
        firstNameEn: "English First Name",
        lastNameEn: "English Last Name",
        contactRemark: "Contact Remarks", //Added
        bdcPermission: true, //Added
        oghgPermission: true, //Added
        pcfPermission: true, //Added
        spmPermission: true, //Added
        createById: 1,
        createOn: dayjs().toString(),
        modifiedById: 1,
        modifiedOn: dayjs().toString(),
      },
      {
        orgGroupName: "Organization group Name",
        vendorCode: "Internal Vendor Code",
        website: "Website URL",
        businessRegistrationNo: "Business Registration Number",
        stockIdentificationNo: "Stock Identification Number",
        addressComposite: "Address 1_Composite", //Added
        countryId: 1,
        zipPostalCode: "Address 1: ZIP/Postal Code",
        cityId: 2,
        street: "Address1_Line1",
        latitude: 10.2,
        longitude: 100.5,
        remark: "Remarks",
        account: "Contact Account ",
        firstName: "First Name",
        lastName: "Last Name",
        firstNameEn: "English First Name",
        lastNameEn: "English Last Name",
        contactRemark: "Contact Remarks", //Added
        bdcPermission: true, //Added
        oghgPermission: true, //Added
        pcfPermission: true, //Added
        spmPermission: true, //Added
        createById: 1,
        createOn: dayjs().toString(),
        modifiedById: 1,
        modifiedOn: dayjs().toString(),
      },
    ],
    onRowSelectionChange: fn((d)=>console.log(d)),
  },
};
