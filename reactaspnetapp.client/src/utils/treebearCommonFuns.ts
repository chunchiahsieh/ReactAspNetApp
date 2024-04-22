import { TreebeardData } from "react-treebeard";

export function genOnToggle(
  treeData: TreebeardData,
  setTreeData: (treeData: TreebeardData) => void,
  cursor: TreebeardData | undefined,
  setCursor: (cursor: TreebeardData) => void,
  onSelected: (site: any) => void
) {
  return function onToggle(node: TreebeardData, toggled: boolean) {
    if (cursor) {
      cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    } else {
      onSelected(node.site);
    }
    setCursor(node);
    setTreeData(Object.assign({}, treeData));
  };
}
