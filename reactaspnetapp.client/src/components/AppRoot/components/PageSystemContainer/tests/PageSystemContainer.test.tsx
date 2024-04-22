import {PageSystemContainer} from '../PageSystemContainer';
import {render} from '@testing-library/react';

describe('<PageSystemContainer />', () => {
    test('it should mount', () => {
        render(<PageSystemContainer path={"hello"}/>);
    });
});
