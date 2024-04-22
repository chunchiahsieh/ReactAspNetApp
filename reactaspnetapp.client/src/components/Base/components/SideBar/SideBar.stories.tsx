import type {Meta, StoryObj} from '@storybook/react';

import {SideBar} from './SideBar';
import { CPNTreePathString } from 'components/AppRoot/AppRootController';

const meta: Meta<typeof SideBar> = {
  component: SideBar,
};

export default meta;

type Story = StoryObj<typeof SideBar>;

export const Basic: Story = {args: {currentPath: CPNTreePathString.PageSystemContainer.name}};
