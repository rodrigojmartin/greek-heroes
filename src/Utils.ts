export const convertMoney = (numberToConvert: string): string => {
    const number = parseFloat(numberToConvert);
    if (isNaN(number)) {
        return 'not a number';
    } else {
        const displayResult = number.toLocaleString('fr-FR', { minimumFractionDigits: 2 }).replace(',', '.');
        return displayResult;
    }
};

export const inputData = (inputData: string): void => {
    cy.get('[data-test="inputNumber"]').type(inputData);
    cy.get('[data-test="submitButton"]').click();
};
