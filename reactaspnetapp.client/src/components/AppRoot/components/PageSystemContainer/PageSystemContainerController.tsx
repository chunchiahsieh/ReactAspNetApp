import { CPNTree as SupplierAuthorize } from "./components/SupplierAuthorize/SupplierAuthorizeController";
import { CPNTree as RoleAuthorize } from "./components/RoleAuthorize/RoleAuthorizeController";
import { CPNTree as UserManagement } from "./components/UserManagement/UserManagementController";
import { CPNTree as PersonalSetting } from "./components/PersonalSetting/PersonalSettingController";
import { CPNTree as ExcelUpload } from "./components/ExcelUpload/ExcelUploadController";
import { ESGIconSetting } from "components";

export const CPNTree = {
  SupplierAuthorize,
  RoleAuthorize,
  UserManagement,
  PersonalSetting,
  ExcelUpload,
  // 以下是為了多國語系所設定的物件
  locale: {
    en: "System Management",
    zh: "系統管理",
  },
  name: "PageSystemContainer",
  icon: ESGIconSetting,
  iconPathColor: "#2C8646",
};
