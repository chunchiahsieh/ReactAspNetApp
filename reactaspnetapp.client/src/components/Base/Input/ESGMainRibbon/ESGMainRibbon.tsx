import {
  Box,
  Button,
  ButtonGroup,
  ButtonGroupTypeMap,
  Tooltip,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import "./ESGMainRibbon.module.scss";
import {
  ESGBackdrop,
  ESGIconAdd,
  ESGIconDelete,
  ESGIconDownloadTemplate,
  ESGIconEdit,
  ESGIconExport,
  ESGIconProps,
  ESGIconRefresh,
  ESGIconUpload,
  ESGIconView,
} from "components";
import localeCommon from "styles/locales/common";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UseMutationResult } from "@tanstack/react-query";

export interface ESGMainRibbonProps
  extends DefaultComponentProps<ButtonGroupTypeMap> {
  onClickAdd?: () => void;
  onClickRefresh?: () => void;
  onClickCheck?: () => void;
  onClickEdit?: () => void;
  onClickDelete?: () => void;
  onClickExport?: () => void;
  onClickDownloadTemplate?: () => void;
  useUploadMutation?: () => UseMutationResult<void, Error, File, unknown>
}

export function ESGMainRibbon({
  onClickAdd,
  onClickCheck,
  onClickDelete,
  onClickDownloadTemplate,
  onClickEdit,
  onClickExport,
  onClickRefresh,
  useUploadMutation,
  ...props
}: ESGMainRibbonProps) {
  const [t] = useTranslation("common");

  //#region For upload file popup
  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const {isSuccess:isUploadSuccess, error: uploadError, mutate} = useUploadMutation?.() || {};
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (...input) => {
      setUploadFile(input[0][0]);
    },
  });
  useEffect(() => {
    if(uploadFile) mutate?.(uploadFile);
  }, [uploadFile]);
  useEffect(() => {
    if(isUploadSuccess) {
      setFileUploadInfo(t(localeCommon.main_ribbon.file_has_been_uploaded));
    } else if(!!uploadError){
      setFileUploadInfo(`Error: ${JSON.stringify(uploadError)}`);
    }
  },[isUploadSuccess, uploadError]);

  const [fileUploadInfo, setFileUploadInfo] = useState("");
  //#endregion For upload file popup

  const iconStyle: ESGIconProps = {
    pathColor: "black",
    width: 14,
    margin: "0 2px",
  };
  const btnStyle: React.CSSProperties = {
    color: "black",
    minWidth: "120px!important",
    paddingLeft: "2",
    display: "flex",
    justifyContent: "left",
    borderColor: "transparent!important",
    // textTransform: "none",
  };

  const data = [
    {
      key: "1",
      title: t(localeCommon.main_ribbon.new),
      icon: <ESGIconAdd {...iconStyle} />,
      onClick: onClickAdd,
    },
    {
      key: "2",
      title: t(localeCommon.main_ribbon.refresh),
      icon: <ESGIconRefresh {...iconStyle} />,
      onClick: onClickRefresh,
    },
    {
      key: "3",
      title: t(localeCommon.main_ribbon.check),
      icon: <ESGIconView {...iconStyle} />,
      onClick: onClickCheck,
    },
    {
      key: "4",
      title: t(localeCommon.main_ribbon.edit),
      icon: <ESGIconEdit {...iconStyle} />,
      onClick: onClickEdit,
    },
    {
      key: "5",
      title: t(localeCommon.main_ribbon.delete),
      icon: <ESGIconDelete {...iconStyle} />,
      onClick: onClickDelete,
    },
    {
      key: "6",
      title: t(localeCommon.main_ribbon.export_file),
      icon: <ESGIconExport {...iconStyle} />,
      onClick: onClickExport,
    },
    {
      key: "7",
      title: t(localeCommon.main_ribbon.download_template),
      icon: <ESGIconDownloadTemplate {...iconStyle} />,
      onClick: onClickDownloadTemplate,
    },
    {
      key: "8",
      title: t(localeCommon.main_ribbon.upload_file),
      icon: <ESGIconUpload {...iconStyle} />,
      onClick: () => setShowUploadPopup(true),
    },
  ];

  return (
    <>
      <ButtonGroup
        variant="text"
        sx={{ background: "#EEF3F0", ...props?.sx }}
        orientation="horizontal"
      >
        {data.map((item) => (
          <Tooltip key={item.key} title={item.title} placement="bottom" arrow>
            <Button sx={btnStyle} onClick={item.onClick}>
              {item.icon}
              {item.title}
            </Button>
          </Tooltip>
        ))}
      </ButtonGroup>
      <ESGBackdrop
        show={showUploadPopup}
        onClose={() => setShowUploadPopup(false)}
        content={
          fileUploadInfo ? (
            !!useUploadMutation ? (
              <p>{fileUploadInfo}</p>
            ) : (
              <p>Developer. You forget to implement this function 'useUploadMutation'</p>
            )
          ) : (
            <Box
              {...getRootProps()}
              sx={{
                border: "2px dashed #cccccc",
                borderRadius: "5px",
                p: 8,
                textAlign: "center",
                cursor: "pointer",
                background: isDragActive ? "#f0f0f0" : "#ffffff",
                "&:hover": {
                  background: "#f0f0f0",
                },
              }}
            >
              <input {...getInputProps()} />
              <p>{t(localeCommon.main_ribbon.drop_file_here)}</p>
            </Box>
          )
        }
      />
    </>
  );
}
