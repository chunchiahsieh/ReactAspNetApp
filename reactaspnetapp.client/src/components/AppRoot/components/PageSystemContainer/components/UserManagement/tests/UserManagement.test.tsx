import {render} from '@testing-library/react';
import {UserManagement} from '../UserManagement';

describe('<UserManagement />', () => {
    test('it should render', () => {
        render(<UserManagement />);
    });
});
