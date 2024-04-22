import {render} from '@testing-library/react';
import {ESGTable} from '../ESGTable';
import 'i18next_main';

describe('<ESGTable />', () => {
    test('it should mount', () => {
        render(<ESGTable header={[]} rows={[]} title={"test"}/>);
    });
});
