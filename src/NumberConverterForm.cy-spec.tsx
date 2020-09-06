/// <reference types="cypress" />

import { mount } from 'cypress-react-unit-test';
import NumberConverterForm from './NumberConverterForm';
import * as React from 'react';

describe('NumberConverterForm', () => {
    describe('Clicking the transform button', () => {
        it('Updates the result field', () => {
            mount(<NumberConverterForm />);
            
            cy.get('[data-test="inputNumber"]').type("2310000.159897");
            cy.get('[data-test="submitButton"]').click();
            cy.get('[data-test="result"]').should('have.value', '2 310 000.16');

        })

    })

})


