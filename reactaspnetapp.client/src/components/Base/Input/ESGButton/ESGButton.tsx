import { Button, ButtonProps, SxProps, Theme } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createTypography";
import { ForwardedRef, forwardRef, useEffect } from "react";

/**
 * ESGButtonProps 是一個介面，用來定義Button的props。
 */
export interface ESGButtonProps extends ButtonProps {
  /** Button顯示的文字，而包在此component裡的其餘componnets 則會在其後面 */
  txt: string;
  /** 使此Button無法使用 */
  disabled?: boolean;
  /** 設定 sx */
  sx?: SxProps<Theme>;
  /** 設定 type */
  type?: "button" | "submit" | "reset";
  /** 當點擊時觸發的事件 */
  onClick?: () => void;
}

/**
 * Button 元件 for ESG。
 * @example
 * ``` tsx
 * <ESGButton txt="confirm" onClick={() => console.log("click")} />
 * ```
 */
export const ESGButton = forwardRef(ESGButtonForRef);

function ESGButtonForRef({
  txt = "confirm",
  disabled = false,
  sx,
  type = "button",
  onClick = () => {},
  children,
  ...props
}: ESGButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
  useEffect(() => {
    console.log(txt);
  }, [txt]);

  const defaultStyle: CSSProperties = {
    background: "#2C8646",
    borderRadius: 20,
    textTransform: "none",
    color: "white",
  };
  if (disabled) defaultStyle.background = "#7D7D7D";

  return (
  <Button
    variant="contained"
    sx={{ ...defaultStyle, ...(sx ?? {}) }}
    disabled={disabled}
    type={type}
    ref={ref}
    onClick={onClick}
    {...props}
  >
      {txt}
      {children}
    </Button>
  );
}

export const ESGCancelButton = (props: ESGButtonProps) => {
  const { sx, ...props2 } = props;
  return <ESGButton sx={{ background: "#7D7D7D",...sx }} {...props2} />;
};
