import { useMutation } from "@tanstack/react-query";
import { API } from "controllers/API";
import _ from "lodash";

export function useMutateDelete() {
  return useMutation({
    mutationKey: ["SmOrgGroup", "delete"],
    mutationFn: async function (ogIds: number[]) {
      const response = await API.smOrgGroupDelete(ogIds);
      if(!!response.error){
        throw new Error(response.error);
      }
      return response.data;
    },
  });
}
