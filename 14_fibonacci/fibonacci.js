const fibonacci = function(num) {
    const fibonacciArr = [];
    if(num === 0 || num === "0") return 0;
    if(num < 0) return "OOPS";
    for(let i = 0; i < num; i++){
        if(fibonacciArr.length == 0 || fibonacciArr.length == 1) {
            fibonacciArr.push(1);
        } else{
            let nextNum = fibonacciArr[fibonacciArr.length - 1] + fibonacciArr[fibonacciArr.length - 2];
            fibonacciArr.push(nextNum)
        }
    }
    return fibonacciArr[num - 1];
};
console.log(fibonacci(4));


// Do not edit below this line
module.exports = fibonacci;
