import { Radio, RadioProps, SxProps, Theme } from "@mui/material";
import RadioIcon from 'assets/icons/radio.svg?react';

export interface ESGRadioProps extends RadioProps {
  sizeRadio?: number;
  checked?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  value?: any;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

export function ESGRadio({
  sizeRadio = 32,
  checked,
  onChange,
  value,
  disabled,
  sx = {},
  ...props
}: ESGRadioProps) {
  return (
    <Radio
      sx={{
        "& svg": {
          fontSize: sizeRadio,
          width: sizeRadio,
          height: sizeRadio,
          "& ellipse": { stroke: "black" },
          "& circle": { fill: "white" },
          opacity: (disabled)? 0.5 : 1,
        },
        "&.Mui-checked svg": {
          "& circle": { fill: "#2C8646" },
        },
        ...sx,
      }}
      icon={<RadioIcon />}
      checkedIcon={<RadioIcon />}
      {...(checked !== undefined && { checked })}
      {...(onChange !== undefined && { onChange })}
      {...(value !== undefined && { value })}
      {...props}
    />
  );
}
