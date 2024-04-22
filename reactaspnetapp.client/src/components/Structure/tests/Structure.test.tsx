import {render} from '@testing-library/react';
import {Structure} from '../Structure';
import {describe, test} from 'vitest';

describe('<Structure />', () => {
    test('it should render', () => {
        render(<Structure data={{name:"test"}}/>);
    });
});
