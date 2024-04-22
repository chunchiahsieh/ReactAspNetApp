import { useQuery } from "@tanstack/react-query";
import { SmOrgGroupReadDTO } from "API_Generated/data-contracts";
import { API } from "controllers/API";
import _ from "lodash";

export function useQuerySmOrgGroupData(test?: {testData: SmOrgGroupReadDTO[]}) {
  return useQuery({
    queryKey: ["SmOrgGroup"],
    queryFn: async function () {
      if (!!test?.testData) return test.testData; // test data

      const rowData = await API.smOrgGroupList();
      if (rowData.error) throw new Error(rowData.error);
      return rowData.data;
    },
  });
}

// export function refreshQuerySmOrgGroupData(queryClient: QueryClient) {
//   return queryClient.invalidateQueries({ queryKey: ["SmOrgGroup"] });
// }
