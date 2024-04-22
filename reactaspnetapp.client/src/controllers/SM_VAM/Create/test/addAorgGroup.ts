import { useMutation } from "@tanstack/react-query";
import {SmOrgGroupCreateDTO} from 'API_Generated/data-contracts';
import _ from "lodash";
import { delay } from "utils/delay";

export function useMutateCreateTest() {
  return useMutation({
    mutationKey: ["SmOrgGroup", "create"],
    mutationFn: async function ( row :SmOrgGroupCreateDTO) {
      await delay(2000);
      return row;
    },
  });
}
