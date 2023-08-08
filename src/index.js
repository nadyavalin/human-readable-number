module.exports = function toReadable (number) {
    const digits = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    
    if (number === 0) {
        return "zero";
    } else if (number <= 10) {
        return digits[number];
    } else if (number <= 20) {
        return teens[number - 10];
    } else if (number < 100) {
        const tenDigit = Math.floor(number / 10);
        const unitDigit = number % 10;
        return `${tens[tenDigit]} ${digits[unitDigit]}`.trim();
    } else {
        const hundredDigit = Math.floor(number / 100);
        const tenRemainder = number % 100;
        const readableRemainder = (tenRemainder > 0) ? `${toReadable(tenRemainder)}` : '';
        return `${digits[hundredDigit]} hundred ${readableRemainder}`.trim();
    }
}