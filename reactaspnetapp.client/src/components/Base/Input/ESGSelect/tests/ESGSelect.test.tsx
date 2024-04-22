import {render} from '@testing-library/react';
import {ESGSelect} from '../ESGSelect';

describe('<ESGSelect />', () => {
    test('it should render', () => {
        render(<ESGSelect data={["a"]}/>);
    });
});
