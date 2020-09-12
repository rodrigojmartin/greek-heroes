/// <reference types="jest" />
import {convertMoney} from '../Utils';
import nastyStrings from '../../blns.json'

describe('convert money unit tests', ()=> {


test('handles infinity', () =>{
expect(convertMoney('Infinity')).toBe('∞');
});

test('handles - infinity', () =>{
    expect(convertMoney('-Infinity')).toBe('-∞');
    });

//Check the function handles each nasty string in blns.json
nastyStrings.forEach(element => {
    test(`the string ${element} returns not a number`, () =>{
        expect(convertMoney(`${element}`)).toBe('not a number');
    }
    )}
);
});
