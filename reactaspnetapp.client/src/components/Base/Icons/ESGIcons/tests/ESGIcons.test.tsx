import {render} from '@testing-library/react';
import {ESGIcons} from '../ESGIcons';

describe('<ESGIcons />', () => {
    test('it should mount', () => {
        render(<ESGIcons pathColor='yello'/>);
    });
});
