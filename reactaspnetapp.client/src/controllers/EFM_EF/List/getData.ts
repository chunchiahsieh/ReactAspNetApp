import { useQuery } from "@tanstack/react-query";
import { SmEmissionFactorLibraryReadDTO } from "API_Generated/data-contracts";
import { API } from "controllers/API";
import _ from "lodash";

export function useQueryData(test?: {testData: SmEmissionFactorLibraryReadDTO[]}) {
  return useQuery({
    queryKey: ["SmEmissionFactorLibrary"],
    queryFn: async function () {
      //if (!!test?.testData) return test.testData; // test data

      //const rowData = await API.smOrgGroupList();
      const rowData = await API.smEmissionFactorLibrariesList();
      if (rowData.error) throw new Error(rowData.error);
      return rowData.data;
    },
  });
}

// export function refreshQuerySmOrgGroupData(queryClient: QueryClient) {
//   return queryClient.invalidateQueries({ queryKey: ["SmOrgGroup"] });
// }
