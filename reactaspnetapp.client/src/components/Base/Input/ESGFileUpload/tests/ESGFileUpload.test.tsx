import {render} from '@testing-library/react';
import {ESGFileUpload} from '../ESGFileUpload';

describe('<ESGFileUpload />', () => {
    test('it should mount', () => {
        render(<ESGFileUpload txt='upload'/>);
    });
});
