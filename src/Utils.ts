export const convertMoney = (numberToConvert: string): string => {
    const number = parseFloat(numberToConvert);
    if (isNaN(number)) {
        return 'not a number';
    } else {
        const displayResult = number.toLocaleString('fr-FR', { minimumFractionDigits: 2 }).replace(',', '.');
        return displayResult;
    }
};
