// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

const rl = require("./readline.js");

rl.question("Please enter a number: ", (answer) => {
    const result = findLargestPrimeFactor(parseInt(answer));
    console.log(`Result: ${ result }`);
    rl.close();
});

findLargestPrimeFactor = (input) => {

}