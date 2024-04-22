import {render} from '@testing-library/react';
import {ESGDatepicker} from '../ESGDatepicker';

describe('<ESGDatepicker />', () => {
    test('it should mount', () => {
        render(<ESGDatepicker date='2024/03/15'/>);
    });
});
