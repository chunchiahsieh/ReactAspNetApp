import {render} from '@testing-library/react';
import {ESGListbox} from '../ESGListbox';

describe('<ESGListbox />', () => {
    test('it should mount', () => {
        render(<ESGListbox data={{name:"test", children:[]}}/>);
    });
});
