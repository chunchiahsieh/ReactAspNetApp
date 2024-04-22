import { useState } from "react";
import { Treebeard, TreebeardData } from "react-treebeard";

export interface StructureProps {
  data: TreebeardData;
}

export function Structure({data={name:"test"}}: StructureProps) {
  const [treeData, setTreeData] = useState<TreebeardData>(data);
  const [cursor, setCursor] = useState<any>(null);

  function onToggle(node: TreebeardData, toggled: boolean) {
    if (cursor) {
      cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    } //else {
    //   onSelected(node.site);
    // }
    setCursor(node);
    setTreeData(Object.assign({}, treeData));
  }

  return <Treebeard data={treeData} onToggle={onToggle} />;
  
}
