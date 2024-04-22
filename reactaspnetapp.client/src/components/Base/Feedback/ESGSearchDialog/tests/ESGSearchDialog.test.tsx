import {ESGSearchDialog} from '../ESGSearchDialog';
import { render } from '@testing-library/react';

describe('<ESGSearchDialog />', () => {
    it('should render', () => {
        const renderOne = render(<ESGSearchDialog open/>);
        expect(renderOne).toBeTruthy();
    });
});
