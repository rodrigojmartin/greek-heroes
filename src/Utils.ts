export function convertMoney(numberToConvert: string): string  {
        var number = parseFloat(numberToConvert);
        if (isNaN(number)) {
            return ('not a number');;
        }
        else {
            var displayResult = number.toLocaleString('fr-FR', { minimumFractionDigits: 2 }).replace(',', '.');
            return (displayResult);
        }
};
