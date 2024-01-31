function createFormatter(separator, symbol, symbolFirst, formatter) {
    // Returns a new function that partially applies the formatter function
    return function(value) {
        // Calls the formatter function with fixed parameters and the given value
        return formatter(separator, symbol, symbolFirst, value);
    };
}
function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

// Create a partially applied function using createFormatter
let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);

console.log(dollarFormatter(5345));   // Output: $ 5345,00
console.log(dollarFormatter(3.1429)); // Output: $ 3,14
console.log(dollarFormatter(2.709));  // Output: $ 2,71