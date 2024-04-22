import type {Meta, StoryObj} from '@storybook/react';

import {ViewEdit} from './ViewEdit';
import { fn } from '@storybook/test';
import { initialColumns } from './ViewEditModel';
import { useQueryCityListTest } from 'controllers/SmCity/test/getCities';
import { useQueryCountryListTest } from 'controllers/SmCountry/test/getCountries';

const meta: Meta<typeof ViewEdit> = {
  component: ViewEdit,
};

export default meta;

type Story = StoryObj<typeof ViewEdit>;

export const Basic: Story = {args: {
  columns: initialColumns,
  onClose: fn(),
  onSubmit: fn(),
  formType: "edit",
  useQueryCityList: useQueryCityListTest,
  useQueryCountryList: useQueryCountryListTest,
}};
