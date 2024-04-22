import {render} from '@testing-library/react';
import {AppRoot} from '../AppRoot';
import {describe, test} from 'vitest';
import 'i18next_main.ts';

describe('<AppRoot />', () => {
    test('it should mount', () => {
        render(<AppRoot />);
    });
});
