import _ from "lodash";
import { useEffect, useState } from "react";
import {
  Checkbox,
  InputAdornment,
  Paper,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Box,
  Table,
  TableCell,
  FormControlLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./ColumnsFilterManager.module.scss";

export interface ColumnsFilterManagerProps {
  columns?: Column4Filter[];
}

export type Column4Filter = {
  name: string;
  list: string[];
  selected: string[];
  ftype: "equal" | "nonequal";
};

export function ColumnsFilterManager({
  columns = [],
}: ColumnsFilterManagerProps) {
  return (
    <Box display={"flex"} flexDirection={"row"}>
      {columns.map((c, i) => (
        <OneColumn key={`filter-column-${i}`} {...c} />
      ))}
    </Box>
  );
}

function OneColumn(props: Column4Filter) {
  const { name, list, selected, ftype } = props;
  const [uniqList, setUniqList] = useState<string[]>([]);
  const [stFilter, setStFilter] = useState<string>("");

  useEffect(() => { 
    setUniqList(_.uniq(list));
  } , [list]);

  useEffect(() => {
    
  }, [stFilter]);

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead sx={{ fontWeight: "bold" }}>
          <TableRow>
            <TableCell>
              <TextField
                key={`filter-${name}-search`}
                label={name}
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                value={stFilter}
                onChange={(e) => {setStFilter(e.target.value)}}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <FormControlLabel
                sx={{ "&  .MuiFormControlLabel-label": { fontWeight: "bold" } }}
                control={<Checkbox></Checkbox>}
                label={name}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {uniqList
            .map((l, i) => (
              <TableRow key={`filter-${name}-row-${i}`}>
                <TableCell>
                  <FormControlLabel control={<Checkbox></Checkbox>} label={l} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
