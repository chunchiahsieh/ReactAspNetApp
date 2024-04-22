import {render} from '@testing-library/react';
import {ESGButton} from '../ESGButton';

describe('<ESGButton />', () => {
    test('it should mount', () => {
        render(<ESGButton txt=""/>);
    });
});
