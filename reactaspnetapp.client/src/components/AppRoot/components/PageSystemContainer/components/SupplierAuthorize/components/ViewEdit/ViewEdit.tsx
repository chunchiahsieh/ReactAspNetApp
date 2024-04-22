import { ESGBackdrop, ESGButton, ESGCancelButton, ESGForm } from "components";
import { ESGBackdropProps } from "components/Base/Feedback/ESGBackdrop";
import {
  OneColumnOfESGFormProps,
  OneColumnWithKeyName,
} from "components/Base/Input/ESGForm";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import localeCommon from "styles/locales/common";
import localeSM from "styles/locales/sm";
import { SmOrgGroup4Edit } from "./ViewEditModel";
import _ from "lodash";
import {
  CountryRow,
  useQueryCountryList as useQuery4Country,
} from "controllers/SmCountry/getCountries";
import {
  CityRow,
  useQueryCityList as useQuery4City,
} from "controllers/SmCity/getCities";
import { AvailableLang } from "i18next_main";

export interface ViewEditProps {
  columns?: OneColumnWithKeyName<SmOrgGroup4Edit>[];
  onClose?: () => void;
  onSubmit?: (data: {
    data: OneColumnWithKeyName<SmOrgGroup4Edit>[];
    action: "create" | "update" | "delete";
  }) => void;
  onBack?: () => void;
  formType?: FormType;
  useQueryCountryList?: typeof useQuery4Country;
  useQueryCityList?: typeof useQuery4City;
}

export type FormType = "create" | "edit" | "view";

export function ViewEdit({
  columns = [],
  onClose,
  onSubmit,
  onBack,
  formType = "edit",
  useQueryCountryList = useQuery4Country,
  useQueryCityList = useQuery4City,
}: ViewEditProps) {
  const [t, i18n] = useTranslation(["sm", "common"]);
  const indexes = useMemo(() => {
    const iCountryId = columns.findIndex((c) => c.keyName === "countryI18ns");
    const iCityId = columns.findIndex((c) => c.keyName === "cityI18ns");
    return { iCountryId, iCityId };
  }, [columns]);
  const [currentCountryRow, setCurrentCountryRow] = useState<CountryRow | "">(
    columns[indexes.iCountryId].value as CountryRow
  );
  const [currentCityRow, setCurrentCityRow] = useState<CityRow | "">(
    columns[indexes.iCityId].value as CityRow
  );
  const [currentFormType, setCurrentFormType] = useState<FormType>(formType);
  useEffect(() => {
    setCurrentFormType(formType);
  }, [formType]);
  const [currentFormTitle, setCurrentFormTitle] = useState<string>(
    formType === "create"
      ? localeSM.vam.createFormTitle
      : formType === "edit"
        ? localeSM.vam.editFormTitle
        : localeSM.vam.vieFormTitle
  );
  const [currentStClose, setCurrentStClose] = useState<string>(
    formType === "create" || formType === "edit"
      ? localeCommon.cancel
      : localeCommon.delete2
  );
  const [currentStSubmit, setCurrentStSubmit] = useState<string>(
    formType === "create" || formType === "edit"
      ? localeCommon.save_and_close
      : localeCommon.main_ribbon.edit
  );
  const [currentColumns, setCurrentColumns] = useState(columns);
  useEffect(() => {
    if (!!useQueryCountryList) {
      _.set(columns[indexes.iCountryId], "forSearch", {
        ...columns[indexes.iCountryId].forSearch,
        useQueryTable: useQueryCountryList,
        t2string: (row: CountryRow) => row[i18n.language as AvailableLang],
      });
    }
    if (!!useQueryCityList) {
      _.set(columns[indexes.iCityId], "forSearch", {
        ...columns[indexes.iCityId].forSearch,
        useQueryTable: useQueryCityList,
        t2string: (row: CityRow) => row[i18n.language as AvailableLang],
      });
    }
    setCurrentColumns(columns);
  }, [columns, i18n.language]);
  const [backdropProps, setBackdropProps] = useState<ESGBackdropProps | null>(
    null
  );

  useEffect(() => {
    switch (currentFormType) {
      case "create":
        setCurrentColumns(
          currentColumns.map((column) => {
            return {
              ...column,
              fnType: column.fnType === "disable" ? "disable" : "input",
            };
          })
        );
        setCurrentFormTitle(localeSM.vam.createFormTitle);
        setCurrentStClose(localeCommon.cancel);
        setCurrentStSubmit(localeCommon.save_and_close);
        break;
      case "edit":
        setCurrentColumns(
          currentColumns.map((column) => {
            return {
              ...column,
              fnType: column.fnType === "disable" ? "disable" : "input",
            };
          })
        );
        setCurrentFormTitle(localeSM.vam.editFormTitle);
        setCurrentStClose(localeCommon.cancel);
        setCurrentStSubmit(localeCommon.save_and_close);
        break;
      case "view":
        setCurrentColumns(
          currentColumns.map((column) => {
            return {
              ...column,
              fnType: "view",
            };
          })
        );
        setCurrentFormTitle(localeSM.vam.vieFormTitle);
        setCurrentStClose(localeCommon.delete2);
        setCurrentStSubmit(localeCommon.main_ribbon.edit);
        break;
    }
  }, [currentFormType, formType]);

  function onCloseForm() {
    setBackdropProps(
      currentFormType === "create" || currentFormType === "edit"
        ? {
            show: true,
            content: t(localeCommon.ask_discard_record),
            actions: [
              <ESGButton
                txt={t(localeCommon.confirm_and_discard)}
                onClick={() => onClose?.()}
                sx={{}}
              />,
              <ESGCancelButton
                txt={t(localeCommon.return2)}
                onClick={onBackdropClose}
                sx={{ minWidth: "100px" }}
              />,
            ],
            onClose: () => {
              // Cancel the action
              setBackdropProps(null);
            },
          }
        : {
            show: true,
            content: t(localeCommon.ask_delete_record),
            actions: [
              <ESGButton
                txt={t(localeCommon.confirm_and_delete)}
                onClick={() =>
                  onSubmit?.({ data: currentColumns, action: "delete" })
                }
                sx={{}}
              />,
              <ESGCancelButton
                txt={t(localeCommon.return2)}
                onClick={onBackdropClose}
                sx={{ minWidth: "100px" }}
              />,
            ],
            onClose: () => {
              // Close the form
              setBackdropProps(null);
            },
          }
    );
  }
  function onSubmitForm(data: OneColumnOfESGFormProps[]) {
    if (currentFormType === "view") {
      setCurrentFormType("edit");
    } else {
      onSubmit?.({
        data,
        action: currentFormType === "create" ? "create" : "update",
      });
    }
  }
  function onBackdropClose(): void {
    setBackdropProps(null);
  }

  function onChangeValues(values: OneColumnOfESGFormProps["value"][]): void {
    const cols = [...currentColumns];
    const newCountryRow =
      _.isEqual(values[indexes.iCountryId], currentCountryRow) === false
        ? values[indexes.iCountryId]
        : null; //null means no change
    const newCityRow =
      _.isEqual(values[indexes.iCityId], currentCityRow) === false
        ? values[indexes.iCityId]
        : null; //null means no change
    只要有變更就要更新的部分: if (
      newCountryRow !== null ||
      newCityRow !== null
    ) {
      if (!!newCountryRow) {
        const colCity =
          cols[indexes.iCityId].value === ""
            ? cols[indexes.iCityId]
            : { ...cols[indexes.iCityId], value: "" }; //清空城市
        cols[indexes.iCityId] = colCity; //更新此物件好讓React重新渲染
        setCurrentCityRow("");
        設定搜尋時需要的參數WithLintCheck: {
          _.set(colCity, "forSearch.queryArgs", {
            ...colCity.forSearch?.queryArgs,
            countryId: newCountryRow.countryId,
          }); //設定城市的查詢參數
        }
      }
      更新: {
        if (!!newCountryRow) setCurrentCountryRow(newCountryRow);
        if (!!newCityRow) setCurrentCityRow(newCityRow);
        setCurrentColumns(cols);
      }
    }
  }

  return (
    <>
      <ESGForm
        title={t(currentFormTitle)}
        columns={currentColumns}
        stClose={currentStClose}
        stSubmit={currentStSubmit}
        nColumn={2}
        extraLocales={["sm"]}
        onClose={onCloseForm}
        onSubmit={onSubmitForm}
        onBack={onBack}
        onChangeValues={onChangeValues}
      />
      <ESGBackdrop
        content={"no content"}
        onClose={onBackdropClose}
        show={!!backdropProps}
        {...backdropProps}
      />
    </>
  );
}
