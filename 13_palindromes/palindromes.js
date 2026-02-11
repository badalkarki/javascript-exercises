const palindromes = function (words) {
    const onlyLetters = words.toLowerCase().replaceAll(" ", "").replaceAll("!", "").replaceAll(",", "").replaceAll(".", "");
    const spacelessLetter = words.toLowerCase().replaceAll(" ", "").replaceAll("!", "").replaceAll(",", "").replaceAll(".", "").split("");
    const reverseWord= spacelessLetter.reverse().join("");
    console.log(reverseWord)
    return ( onlyLetters == reverseWord);
};
palindromes("racecar!");
// Do not edit below this line
module.exports = palindromes;
