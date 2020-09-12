import { inputData } from '../../src/Utils';

describe('Greek heroes calculation', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('rounds numbers with more than 2 decimals to 2 decimals', () => {
        inputData('2310000.159897');
        cy.contains('Result is 2 310 000.16');
    });

    it('adds 2 fixed decimals even if the number is an integer', () => {
        inputData('1600');
        cy.contains('Result is 1 600.00');
    });

    it('handles 0', () => {
        inputData('0');
        cy.contains('Result is 0.00');
    });

    it('handles negative numbers', () => {
        inputData('-1000000');
        cy.contains('Result is -1 000 000.00');
    });

    it('throws an error message when the user enters non numbers', () => {
        inputData('Camila');
        cy.contains('Result is not a number');
    });

    it('transforms a scientific e notation correctly', () => {
        inputData('3.456e6');
        cy.contains('Result is 3 456 000.00');
    });
});

//export {}; //Little hack needed when isolatedModules was set to true in tsconf