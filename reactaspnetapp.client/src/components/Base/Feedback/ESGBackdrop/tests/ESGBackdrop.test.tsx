import {render} from '@testing-library/react';
import {ESGBackdrop} from '../ESGBackdrop';

describe('<ESGBackdrop />', () => {
    test('it should render', () => {
        render(<ESGBackdrop onClose={()=>{}}/>);
    });
});
