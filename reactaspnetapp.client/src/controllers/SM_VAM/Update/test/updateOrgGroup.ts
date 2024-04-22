import { useMutation } from "@tanstack/react-query";
import {SmOrgGroupUpdateDTO} from 'API_Generated/data-contracts';
import _ from "lodash";
import { delay } from "utils/delay";

export function useMutateUpdateTest() {
  return useMutation({
    mutationKey: ["SmOrgGroup", "update"],
    mutationFn: async function ( row :SmOrgGroupUpdateDTO) {
      await delay(2000);
      return row;
    },
  });
}
