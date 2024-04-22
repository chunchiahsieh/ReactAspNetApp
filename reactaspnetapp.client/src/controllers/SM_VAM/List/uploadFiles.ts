import { useMutation } from "@tanstack/react-query";
import { API } from "controllers/API";
import dayjs from "dayjs";

export function useUploadAFile() {
  return useMutation({
    mutationKey: ["SM_VAM", "uploadFiles"],
    mutationFn: async (acceptedFile: File) => {
      const result = await API.smOrgGroupUploadCreate({
        File: acceptedFile,
        HourOffset: dayjs().utcOffset() / 60,
      });
      if(result.error) throw new Error(result.error.message);
      return result.data;
    },
  });
}

