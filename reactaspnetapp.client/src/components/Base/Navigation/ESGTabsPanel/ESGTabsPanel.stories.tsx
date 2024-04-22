import type {Meta, StoryObj} from '@storybook/react';

import {ESGTabsPanel} from './ESGTabsPanel';
import { Box } from '@mui/material';
import _ from 'lodash';
import { fn } from '@storybook/test';

const meta: Meta<typeof ESGTabsPanel> = {
  component: ESGTabsPanel,
};

export default meta;

type Story = StoryObj<typeof ESGTabsPanel>;

const children = [
  {name: 'Tab 1', component: <Box>{"Tab 1 Content"}</Box>},
  {name: 'Tab 2', component: <Box>{"Tab 2 Content"}</Box>},
  {name: 'Tab 3', component: <Box>{_.range(70).map(i=>(<div key={`div-${i}`}>{i+"Tab 3 Content"}</div>))}</Box>},
];

export const Basic: Story = {args: {children: children, iTab:2, onSelect: fn(console.log)}};
