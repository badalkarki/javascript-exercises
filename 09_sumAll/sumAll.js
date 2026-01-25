const sumAll = function(value1,value2) {
    let sum = 0;
    if (value1 < 0 || value2 < 0) {
       return "ERROR";
    }else if (typeof value1 !== "number" || typeof value2 !== "number") {
        return "ERROR";
    } else if (!Number.isInteger(value1) || !Number.isInteger(value2)) {
        return "ERROR";
    }
    else {
    if (value1 < value2) {
        for (let i = value1 ; i <= value2; i++){
            sum += i;
        }
    } else {
        for (let i = value1; i>=value2; i--) {
            sum += i;
        }
    }
    return sum;
}
};

console.log(sumAll(4,1));

// Do not edit below this line
module.exports = sumAll;
