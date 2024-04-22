import type { Meta, StoryObj } from "@storybook/react";

import { ESGSearch } from "./ESGSearch";
import { fn } from "@storybook/test";
import {
  header,
  rows1,
} from "components/Base/Data Display/ESGTable/tests/testData";
import { delay } from "utils/delay";
import { useQuery } from "@tanstack/react-query";

const meta: Meta<typeof ESGSearch> = {
  component: ESGSearch,
};

export default meta;

type Story = StoryObj<typeof ESGSearch>;

export const Basic: Story = {
  args: {
    placeholder: "Search",
    disabled: true,
    onSearch: fn(),
    useQueryTable: () =>
      useQuery({
        queryKey: ["ESGSearch"],
        queryFn: async function () {
          await delay(2000);
          return {
            header: header,
            rows: rows1,
            title: "Test Title",
          };
        },
      }),
    iniValue: rows1[5],
    t2string: (v) => v?.oName,
    props4Table: { multiRowSelection: false },
  },
};
