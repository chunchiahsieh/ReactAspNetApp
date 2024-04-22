import { useMutation } from "@tanstack/react-query";
import {SmOrgGroupUpdateDTO} from 'API_Generated/data-contracts';
import { API } from "controllers/API";
import _ from "lodash";

interface UpdateArgs {
  ogName: string;
  vCode: string;
  row: SmOrgGroupUpdateDTO; // Assuming SmOrgGroupUpdateDTO is defined elsewhere in your code
}

export function useMutateUpdate() {
  async function mutateUpdate(args: UpdateArgs): Promise<any> {
    console.log("args", args);  // TODO
    const response = await API.smOrgGroupUpdate(args.ogName, args.vCode, args.row);
    if(response.error) throw new Error(response.error);
    return response.data;
  }

  // return useMutation<any, Error, UpdateArgs>(mutateUpdate);
  return useMutation({
    mutationKey: ["SmOrgGroup", "update"],
    mutationFn: mutateUpdate,
  });
}
