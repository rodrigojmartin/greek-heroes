describe('Greek heroes calculation', () => {
    
  beforeEach(() => {
    cy.visit('/');
  })
  
  it('transforms 2310000.159897 to 2 310 000.16', () => {
    cy.get('[data-test="inputNumber"]').type('2310000.159897');
    cy.get('[data-test="submitButton"]').click();
    cy.contains('Result is 2 310 000.16')
  })

  it('transforms 1600 to 1600.00', () => {
    cy.get('[data-test="inputNumber"]').type('1600');
    cy.get('[data-test="submitButton"]').click();
    cy.contains('Result is 1 600.00')
  });

  it('transforms 0 to 0.00', () => {
    cy.get('[data-test="inputNumber"]').type('0');
    cy.get('[data-test="submitButton"]').click();
    cy.contains('Result is 0.00')
  });

  it('transforms -1000000 to -1 000 000.00', () => {
    cy.get('[data-test="inputNumber"]').type('-1000000');
    cy.get('[data-test="submitButton"]').click();
    cy.contains('Result is -1 000 000.00')
  });

  it('throws an error when the user enters non numbers', () => {
    cy.get('[data-test="inputNumber"]').type('Camila');
    cy.get('[data-test="submitButton"]').click();
    cy.contains('Result is not a number')
  });

  it('transforms a scientific e notation', () => {
    cy.get('[data-test="inputNumber"]').type('3.456e6');
    cy.get('[data-test="submitButton"]').click();
    cy.contains('Result is 3 456 000.00')
  });


});

export {}; //Little hack needed because isolatedModules is true in tsconf