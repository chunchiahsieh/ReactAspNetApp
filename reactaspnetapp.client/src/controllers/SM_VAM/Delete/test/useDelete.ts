import { useMutation } from "@tanstack/react-query";
import _ from "lodash";
import { delay } from "utils/delay";

export function useMutateDeleteTest() {
  return useMutation({
    mutationKey: ["SmOrgGroup", "delete"],
    mutationFn: async function (ogIds: number[]) {
      await delay(2000);
      return ogIds;
    },
  });
}
