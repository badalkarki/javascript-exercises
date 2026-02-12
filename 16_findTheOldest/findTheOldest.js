const getAge = function (death, birth) {
    if(!death) {
        death = 
    }
}

const findTheOldest = function (arr) {
  return arr.reduce((acc, initialObj) => {
    let accAge;
    let initialObjAge;
    if (!acc.yearOfDeath && !initialObj.yearOfDeath) {
      accAge = new Date().getFullYear() - acc.yearOfBirth;
      initialObjAge = new Date().getFullYear() - initialObj.yearOfBirth;
    } else if (!acc.yearOfDeath) {
      accAge = new Date().getFullYear() - acc.yearOfBirth;
      initialObjAge = initialObj.yearOfDeath - initialObj.yearOfBirth;
    } else if (!initialObj.yearOfDeath) {
      accAge = acc.yearOfDeath - acc.yearOfBirth;
      initialObjAge = new Date().getFullYear() - initialObj.yearOfBirth;
    } else {
      accAge = acc.yearOfDeath - acc.yearOfBirth;
      initialObjAge = initialObj.yearOfDeath - initialObj.yearOfBirth;
    }

    if (accAge > initialObjAge) {
      return acc;
    } else {
      return initialObj;
    }
  });
};

// Do not edit below this line
module.exports = findTheOldest;
