/// <reference types="cypress" />

import { mount } from 'cypress-react-unit-test';
import NumberConverterForm from './NumberConverterForm';
import * as React from 'react';



describe('NumberConverterForm', () => {

    describe('Clicking the transform button', () => {
        it('Updates the result field', () => {
            const handleOnSave = cy.stub()
            mount(<NumberConverterForm onSave={handleOnSave}/>);
            
            cy.get('[data-test="inputNumber"]').type("2310000.159897");
            cy.get('[data-test="submitButton"]').click().then(() => {
                expect(handleOnSave).to.have.been.calledWith("2310000.159897");
            });
            
        })

    })
})


