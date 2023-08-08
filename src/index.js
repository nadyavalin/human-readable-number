module.exports = function toReadable (number) {
    const digits = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    
    // если number равно 0, возвращаем zero;
    if (number === 0) {
        return "zero";
    // если number меньше или равно 10, возвращаем название цифры из переменной digits
    } else if (number <= 10) {
        return digits[number];
    // если number меньше или равно 20, возвращаем название цифры из переменной teens
    } else if (number <= 20) {
        return teens[number - 10]; // нужно отнять 10, чтобы полученное число соответствовало номеру в массиве teens
    // если number меньше 100
    } else if (number < 100) {
        const tenDigit = Math.floor(number / 10); //создаем переменную, где будет храниться второй разряд двухзначного числа
        const unitDigit = number % 10; // создаем переменную, где будет храниться остаток, т.е. первый разряд двухзначного числа
        return `${tens[tenDigit]} ${digits[unitDigit]}`.trim(); // возвращаем получившееся число словами, убрав в начале и конце лишние пробелы
    } else {
    // в остальных случаях, когда number больше 100
        const hundredDigit = Math.floor(number / 100); // создаем переменную, где будет храниться третий разряд трехзначного числа
        const tenRemainder = number % 100; // создаем переменную, где будет храниться остаток, т.е. второй и первый разряд трехзначного числа
    // создаем переменную, где выбираем: если значение переменной tenRemainder больше нуля, то делаем рекурсию функции
    // если значение переменной tenRemainder равно или меньше - ничего не добавляем
        const readableRemainder = (tenRemainder > 0) ? `${toReadable(tenRemainder)}` : '';
        return `${digits[hundredDigit]} hundred ${readableRemainder}`.trim(); // возвращаем получившееся число словами
    }
}