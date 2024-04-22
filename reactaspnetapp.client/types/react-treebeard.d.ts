declare module "react-treebeard" {
  import { CSSProperties, ComponentType } from "react";
  export const Treebeard: ComponentType<{
    data: TreebeardData;
    onToggle?: (node: TreebeardData, toggled: boolean) => void;
    style?: Style;
    decorators?: Decorators;
  }>;
  export interface Decorators {
    Toggle?: ({
      style: CSSProperties,
      height: number,
      width: number,
    })=> JSX.Element;
    Header?: ({
      style: CSSProperties,
      node: TreebeardData
    })=>JSX.Element;
    Container?: (any
      // {
      // style: CSSProperties,
      // decorators: Decorators,
      // terminal?: boolean,
      // onClick?: PropTypes.func,
      // node?: TreebeardData,
      // onSelect?: PropTypes.func,
      // animations?: {
      //   toggle?: (
      //     {
      //       node: { toggled: boolean },
      //     },
      //     duration: number
      //   ) => Animation | boolean;
      //   drawer?: () => Animation | boolean;
      // }
      // }
    )=>JSX.Element;
    Loading?: ({
      style: CSSProperties
    })=>JSX.Element;
  }

  export interface Animation {
    animation: any;
    duration: number;
  }
  export interface TreebeardData {
    name: string;
    description?: string;
    id?: number;
    toggled?: boolean;
    active?: boolean;
    loading?: boolean;
    children?: TreebeardData[];
    decorators?: any;
    animations?: any;
    site?: any;
  }

  export interface Style {
    tree: {
      base?: CSSProperties;
      node?: {
        base?: CSSProperties;
        link?: CSSProperties;
        activeLink?: CSSProperties;
        toggle?: {
          base?: CSSProperties;
          wrapper?: CSSProperties;
          height?: number;
          width?: number;
          arrow?: CSSProperties;
        };
        header?: {
          base?: CSSProperties;
          connector?: CSSProperties;
          title?: CSSProperties;
        };
        subtree?: CSSProperties;
        loading?: CSSProperties;
      };
    };
  }
}
