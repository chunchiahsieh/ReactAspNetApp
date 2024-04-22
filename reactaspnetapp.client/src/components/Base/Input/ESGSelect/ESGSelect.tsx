import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Checkbox,
  FormControl,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import _ from "lodash";
import { useEffect, useState } from "react";

export interface ESGSelectProps extends SelectProps<string | string[]> {
  data: string[];
  onSelectChange?: (value: string | string[]) => void;
}

/**
 * 
 * @param data required: 沒有他，就沒有資料。輸入的選項們
 * @param multiple option: 選擇是否可以多選，預設是false
 * @returns 
 */
export function ESGSelect({
  data,
  multiple,
  onSelectChange = () => {},
  disabled = false,
  ...props
}: ESGSelectProps) {
  const [selectedData, setSelectedData] = useState<string[]>([data[0]]);
  useEffect(() => {
    onSelectChange(multiple ? selectedData : selectedData[0]);
  }, [selectedData]);
  return (
    <FormControl sx={{width: "100%", ...props.sx}}>
      <Select<string | string[]>
        disabled={disabled}
        IconComponent={ExpandMoreIcon}
        value={multiple ? selectedData : selectedData[0]}
        multiple={multiple}
        onChange={(event) => {
          if (multiple) {
            const value = event.target.value as string[];
            setSelectedData(value);
          } else {
            const value = event.target.value as string;
            setSelectedData([value]);
          }
        }}
        renderValue={(selected) =>
          _.isArray(selected) ? selected.join(", ") : selected
        }
        {...props}
        sx={{
          height: "30px",
          backgroundColor: (disabled)?"#F0F0F0":"white",
          ...props.sx,
        }}
      >
        {data.map((item, index) => (
          <MenuItem key={`select-${index}`} value={item}>
            {multiple ? (
              <Checkbox
                checked={selectedData.includes(item)}
                // onChange={(_, checked) => {
                //   if (checked) {
                //     setSelectedData([...selectedData, item]);
                //   } else {
                //     setSelectedData(
                //       selectedData.filter(
                //         (selectedItem) => selectedItem !== item
                //       )
                //     );
                //   }
                // }}
              />
            ) : (
              <></>
            )}
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
