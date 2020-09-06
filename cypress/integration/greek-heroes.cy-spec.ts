describe('x', () => {
    it('transforms 2310000.159897 to 2 310 000.16', () => {
      cy.visit('http://localhost:3000');
      cy.get('[data-test="inputNumber"]').type("2310000.159897");
      cy.get('[data-test="submitButton"]').click();
      cy.get('[data-test="result"]').should('have.value', '2 310 000.16');
  });
});

export {}; //Little hack needed because isolatedModules is true in tsconf