import { ChangeEventHandler } from "react";
import { ESGButton, ESGButtonProps } from "../ESGButton";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export interface ESGFileUploadProps extends ESGButtonProps {
  onFileUpload?: ChangeEventHandler<HTMLInputElement>;
  multiple?: boolean;
}

// export function ESGFileUpload({
//   txt = "default value",
//   onFileUpload,
//   onClick,
//   ...props
// }: ESGFileUploadProps) {
//   const hiddenFileInput = useRef<HTMLInputElement|null>(null);

//   return (
//     <ESGButton
//       component={"label"}
//       role={undefined}
//       variant="contained"
//       tabIndex={-1}
//       startIcon={<CloudUploadIcon />}
//       txt={txt}
//       onClick={() => {
//         if (hiddenFileInput.current !== null) {
//           hiddenFileInput.current.click();
//         }
//         console.log('onClick:', hiddenFileInput.current);
//         // onClick?.();
//       }}
//       {...props}
//     >
//       <input
//         type="file"
//         style={{
//           display: "none",
//         }}
//         onChange={(e)=>{console.log('onChange:', e);}}
//         ref={hiddenFileInput}
//       />
//     </ESGButton>
//   );
// }
export function ESGFileUpload({ txt = "default value", multiple=false, onFileUpload, ...props }: ESGFileUploadProps) {
  return (
    <ESGButton
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      txt={txt}
      {...props}
    >
      <input
        type="file"
        {...(multiple ? { multiple: true } : {}) }
        style={{ display: "none" }}
        onChange={onFileUpload}
      />
    </ESGButton>
  );
}
