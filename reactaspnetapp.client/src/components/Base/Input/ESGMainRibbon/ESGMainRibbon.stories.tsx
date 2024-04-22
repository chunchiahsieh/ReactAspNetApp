import type {Meta, StoryObj} from '@storybook/react';

import {ESGMainRibbon} from './ESGMainRibbon';
import { fn } from '@storybook/test';
import { useUploadAFile } from 'controllers/SM_VAM/List/uploadFiles';

const meta: Meta<typeof ESGMainRibbon> = {
  component: ESGMainRibbon,
};

export default meta;

type Story = StoryObj<typeof ESGMainRibbon>;

export const Basic: Story = {args: {
  onClickAdd: () => fn(),
  onClickCheck: () => fn(),  
  onClickDelete: () => fn(),
  onClickDownloadTemplate: fn(),
  onClickEdit: fn(),
  onClickExport: fn(),
  onClickRefresh: fn(),
  useUploadMutation: useUploadAFile,
}};
