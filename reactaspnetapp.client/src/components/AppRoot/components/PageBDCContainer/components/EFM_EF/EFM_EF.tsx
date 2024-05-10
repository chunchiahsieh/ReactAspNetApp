import { ESGBackdrop, ESGButton, ESGMainRibbon } from "components";
import { Box, SxProps } from "@mui/material";
import { RowSelectionState } from "@tanstack/table-core";

import { sxColPile, sxFullSize, sxNoOverflow } from "styles/sxTemplates";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


import { useQueryData } from "controllers/EFM_EF/List/getData";
import { useMutateDelete } from "controllers/EFM_EF/Delete/deleteEntity";
import { useUploadAFile } from "controllers/EFM_EF/List/uploadFiles";

/*
import { useQuerySmOrgGroupData } from "controllers/SM_VAM/List/getData";
import { useMutateDelete } from "controllers/SM_VAM/Delete/useDelete";
import { useUploadAFile } from "controllers/SM_VAM/List/uploadFiles";
*/
import { EFM_EFL_EditForm as ViewEdit } from "../EFM_EFL_EditForm/EFM_EFL_EditForm";
import { Delete } from "../../../PageSystemContainer/components/SupplierAuthorize/components/Delete";
import { EFM_EF_List as List } from "../EFM_EF_List/EFM_EF_List";
import { convertToList } from "../EFM_EF_List/ListMode";
import {Entity,initialColumns } from "./Entity";
import {
  convertEditColToUpdate,
  convertEditColToCreate,
} from "./ViewEditModel";

import _ from "lodash";
import localeCommon from "styles/locales/common";
import { useMutateCreate } from "controllers/SM_VAM/Create/addAorgGroup";
import { useMutateUpdate } from "controllers/SM_VAM/Update/updateOrgGroup";
import { AvailableLang } from "i18next_main";

export interface EFM_EFProps {
  path?: string;
  useQueryList?: () => ReturnType<typeof useQueryData>;
  useDeleteMutation?: typeof useMutateDelete;
  useCreateMutation?: typeof useMutateCreate;
  useUpdateMutation?: typeof useMutateUpdate;
}

export function EFM_EF({
  path = "",
  useQueryList = useQueryData,
  useDeleteMutation = useMutateDelete,
  useCreateMutation = useMutateCreate,
  useUpdateMutation = useMutateUpdate,
}: EFM_EFProps) {
  const [t, i18n] = useTranslation("common");
  const {
    isPending: isListPending,
    error: listError,
    isSuccess: isListSuccess,
    data,
    refetch,
  } = useQueryList();
  const [listData, setListData] = useState(
    data?.map((d) => convertToList(d, i18n.language as AvailableLang))
  );
  const [selected, setSelected] = useState<RowSelectionState>({});
  const [showMutateUI, setShowMutateUI] = useState<
    "list" | "create" | "view" | "edit" | "delete"
  >("list");
  useEffect(() => {
    setListData(data?.map((d) => convertToList(d, i18n.language as AvailableLang)));
  }, [data, i18n.language]);
  const [alert, setAlert] = useState<string>("");
  const { isSuccess: isDeleteSuccess, error: errorDelete, mutate: mutateDelete } =
    useDeleteMutation();
  const { isSuccess: isCreateSuccess, error: errorCreate, mutate: mutateCreate } =
    useCreateMutation();
  const { isSuccess: isUpdateSuccess, error: errorUpdate, mutate: mutateUpdate } =
    useUpdateMutation();

  useEffect(() => {
    refetch();
    console.log("refetch");
  }, [isListSuccess, isDeleteSuccess, isCreateSuccess, isUpdateSuccess]);

  useEffect(() => {
    if (errorDelete) {
      setAlert(`Delete Error: ${JSON.stringify(errorDelete)}`);
    } else if (errorCreate) {
      setAlert(`Create Error: ${JSON.stringify(errorCreate)}`);
    } else if (errorUpdate) {
      setAlert(`UpdateError: ${JSON.stringify(errorUpdate)}`);
    }
  }, [errorDelete, errorCreate, errorUpdate]);

  useEffect(() => {
    if (path === "Create") {
      setShowMutateUI("create");
    }
  }, [path]);

  useEffect(() => {
    if (showMutateUI === "list") {
      refetch();
    }
  }, [
    showMutateUI /* TODO TODO 接著會有 create, edit 與 delete 三種的 success 需要監聽 */,
  ]);

  function toShowMutateUI(whichOne: typeof showMutateUI) {
    switch (whichOne) {
      case "list":
        return <></>;
      case "create":
        return (
          <ViewEdit
            columns={initialColumns}
            onClose={onMutateClose}
            onSubmit={onMutateSubmit}
            onBack={onMutateBack}
            formType="create"
          />
        );
      case "view":
      case "edit":
        if (_.keys(selected).length === 0) {
          setAlert(localeCommon.just_one_row);
          setShowMutateUI("list");
          return <></>;
        } else if (_.keys(selected).length > 1) {
          setAlert(localeCommon.just_one_row);
          setShowMutateUI("list");
          return <></>;
        } else {
          const columns4show = !!data
            ? convertToList(data[+_.keys(selected)[0]])
            : [];
          return (
            <ViewEdit
              formType={whichOne === "view" ? "view" : "edit"}
              columns={columns4show}
              onClose={onMutateClose}
              onSubmit={onMutateSubmit}
              onBack={onMutateBack}
            />
          );
        }
      case "delete":
        if (_.keys(selected).length === 0) {
          setAlert(localeCommon.at_least_one_row);
          setShowMutateUI("list");
          return <></>;
        }
        return (
          <Delete
            show={showMutateUI === "delete"}
            onClose={() => {
              // TODO Do something to delete the selected rows
              setShowMutateUI("list");
            }}
            onDelete={() =>
              onMutateSubmit({
                data: _.keys(selected)
                  .map((k) => data?.[+k]?.orgGroupId ?? 0)
                  .filter((v) => v > 0),
                action: "delete",
              })
            }
          />
        );
    }
  }

  function onMutateBack() {
    setShowMutateUI("list");
  }

  function onMutateClose() {
    setShowMutateUI("list");
  }

  function onMutateSubmit(arg: {
    data: any;
    action: "create" | "update" | "delete";
  }) {
    if (arg.action === "create") {
      const createData = convertEditColToCreate(arg.data);
      createData.user!.langKey = i18n.language;
      mutateCreate(createData);
    } else if (arg.action === "update") {
      const oldData = data?.[+_.keys(selected)[0]];
      if (oldData) {
        const updateData = convertEditColToUpdate(arg.data, oldData);
        mutateUpdate({ogName: oldData.orgGroupName??"",vCode: oldData.vendorCode??"",row:updateData??{}});
      }
    } else if (arg.action === "delete") {
      const Ids = _.keys(selected)
        .map((k) => data?.[+k]?.orgGroupId ?? 0)
        .filter((v) => v > 0);
      mutateDelete(Ids);
      console.log("delete for onMutateSubmit", Ids);
    }
    console.log("onMutateSubmit", arg);
    setShowMutateUI("list");
  }

  return (
    <Box sx={{ ...sxFullSize } as SxProps}>
      <Box
        {...(showMutateUI !== "list" ? {} : { style: { display: "none" } })}
        sx={{ ...sxFullSize, ...sxColPile, ...sxNoOverflow } as SxProps}
      >
        {toShowMutateUI(showMutateUI)}
      </Box>
      <Box
        {...(showMutateUI === "list" ? {} : { style: { display: "none" } })}
        sx={{ ...sxFullSize, ...sxColPile, ...sxNoOverflow } as SxProps}
      >
        <ESGMainRibbon
          sx={{ flexShrink: 2, overflowX: "auto" }}
          onClickRefresh={() => {
            refetch();
          }}
          onClickAdd={() => {
            setShowMutateUI("create");
          }}
          onClickCheck={() => {
            setShowMutateUI("view");
          }}
          onClickEdit={() => {
            setShowMutateUI("edit");
          }}
          onClickDelete={() => {
            setShowMutateUI("delete");
          }}
          //useUploadMutation={useUploadAFile}
        />
        <List
          isPending={isListPending}
          error={listError}
          data={listData}
          onRowSelectionChange={setSelected}
        />
      </Box>
      <ESGBackdrop
        show={!!alert}
        onClose={() => setAlert("")}
        content={t(alert)}
        actions={[
          <ESGButton
            key="alert"
            onClick={() => setAlert("")}
            txt={t(localeCommon.close)}
            variant="contained"
          />,
        ]}
      />
    </Box>
  );
}
