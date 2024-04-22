import { CPNTree as PageMainContainer } from "./components/PageMainContainer/PageMainContainerController";
import { CPNTree as PageLogin } from "./components/PageLogin/PageLoginController";
import { CPNTree as PageForgetPassword } from "./components/PageForgetPassword/PageForgetPasswordController";
import { CPNTree as PageSystemContainer } from "./components/PageSystemContainer/PageSystemContainerController";
import { CPNTree as PageSPMContainer } from "./components/PageSPMContainer/PageSPMContainerController";
import { CPNTree as PagePCFContainer } from "./components/PagePCFContainer/PagePCFContainerController";
import { CPNTree as PageOGHGContainer } from "./components/PageOGHGContainer/PageOGHGContainerController";
import { Row4CPNTree } from "utils/generateDataForListbox";
// CPNTree means Component Tree
export const CPNTree = {
  PageMainContainer,
  PageLogin,
  PageForgetPassword,
  PageSystemContainer,
  PageOGHGContainer,
  PagePCFContainer,
  PageSPMContainer,
  // 以下是為了多國語系所設定的物件
  locale: {
    en: "root",
    zh: "本平台",
  },
  name: "AppRootCPNTree",
  /**
   * 給 I18n 使用的物件，用在 Resources 裡面
   * @param locale 語系
   * @returns 生成I18n使用的物件，對應到該 locale
   */
  getTreeForI18n: (locale: "en" | "zh") => {
    function getTreeForI18nRecursively(obj: any, locale: string) {
      const clone = { ...obj };
      if (clone["locale"] && clone["locale"][locale]) {
        // if out of the locale, it is not visible
        for (var key in clone) {
          if (
            clone.hasOwnProperty(key) &&
            key !== "name" &&
            key !== "locale" &&
            typeof clone[key] === "object"
          ) {
            clone[key] = getTreeForI18nRecursively(clone[key], locale);
          }
        }
        clone["name"] = clone["locale"][locale];
      }
      return clone;
    }
    return getTreeForI18nRecursively(CPNTree, locale);
  },
  /**
   * 其實，這個部分目前其實只要跑一次就好，未來可能直接把他當變數存起來
   * @returns 生成 TreeBeard 使用的物件的前身，此Table比較適合用在filter上
   */
  getTableForTreeBeard: () => {
    const table: Row4CPNTree[] = [];
    function getTableRecursively(obj: any) {
      let isLeaf = true;
      for (var key in obj) {
        if (
          obj.hasOwnProperty(key) &&
          key !== "name" &&
          key !== "locale" &&
          typeof obj[key] === "object"
        ) {
          isLeaf = false;
          getTableRecursively(obj[key]);
        }
      }
      if (obj["name"]) {
        table.push({
          name: obj["locale"],
          path: obj["name"],
          isLeaf: isLeaf,
        });
      }
    }
    getTableRecursively(CPNTreePathString);
    return table;
  },
};

export const CPNTreeNodeString: typeof CPNTree = (() => {
  function nodeString2NameRecursively(obj: any, prefixes: string[] = []) {
    const clone = { ...obj };
    for (var key in clone) {
      if (
        clone.hasOwnProperty(key) &&
        key !== "name" &&
        key !== "locale" &&
        typeof clone[key] === "object"
      ) {
        clone[key] = nodeString2NameRecursively(clone[key], [...prefixes, key]);
      }
    }
    clone["name"] = prefixes.join(".");
    return clone;
  }
  return nodeString2NameRecursively(CPNTree);
})();

export const CPNTreePathString: typeof CPNTree = (() => {
  function nodePath2NameRecursively(obj: any, prefixes: string[] = []) {
    const clone = { ...obj };
    for (var key in clone) {
      if (
        clone.hasOwnProperty(key) &&
        key !== "name" &&
        key !== "locale" &&
        typeof clone[key] === "object"
      ) {
        clone[key] = nodePath2NameRecursively(clone[key], [...prefixes, key]);
      }
    }
    clone["name"] = "/" + prefixes.join("/");
    return clone;
  }
  return nodePath2NameRecursively(CPNTree);
})();
