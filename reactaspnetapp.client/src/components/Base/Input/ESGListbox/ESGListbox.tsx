import {
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  SxProps,
} from "@mui/material";
import { Fragment, useMemo, useState } from "react";
import ParkIcon from "@mui/icons-material/Park";
import SpaIcon from "@mui/icons-material/Spa";
import LinkIcon from "@mui/icons-material/Link";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Theme } from "@emotion/react";
import { Cursor, ESGListBoxDataWithOpened, ESGListboxProps, OneListProps, SEPERATOR, SxObs } from "./ESGListboxController";
import { observer } from "mobx-react-lite";

export function ESGListbox({ data, listHeader }: ESGListboxProps) {
  const cursor = useMemo(() => new Cursor(), []);

  const mainData = useMemo(() => {
    const addKeyAndStyle = (
      { sx, ...node }: ESGListBoxDataWithOpened,
      key: string
    ) => {
      const newNode = {
        onSelect: () => {},
        ...node,
      } as ESGListBoxDataWithOpened;
      newNode.key = key;
      newNode.onSelect = cursor.onSelect.bind(cursor);
      newNode.isOpened = !!newNode.isOpened;
      const nLevel = key.split(SEPERATOR).length;
      if (!!!newNode.children) {
      } else if (nLevel === 1) {
        sx = {
          ...sx,
          bgcolor: "green",
          color: "white",
          "&:hover": { bgcolor: "lightgreen" },
          m: "2px",
        };
        // } else if (nLevel === 2) {
        //   sx = { ...sx, bgcolor: "lightgreen", m: "2px" };
      } else {
        // sx = { ...sx, bgcolor: "lightblue", m: "2px" };
      }
      newNode.sxObs = new SxObs({ ...sx } as SxProps<Theme>);

      // 設好indent
      const pl = 2 * (newNode.key?.split(SEPERATOR).length ?? 0);
      newNode.sxObs?.setSx({
        ...sx,
        pl: pl,
        "& .MuiListItemText-primary": {
          fontSize: newNode.children ? "1.2rem" : "1rem",
        },
      } as SxProps<Theme>);

      if (newNode.children) {
        newNode.children = newNode.children?.map((child, ind) =>
          addKeyAndStyle(child, `${key}${SEPERATOR}${ind}`)
        );
      }
      return newNode;
    };
    return addKeyAndStyle(data as ESGListBoxDataWithOpened, "root");
  }, [data]);

  return <ESGListboxRare data={mainData} listHeader={listHeader} />;
}

function ESGListboxRare({
  data,
  listHeader,
}: OneListProps & { listHeader?: string }) {
  return (
    <List
      sx={{ width: "100%", height: "100%", bgcolor: "#D9D9D9", p: 0 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        listHeader ? (
          <ListSubheader component="div" id="nested-list-subheader">
            {listHeader}
          </ListSubheader>
        ) : undefined
      }
    >
      <OneList data={data} />
    </List>
  );
}

const OneList = observer(function ({ data }: OneListProps) {
  const [open, setOpen] = useState<boolean>(!!data.isOpened);

  // 使得sx可以被observable

  const {
    name,
    key,
    description,
    icon,
    children,
    onClick,
    onSelect,
    sxObs,
    isOpened,
    ...props
  } = data;
  return (
    <Fragment key={`f-${key}`}>
      <ListItemButton
        key={`listItem-${key}`}
        sx={sxObs?.sx}
        {...props}
        onClick={() => {
          setOpen(!open);
          onSelect?.(data);
          !!!children && onClick?.(data);
        }}
      >
        <ListItemIcon>
          {icon ??
            (children ? (
              <ParkIcon style={{ fill: "lightgreen" }} />
            ) : (
              <SpaIcon style={{ fill: "purple" }} />
            ))}
        </ListItemIcon>
        <ListItemText primary={name} secondary={description} />
        {children && onClick ? (
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClick?.(data);
            }}
          >
            <LinkIcon />
          </IconButton>
        ) : null}
        {!!children ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItemButton>
      <Collapse key={`sub-${key}`} in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children?.map((child) => {
            return <OneList key={child.key} data={child} />;
          })}
        </List>
      </Collapse>
    </Fragment>
  );
});
