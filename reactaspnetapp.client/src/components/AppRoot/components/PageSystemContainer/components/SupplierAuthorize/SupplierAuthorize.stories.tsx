import type {Meta, StoryObj} from '@storybook/react';

import {SupplierAuthorize} from './SupplierAuthorize';
import { useQuerySmOrgGroupDataTest } from 'controllers/SM_VAM/List/test/getData';
import { useMutateCreateTest } from 'controllers/SM_VAM/Create/test/addAorgGroup';
import { useMutateUpdateTest } from 'controllers/SM_VAM/Update/test/updateOrgGroup';
import { useMutateDeleteTest } from 'controllers/SM_VAM/Delete/test/useDelete';

const meta: Meta<typeof SupplierAuthorize> = {
  component: SupplierAuthorize,
};

export default meta;

type Story = StoryObj<typeof SupplierAuthorize>;

export const Basic: Story = {args: {
  useQueryList: useQuerySmOrgGroupDataTest,
  useCreateMutation: useMutateCreateTest,
  useUpdateMutation: useMutateUpdateTest,
  useDeleteMutation: useMutateDeleteTest,
}};
