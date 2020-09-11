/// <reference types="jest" />

import { convertMoney} from './utils';

test('a', () => {
    expect(convertMoney('0')).toBe('0.00')
});