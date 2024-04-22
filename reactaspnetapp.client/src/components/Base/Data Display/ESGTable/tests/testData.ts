import { ESGTableProps } from "..";

export const header: ESGTableProps["header"] = [
    { keyName: "oName", label: "組織名稱", hide: true },
    { keyName: "cNameChinese", label: "聯絡人姓名" },
    { keyName: "cNameEnglish", label: "聯絡人英文名", hide: true },
    { keyName: "cAccount", label: "聯絡人帳號" },
    { keyName: "cDept", label: "聯絡人部門" },
    { keyName: "cJobTitle", label: "聯絡人職稱", hide: true },
    { keyName: "cPhone", label: "聯絡人電話", type: "range" },
    { keyName: "cEmail", label: "聯絡人電子郵件" },
    { keyName: "OGHGAuth", label: "OGHG權限", hide: true },
    { keyName: "PCFAuth", label: "PCF權限" },
    { keyName: "testDate", label: "測試日期", type: "date", hide: true },
    { keyName: "testDateTime", label: "測試日期時間", type: "datetime" },
  ];
  
  let rows = [
    {
      oName: "家登1",
      cNameChinese: "王小明",
      cNameEnglish: "Wang Xiao Ming",
      cAccount: "wangxiaoming",
      cDept: "研發部",
      cJobTitle: "工程師",
      cEmail: "test@gudeng.com",
      cPhone: "123456789",
      OGHGAuth: "是",
      PCFAuth: "否",
      testDate: "2024/03/13",
      testDateTime: "2024/03/13 12:00:00",
    },
    {
      oName: "家登2",
      cNameChinese: "李小華",
      cNameEnglish: "Li Xiao Hua",
      cAccount: "lixiaohua",
      cDept: "研發部",
      cJobTitle: "工程師",
      cEmail: "test2@gudeng.com",
      cPhone: "123456789",
      OGHGAuth: "否",
      PCFAuth: "是",
      testDate: "2024/03/14",
      testDateTime: "2024/03/14 10:00:00",
    },
  ];
  
  for (let i = 1; i < 20; i++) {
    rows = [
      ...rows,
      { ...rows[(i - 1) * 2], oName: rows[(i - 1) * 2].oName + "1" },
      { ...rows[(i - 1) * 2 + 1], oName: rows[(i - 1) * 2 + 1].oName + "2" },
    ];
  }
  
  export const rows1: ESGTableProps["rows"] = rows;
  
  