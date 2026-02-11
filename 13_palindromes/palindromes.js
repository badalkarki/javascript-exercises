// const palindromes = function (words) {
//     const onlyLetters = words.toLowerCase().replaceAll(" ", "").replaceAll("!", "").replaceAll(",", "").replaceAll(".", "");
//     const spacelessLetter = words.toLowerCase().replaceAll(" ", "").replaceAll("!", "").replaceAll(",", "").replaceAll(".", "").split("");
//     const reverseWord= spacelessLetter.reverse().join("");
//     console.log(reverseWord)
//     return ( onlyLetters == reverseWord);
// };

const palindromes = function (string) {
  const validAlpha = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleanedChar = string.toLowerCase().split("").filter((character) => {
    return validAlpha.includes(character);
  });
  console.log(cleanedChar)
  const cleanedString = cleanedChar.join("");
  const reverseString = cleanedChar.reverse().join("").toLowerCase();
  return cleanedString == reverseString;
};

palindromes("A car, a man, a maraca.");
palindromes("racecar!");
// Do not edit below this line
module.exports = palindromes;
