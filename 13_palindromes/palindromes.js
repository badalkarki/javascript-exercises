const palindromes = function (words) {
    const spacelessLetter = words.replaceAll(" ", "").split("");
    const reverseWord= spacelessLetter.reverse().join("");
    console.log(reverseWord)
    return (words == reverseWord);
};
palindromes("racecar!");
// Do not edit below this line
module.exports = palindromes;
