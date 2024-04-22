import type {Meta, StoryObj} from '@storybook/react';

import {ESGAppBar} from './ESGAppBar';

const meta: Meta<typeof ESGAppBar> = {
  component: ESGAppBar,
};

export default meta;

type Story = StoryObj<typeof ESGAppBar>;

export const Basic: Story = {args: {
  title : "Gudeng Sustainablility Platform",
  user : {Name: "test", Avatar: "assets/react.svg"},
}};
