/// <reference types="jest" />
import {convertMoney} from './utils';
import Sinkdweller from 'sinkdweller';

//Load the list of nasty strings to be tested
const nastyStrings: string[] = require("../blns.json");

//For each entry, create a test and check that the function returns a string
nastyStrings.forEach(element => {
test(`test the input ${element}`, () => {
            let fuzzer = new Sinkdweller();
            let data = Buffer.from(element);
            let result = fuzzer.fuzzSync(data);
            let resultString = result.toString('utf8'); 
            expect(typeof convertMoney(resultString)).toBe('string');          
        });
});
