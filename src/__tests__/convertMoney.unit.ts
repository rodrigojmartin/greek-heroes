/// <reference types="jest" />
import {convertMoney} from '../Utils';
import nastyStrings from '../../blns.json'

describe('convert money unit tests', ()=> {

    test('handles 0', () =>{
        expect(convertMoney('0')).toBe('0.00');
    });
    test('handles integers', () =>{
        expect(convertMoney('1')).toBe('1.00');
    });

    test('handles numbers wih 1 decimal', () =>{
        expect(convertMoney('1.1')).toBe('1.10');
    });

    test('handles numbers wih more than 2 decimals', () =>{
        expect(convertMoney('568.55555556')).toBe('568.56');
    });

    test('handles big numbers', () =>{
        expect(convertMoney('123456789')).toBe('123 456 789.00');
    });

    test('handles negative numbers', () =>{
        expect(convertMoney('-1000')).toBe('-1 000.00');
    });
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
