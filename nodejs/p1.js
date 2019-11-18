// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
const rl = require("./readline.js");

rl.question("Please enter a number: ", (answer) => {
    const result = findMultiples(parseInt(answer));
    console.log(`Result: ${ result }`);
    rl.close();
});

findMultiples = (input) => {
    const multiples = [...Array(input).keys()].filter(int => int % 3 === 0 || int % 5 === 0);
    return multiples.reduce((a, b) => a + b, 0);
}