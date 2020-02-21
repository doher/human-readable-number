const NUMBERS = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred'
};

module.exports = function toReadable(number) {
    let strNumber = number + '';
    let lengthOfNumber = strNumber.length;
    let message = [];

    if (lengthOfNumber === 3) {
        message.push(NUMBERS[strNumber[0]]);
        message.push(NUMBERS['100']);

        if (number % 100) {
            number = number % 100;
            strNumber = number + '';
            lengthOfNumber = strNumber.length;
        }
    }

    if (lengthOfNumber === 2 && number > 20) {
        message.push(NUMBERS[strNumber[0] + '0']);

        if (number % 10) {
            message.push(NUMBERS[strNumber[1]]);
        }
    }

    if (lengthOfNumber === 1 || number <= 20) {
        message.push(NUMBERS[number]);
    }

    return message.join(' ');
}
