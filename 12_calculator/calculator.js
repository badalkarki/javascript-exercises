const add = function (num1, num2) {
  return num1 + num2;
};
console.log(add(0, 0));

const subtract = function (num1, num2) {
  return num1 - num2;
};
subtract(2, 6);

const sum = function (arr) {
  return arr.reduce((acc, nextNum) => acc + nextNum, 0);
};

sum([7, 11]);

const multiply = function (arr) {
  return arr.reduce((acc, nextValue) => acc * nextValue, 1);
};
multiply([2, 3]);

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  // let factorial = 1;
  if (num == 0) {
    return 1;
  } else if (num == 1) {
    return 1;
  } else {
    for (let i = num - 1; i >= 1; i--) {
     num *= i;

    }
    return num;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
