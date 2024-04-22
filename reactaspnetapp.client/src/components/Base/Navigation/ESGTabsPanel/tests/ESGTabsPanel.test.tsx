import {render} from '@testing-library/react';
import {ESGTabsPanel} from '../ESGTabsPanel';
import { Box } from '@mui/material';

describe('<ESGTabsPanel />', () => {
    test('it should render', () => {
        render(<ESGTabsPanel children={[  {name: 'Tab 1', component: <Box>{"Tab 1 Content"}</Box>}]}/>);
    });
});
