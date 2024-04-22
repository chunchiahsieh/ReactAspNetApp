import { ESGListBoxData } from "components/Base/Input/ESGListbox";
import { AppStates } from "controllers/AppController";
import _ from "lodash";

export interface Row4CPNTree {
  name: { [en: string]: string };
  path: string;
  icon?: JSX.Element;
  isLeaf: boolean;
}

export function generateDataForListbox(
  cpns: Row4CPNTree[],
  locale: string,
  filterRegExp?: RegExp
): ESGListBoxData {
  const result: ESGListBoxData = {
    name: cpns.filter((cpn) => cpn.path === "/")[0]?.name[locale] ?? "",
    isOpened: true,
    key: "0",
    children: [],
  };
  let cloneCPNs = [...cpns];
  清洗資料: if (!!filterRegExp)
    cloneCPNs = cloneCPNs.filter((cpn) =>
      _(cpn.name)
        .values()
        .some((v) => filterRegExp.test(v))
    );
  轉換資料: {
    for (let cpn of cloneCPNs) {
      const path = cpn.path.split("/").filter((p) => p !== "");
      let parent = result;
      for (let i = 0; i < path.length; i++) {
        const itsPath = "/" + path.slice(0, i + 1).join("/");
        const name =
          cpns.filter((cpn) => cpn.path === itsPath)[0]?.name?.[locale] ?? "";
        if (!name) break;
        let next = parent.children?.find((child) => child.name === name);
        if (!next) {
          const newChildren =
            cpn.isLeaf && i === path.length - 1 ? undefined : [];
          next = {
            name,
            // id: Math.round(Math.random() * 1000000),
            isOpened: !!filterRegExp,
            children: newChildren,
            onClick: ()=>{AppStates.setCPNTreePath(itsPath)} ,
          };
          parent.children?.push(next);
        }
        parent = next;
      }
    }
  }
  return result;
}
