const getAge = function (death, birth) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function (arr) {
  return arr.reduce((acc, initialObj) => {
    let accAge = getAge(acc.yearOfDeath, acc.yearOfBirth);
    let initialObjAge = getAge(initialObj.yearOfDeath, initialObj.yearOfBirth);

    if (accAge > initialObjAge) {
      return acc;
    } else {
      return initialObj;
    }
  });
};

// Do not edit below this line
module.exports = findTheOldest;
