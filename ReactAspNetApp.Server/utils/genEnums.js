// Before you run this script, please move to the reactaspnetapp.client folder
// bcause I need to use the environment of node.js to run this script
const fs = require("fs");
const path = require("path");
const NMFolder = path.resolve(
  __dirname,
  "..",
  "..",
  "reactaspnetapp.client",
  "node_modules"
);
const csv = require(path.resolve(NMFolder, "csv-parser"));
const lodash = require(path.resolve(NMFolder, "lodash"));
const _ = lodash;

process.chdir(__dirname);
const mainFolder = path.resolve(__dirname, "..", "..");

function parseCSVAsync(filePath, stripBom) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(stripBom())
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("error", (error) => reject(error))
      .on("end", () => {
        resolve(results);
      });
  });
}

async function genEnumsAsync(enums) {
  try {
    const csvFilePath = path.resolve(
      mainFolder,
      "..",
      "Playground",
      "test.csv"
    );
    // 1. 取得 CSV 檔案的內容，以後可能要改成由 DB 取得 //TODO TODO TODO
    // const stripBomUrl = new URL(path.resolve(NMFolder, "strip-bom-stream/index.js"),'file:');
    const stripBomUrl = new URL(
      "file://" + path.resolve(NMFolder, "strip-bom-stream/index.js")
    );
    const stripBom = await import(stripBomUrl.href);
    const enums = await parseCSVAsync(csvFilePath, stripBom.default);
    // 2. 先取得所有Enum Type 的名稱
    const enumNames = _.uniq(enums.map((x) => x.Name));
    const objMap = {};
    let tsStr = "";
    let csharpStr = "";
    for (const enumName of enumNames) {
      const oneEnumInfo = enums.filter((x) => x.Name === enumName);
      // 3. 產生 TypeScript 的 Enums
      tsStr = `${tsStr}export enum ${enumName} {\n${oneEnumInfo
        .map((v, i) => `  ${v.EnumKey} = ${i},\n`)
        .join("")}}\n\n`;
      // 4. 產生 對照到的 EN & TW 的 JSON 物件
      const obj = {};
      for (const item of oneEnumInfo) {
        obj[item.EnumKey] = {
          value: item.EnumValue,
          locale: { en: item.Item_EN, zh: item.Item_TW },
        };
      }
      objMap[enumName] = obj;
      // 6. 產生 C# 的 Enums
      csharpStr = `${csharpStr}public enum ${enumName} {\n${oneEnumInfo
        .map((v, i) => `  ${v.EnumKey} = ${i},\n`)
        .join("")}}\n\n`;
    }
    // 7. 將這些寫入到C# 與TS的檔案中
    const tsFilePath = path.resolve(
      mainFolder,
      "reactaspnetapp.client",
      "src",
      "models",
      "dontModify",
      "Enums.ts"
    );
    fs.writeFileSync(tsFilePath, `${tsStr} \n\n
    export const EnumMap = 
    ${JSON.stringify(objMap)}`);
    const csharpFilePath = path.resolve(
      mainFolder,
      "ReactAspNetApp.Server",
      "Models",
      "DontModify",
      "Enums.cs"
    );
    fs.writeFileSync(csharpFilePath, `
namespace ReactAspNetApp.Server.Models.Enums {
  ${csharpStr}}`);
  } catch (error) {
    console.error(error);
  }
}
genEnumsAsync();
