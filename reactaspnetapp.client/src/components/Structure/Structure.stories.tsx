import type { Meta, StoryObj } from "@storybook/react";

import { Structure } from "./Structure";
import { TreebeardData } from "react-treebeard";

const meta: Meta<typeof Structure> = {
  component: Structure,
};

export default meta;

type Story = StoryObj<typeof Structure>;

//此為整個應用程式的結構，僅內部使用，不對外開放
const structure: TreebeardData = (() => {
  function aTableWithNavBar(name: string, description: string): TreebeardData {
    return {
      name: name,
      description: description,
      children: [
        {
          name: "NavBar",
          description: description + "的工具列",
        },
        { name: "Setting", description: description + "設定顯示欄位" },
        { name: "Table", description: description + "顯示資料" },
        {
          name: "Pagination",
          description: description + "分頁與選擇筆數相關",
        },
      ],
    };
  }

  const appMain: TreebeardData = {
    name: "App_Main",
    description: "應用程式的主要結構",
    children: [
      {
        name: "AppBar",
        description: "應用程式的主要工具列",
        children: [
          { name: "I18n", description: "多國語設定" },
          { name: "Email", description: "電子郵件" },
          { name: "Logout", description: "登出" },
        ],
      },
      {
        name: "Content",
        description: "應用程式容器",
        children: [
          {
            name: "PageMain",
            description: "應用程式的主要頁面，登入後顯示",
            children: [
              {
                name: "SideBar",
                description: "主頁面的側邊欄",
                children: [
                  {
                    name: "System",
                    description: "系統管理",
                  },
                  {
                    name: "OGHG",
                    description: "組織型溫盤管理",
                  },
                  { name: "PCF", description: "產品碳排放管理" },
                  {
                    name: "SPM",
                    description: "永續採購管理",
                  },
                ],
              },
              {
                name: "Content",
                description: "主頁面",
                children: [
                  {
                    name: "System",
                    description: "系統管理",
                  },
                  {
                    name: "OGHG",
                    description: "組織型溫盤管理",
                  },
                  { name: "PCF", description: "產品碳排放管理" },
                  {
                    name: "SPM",
                    description: "永續採購管理",
                  },
                ],
              },
            ],
          },
          {
            name: "PageLogin",
            description: "應用程式的登入頁面",
            children: [
              {
                name: "Content",
                description: "主頁面",
                children: [
                  {
                    name: "Account",
                    description: "帳號",
                  },
                  {
                    name: "Password",
                    description: "密碼",
                  },
                  { name: "Login", description: "登入按鈕" },
                  {
                    name: "ForgetPassword",
                    description: "忘記密碼按鈕",
                  },
                ],
              },
            ],
          },
          {
            name: "PageForgetPassword",
            description: "應用程式的忘記密碼的頁面",
            children: [
              {
                name: "Content",
                description: "主頁面",
                children: [
                  {
                    name: "back",
                    description: "回到登入頁面",
                  },
                ],
              },
            ],
          },
          {
            name: "PageSystemManagement",
            description: "應用程式的系統管理頁面",
            children: [
              {
                name: "SideBar",
                description: "主頁面的側邊欄",
                children: [
                  {
                    name: "SupplierAuth",
                    description: "供應商使用權限管理",
                  },
                  {
                    name: "RoleAuth",
                    description: "角色權限管理",
                  },
                  { name: "User", description: "使用者管理" },
                  {
                    name: "PersonalSetting",
                    description: "個人化設定",
                  },
                  {
                    name: "ExcelUpload",
                    description: "Excel上傳管理",
                    children: [
                      {
                        name: "Record",
                        description: "Excel上傳紀錄",
                      },
                      {
                        name: "BatchProcess",
                        description: "批次處理",
                      },
                    ],
                  },
                ],
              },
              {
                name: "Content",
                description: "系統管理的主頁面",
                children: [
                  {
                    name: "SupplierAuthPage",
                    description: "供應商使用權限管理主頁面",
                    children: [
                      aTableWithNavBar(
                        "SupplierAuthTable",
                        "供應商使用權限管理的表格"
                      ),
                    ],
                  },
                  {
                    name: "RoleAuth",
                    description: "角色權限管理",
                  },
                  { name: "User", description: "使用者管理" },
                  {
                    name: "PersonalSetting",
                    description: "個人化設定",
                  },
                  {
                    name: "ExcelUpload",
                    description: "Excel上傳管理",
                  },
                ],
              },
            ],
          },
          {
            name: "PageOGHGManagement",
            description: "應用程式的組織型溫盤管理頁面",
            children: [
              {
                name: "SideBar",
                description: "主頁面的側邊欄",
                children: [
                  {
                    name: "BasicData",
                    description: "基本資料設定",
                    children: [
                      {
                        name: "Organization",
                        description: "碳盤查組織設定",
                      },
                      {
                        name: "MainFileManagement",
                        description: "碳排放類別主檔維護",
                      },
                      {
                        name: "GHGManagement",
                        description: "溫室氣體管理",
                      },
                      {
                        name: "EmissionFactor",
                        description: "排放因子管理",
                      },
                      {
                        name: "Unit",
                        description: "單位管理",
                      },
                      {
                        name: "Distance",
                        description: "距離維護",
                      },
                    ],
                  },
                  {
                    name: "Activity",
                    description: "活動及排放量資料",
                    children: [
                      {
                        name: "ActivityData",
                        description: "活動資料",
                      },
                      {
                        name: "EmissionData",
                        description: "排放量資料",
                      },
                    ],
                  },
                  {
                    name: "Analysis",
                    description: "分析及產出",
                    children: [
                      {
                        name: "Dashboard",
                        description: "儀表板",
                      },
                      {
                        name: "ISO14064",
                        description: "ISO14064",
                      },
                      {
                        name: "SBTExport",
                        description: "SBT資料產出",
                      },
                      {
                        name: "TargetSetting",
                        description: "目標設定",
                      },
                    ],
                  },
                ],
              },
              {
                name: "Content",
                description: "組織型溫盤管理的主頁面",
                children: [
                  {
                    name: "BasicData",
                    description: "基本資料設定",
                    children: [
                      {
                        name: "Organization",
                        description: "碳盤查組織設定",
                        children: [
                          {
                            name: "BasicSetting",
                            description: "組織基本設定",
                          },
                          {
                            name: "CompanyAndLevel",
                            description: "公司及階層設定",
                          },
                          aTableWithNavBar("BoundarySetting", "組織盤查邊界"),
                          {
                            name: "ReportYear",
                            description: "報告年度設定",
                          },
                        ],
                      },
                      {
                        name: "MainFileManagement",
                        description: "碳排放類別主檔維護",
                      },
                      {
                        name: "GHGManagement",
                        description: "溫室氣體管理",
                        children: [
                          aTableWithNavBar("GWPManagement", "氣體及GWP值管理"),
                          {
                            name: "ARVersionManagement",
                            description: "AR版本管理",
                          },
                        ],
                      },
                      aTableWithNavBar("EmissionFactor", "排放因子管理"),
                      aTableWithNavBar("Unit", "單位管理"),
                      {
                        name: "Distance",
                        description: "距離維護",
                      },
                    ],
                  },
                  {
                    name: "Activity",
                    description: "活動及排放量資料",
                    children: [
                      {
                        name: "ActivityData",
                        description: "活動資料",
                      },
                      {
                        name: "EmissionData",
                        description: "排放量資料",
                      },
                    ],
                  },
                  {
                    name: "Analysis",
                    description: "分析及產出",
                    children: [
                      {
                        name: "Dashboard",
                        description: "儀表板",
                      },
                      {
                        name: "ISO14064",
                        description: "ISO14064",
                      },
                      {
                        name: "SBTExport",
                        description: "SBT資料產出",
                      },
                      {
                        name: "TargetSetting",
                        description: "目標設定",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "PagePCFManagement",
            description: "產品碳排放管理頁面",
          },
          {
            name: "PageSPMManagement",
            description: "永續採購管理頁面",
          },
        ],
      },
    ],
  };
  return appMain;
})();

//設定所有節點展開
function setToggleOn(idata: TreebeardData) {
  idata.toggled = true;
  idata.name = idata.name + "  :  " + idata.description;
  if (idata.children) {
    idata.children.forEach(setToggleOn);
  } else {
    idata.name = `😊${idata.name}`;
  }
}
setToggleOn(structure);

export const Basic: Story = { args: { data: structure } };
