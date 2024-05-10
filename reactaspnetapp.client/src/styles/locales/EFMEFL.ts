import { recursiveChangeValueToKey } from "utils/recursiveChangeValueToKey";
const localeEFMEFL = {
  vam: {
    emission_factor_library_name:"Factor Library Name",
    Description:"Description",
    library_type:"Library type",
    doc_ref:"Documentation reference",
    origin_correlation_id:"Origin correlation ID",
    year:"Year",
    version:"Version",
   
    createById: "Created By ",
    createOn: "Created On",
    modifiedById: "Modified By",
    modifiedOn: "Modified On",

    listTitle:"Emission Factor Library",   
    createFormTitle:"Create Emission Factor Library",    
    editFormTitle:"Edit Emission Factor Library",
    vieFormTitle:"View Emission Factor Library",
  },
};
recursiveChangeValueToKey(localeEFMEFL,"EFMEFL:");
export default localeEFMEFL;
