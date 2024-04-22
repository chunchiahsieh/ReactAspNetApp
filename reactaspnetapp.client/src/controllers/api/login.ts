import { AppStates } from "controllers/AppController";
import { delay } from "utils/delay";

interface LoginResponse {
  success: boolean;
  company?: string;
  adminName?: string;
  adminEmail?: string;
}

// TODO TODO TODO 未來這裡會改成呼叫 API 的方式，這裡只是模擬呼叫 API 的方式
export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  await delay(500);
  if (username === "admin" && password === "admin") {
    AppStates.setUser({ Name: "admin", Email: "admin@test.com" });
    return {
      success: true,
    };
  } else if (username === "esg") {
    return {
      success: false,
      company: "ESG測試公司",
      adminName: "ESG測試管理者",
      adminEmail: "esg@test.com",
    };
  } else {
    return {
      success: false,
    };
  }
};
