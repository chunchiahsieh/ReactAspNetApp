import { useMutation } from "@tanstack/react-query";
import { SmOrgGroupCreateDTO } from "API_Generated/data-contracts";
import { API } from "controllers/API";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import _ from "lodash";
dayjs.extend(utc);

export function useMutateCreate() {
  return useMutation({
    mutationKey: ["SmOrgGroup", "create"],
    mutationFn: async function (row: SmOrgGroupCreateDTO) {
      row.createOn = dayjs.utc().toISOString();
      // #region TODO TODO TODO 千萬記得改此值，這是登入者的ID，到時要串接到登入的 User 的資料與 countryID & CityID
      row.createById = 1;
      row.user!.email = "mytest@test.com";
      row.user!.timeZone = `${dayjs().utcOffset() / 60}`;
      // #endregion TODO TODO TODO 千萬記得改此值，這是登入者的ID，到時要串接到登入的 User 的資料 countryID & CityID
      try {
        console.log("row", row); // TODO
        const response = await API.smOrgGroupCreate(row);
        if (response.error) throw new Error(response.error);
        return response.data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  });
}
