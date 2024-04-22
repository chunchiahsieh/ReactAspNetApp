import {render} from '@testing-library/react';
import {PageLogin} from '../PageLogin';

describe('<PageLogin />', () => {
    test('it should render', () => {
        render(<PageLogin title='test' stAccount='您的帳號' stBCLoginFail='登入失敗' stBCtoFillFields='請填完所有欄位' stForgetPassword='忘記密碼' stLogin='登入' stPassword='密碼' />);
    });
});
