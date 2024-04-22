import { recursiveChangeValueToKey } from "utils/recursiveChangeValueToKey";
const localeSM = {
  vam: {
    orgGroupName: "Organization group Name",
    vendorCode: "Internal Vendor Code",
    website: "Website URL",
    businessRegistrationNo: "Business Registration Number",
    stockIdentificationNo: "Stock Identification Number",
    addressComposite: "Address 1_Composite", //Added
    countryName: "Address1_Country",
    zipPostalCode: "Address 1: ZIP/Postal Code",
    cityName: "Address 1_City",
    street: "Address1_Line1",
    latitude: "Address1_LatitudeCode",
    longitude: "Address1_Longitude",
    remark: "Remarks",
    account: "Contact Account ",
    firstName: "First Name",
    lastName: "Last Name",
    firstNameEn: "English First Name",
    lastNameEn: "English Last Name",
    contactRemark: "Contact Remarks", //Added
    bdcPermission: "BDC Permissions", //Added
    oghgPermission: "OGHG Permissions", //Added
    pcfPermission: "PCF Permissions", //Added
    spmPermission: "SPM Permissions", //Added
    createById: "Created By ",
    createOn: "Created On",
    modifiedById: "Modified By",
    modifiedOn: "Modified On",
    listTitle: "Vendor Access Permissions List",
    createFormTitle: "Create Vendor and Permissions",
    vieFormTitle: "View Vendor and Permissions",
    editFormTitle: "Edit Vendor and Permissions",
  },
};

recursiveChangeValueToKey(localeSM,"sm:");
export default localeSM;
