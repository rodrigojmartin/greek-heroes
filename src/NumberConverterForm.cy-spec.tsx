/// <reference types="cypress" />

import { mount } from 'cypress-react-unit-test';
import NumberConverterForm from './NumberConverterForm';
import * as React from 'react';

describe('NumberConverterForm', () => {
    describe('Clicking the transform button', () => {
        it('calls the parent function with the proper value', () => {
            const handleOnSave = cy.stub();
            mount(<NumberConverterForm onSave={handleOnSave} />);

            cy.get('[data-test="inputNumber"]').type('message');
            cy.get('[data-test="submitButton"]')
                .click()
                .then(() => {
                    expect(handleOnSave).to.have.been.calledWith('message');
                });
        });
    });
});
