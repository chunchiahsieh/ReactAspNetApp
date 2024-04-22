import {render} from '@testing-library/react';
import {describe, test} from 'vitest';
import {PageForgetPassword} from '../PageForgetPassword';
import 'i18next_main.ts';

describe('<PageForgetPassword />', () => {
    test('it should render', () => {
        render(<PageForgetPassword />);
    });
});
