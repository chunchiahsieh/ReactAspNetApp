import { useMutation } from "@tanstack/react-query";
import {SmEmissionFactorLibraryUpdateDTO} from 'API_Generated/data-contracts';
import { API } from "controllers/API";
import _ from "lodash";

interface UpdateArgs {
  org_id: string;
  EmName: string;
  row: SmEmissionFactorLibraryUpdateDTO; // Assuming SmOrgGroupUpdateDTO is defined elsewhere in your code
}

export function useMutateUpdate() {
  async function mutateUpdate(args: UpdateArgs): Promise<any> {
    console.log("args", args);  // TODO
    //const response = await API.smOrgGroupUpdate(args.ogName, args.vCode, args.row);
    const response = await API.smEmissionFactorLibrariesUpdate(args.org_id, args.EmName, args.row);
    if(response.error) throw new Error(response.error);
    return response.data;
  }

  // return useMutation<any, Error, UpdateArgs>(mutateUpdate);
  return useMutation({
    mutationKey: ["SmEmissionFactorLibrary", "update"],
    mutationFn: mutateUpdate,
  });
}
