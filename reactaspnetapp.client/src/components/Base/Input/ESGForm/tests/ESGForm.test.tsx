import {render} from '@testing-library/react';
import {ESGForm} from '../ESGForm';

describe('<ESGForm />', () => {
    test('it should mount', () => {
        render(<ESGForm columns={[]}/>);
    });
});
