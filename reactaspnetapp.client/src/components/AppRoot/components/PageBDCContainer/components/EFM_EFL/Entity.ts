import { OneColumnWithKeyName } from "components/Base/Input/ESGForm";
import localeSM from "styles/locales/sm";

export interface Entity {
    id: number;
    vendorCode: string;
    website: string;
    businessRegistrationNo: string;
    stockIdentificationNo: string;   
    createById: number; // TODO
    createOn: string; // Check
    modifiedById: number; // TODO
    modifiedOn: string; // Check
  }

  export const initialColumns: OneColumnWithKeyName<Entity>[] = [
    /*1-1orgGroupName*/ {
      name: localeSM.vam.orgGroupName,
      cType: "text",
      value: "",
      required: true,
      keyName: "id",
    },
    /*15-1createById*/ {
      name: localeSM.vam.createById,
      cType: "number",
      value: "",
      fnType: "disable",
      keyName: "createById",
    }, // TODO
    /*15-2createOn*/ {
      name: localeSM.vam.createOn,
      cType: "date",
      value: "",
      fnType: "disable",
      keyName: "createOn",
    }, // Check
    /*16-1modifiedById*/ {
      name: localeSM.vam.modifiedById,
      cType: "number",
      value: "",
      fnType: "disable",
      keyName: "modifiedById",
    }, // TODO
    /*16-2modifiedOn*/ {
      name: localeSM.vam.modifiedOn,
      cType: "date",
      value: "",
      fnType: "disable",
      keyName: "modifiedOn",
    }, // Check
  ];
  