// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const rl = require("./readline.js");

rl.question("Please enter the number of digits: ", (answer) => {
    const result = findLargestPalindomeProduct(parseInt(answer));
    console.log(`Result: ${ result }`);
    rl.close();
});

findLargestPalindomeProduct = (numDigits) => {
    const MAX = Math.pow(10, numDigits);
    let largestPalindome = 0;
    for (var i = 0; i < MAX; i++) {
        for (var y = 0; y < MAX; y++) {
            const stringProduct = ''+i*y;
            if (stringProduct[0] !== stringProduct[stringProduct.length-1]) {
                continue
            }
            if (isAllPalindromic(stringProduct) && (i*y > largestPalindome)) {
                largestPalindrome = i*y;
            }
        }
    }
    return largestPalindrome
}

isAllPalindromic = (stringProduct) => {
    console.log("Trying out palindrome", stringProduct)
    for (var s = 0; s < stringProduct.length; s++) {
        console.log(parseInt(stringProduct[s]), parseInt(stringProduct[stringProduct.length - (s + 1)]))
        if (parseInt(stringProduct[s]) !== parseInt(stringProduct[stringProduct.length - (s + 1)])) {
            console.log("CONTINUING!")
            return false
        }
    }
    return true
}