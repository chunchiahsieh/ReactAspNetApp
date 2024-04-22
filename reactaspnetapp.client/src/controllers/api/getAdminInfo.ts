import { delay } from "utils/delay";

export async function getAdminInfo(companyId: string) {
  await delay(1000);
  if (companyId === "test") {
    return {
      company: "公司1",
      adminName: "管理員1",
      adminEmail: "test@gudeng.com",
    };
  } else {
    return null;
  }
}
