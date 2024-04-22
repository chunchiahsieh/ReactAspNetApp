import type { Meta, StoryObj } from "@storybook/react";

import { ESGForm, ESGFormProps } from "./ESGForm";
import dayjs from "dayjs";
import { fn } from "@storybook/test";

import {
  header,
  rows1,
} from "components/Base/Data Display/ESGTable/tests/testData";
import { delay } from "utils/delay";
import { useQuery } from "@tanstack/react-query";
import _ from "lodash";

function ESGFormStory(
  props: ESGFormProps & {
    storyOnSearch?: (v: any) => void;
    storyOnButtonClick?: () => void;
  }
) {
  props.columns.forEach((v) => {
    v.cType === "search" &&
      _.set(v, "forSearch", { ...v.forSearch, onSearch: props.storyOnSearch });
    v.cType === "button" &&
      _.set(v, "forButton", {
        ...v.forButton,
        onClick: props.storyOnButtonClick,
      });
  });
  return <ESGForm {...props} />;
}

const meta: Meta<typeof ESGFormStory> = {
  component: ESGFormStory,
};

export default meta;

type Story = StoryObj<typeof ESGFormStory>;

const props: ESGFormProps = {
  columns: [
    { name: { en: "Name", zh: "名稱" }, cType: "text", value: "value1" },
    {
      name: { en: "Value", zh: "值" },
      cType: "number",
      value: "123",
      fnType: "disable",
    },
    {
      name: { en: "Display Column 0 & 1", zh: "顯示欄位0&1" },
      cType: "display",
      value: "",
      forDisplay: [0, 1],
    },
    {
      name: { en: "Name", zh: "名稱" },
      cType: "text",
      value: "value1",
      nCols: 1,
      fnType: "view",
    },
    {
      name: { en: "Search Me", zh: "我要搜尋" },
      cType: "search",
      value: rows1[5],
      forSearch: {
        useQueryTable: () => {
          return useQuery({
            queryKey: ["ESGSearch"],
            queryFn: async function () {
              await delay(2000);
              return {
                header: header,
                rows: rows1,
                title: "Test Title",
              };
            },
          });
        },
        t2string: (v) => v?.oName,
      },
      required: true,
    },
    {
      name: { en: "select", zh: "選擇" },
      cType: "select",
      value: [],
      forSelect: {
        data: ["1", "2", "3"],
        multiple: false,
      },
      required: true,
    },
    {
      name: { en: "boolean", zh: "切換按鈕" },
      cType: "boolean",
      value: true,
      required: true,
    },
    {
      name: { en: "button", zh: "按鈕" },
      cType: "button",
      value: "What Should I do for this?",
      forButton: {
        localeTxt: "cancel",
        onClick: () => console.log("click me!"),
      },
    },
    {
      name: { en: "Value", zh: "值" },
      cType: "search",
      value: "456",
      nCols: 1,
      fnType: "disable",
    },
    {
      name: { en: "Name", zh: "名稱" },
      cType: "text",
      value: "value1",
      nCols: 1,
    },
    {
      name: { en: "Value", zh: "值" },
      cType: "number",
      value: "123",
      nCols: 3,
    },
    {
      name: { en: "Name", zh: "名稱" },
      cType: "text",
      value: "value1",
      nCols: 3,
    },
    {
      name: { en: "Value", zh: "值" },
      cType: "number",
      value: "456",
      nCols: 3,
    },
    { name: { en: "Name", zh: "名稱" }, cType: "text", value: "value1" },
    { name: { en: "Value", zh: "值" }, cType: "number", value: "123" },
    {
      name: { en: "Name", zh: "名稱" },
      cType: "text",
      value: "",
      required: true,
    },
    {
      name: { en: "Value", zh: "值" },
      cType: "number",
      value: "",
      required: true,
    },
    {
      name: { en: "Date", zh: "日期" },
      cType: "date",
      value: dayjs().format("YYYY/MM/DD"),
    },
    { name: { en: "Date2", zh: "沒給日期" }, cType: "date", required: true },
  ],
  onSubmit: fn((e) => {
    console.log(e);
  }),
  onClose: fn((e) => {
    console.log(e);
  }),
  nColumn: 2,
  stSubmit: "submit",
  stClose: "cancel",
  hideSumbit: false,
  hideClose: false,
  titleSX: { color: "red", fontSize: 74, fontWeight: "bold" },
  onBack: fn(),
  hideBack: true,
};
export const Basic: Story = {
  args: { ...props, storyOnSearch: fn(), storyOnButtonClick: fn() },
};
