"use strict";
function add(n1, n2) {
    return n1 + n2;
}
// void型
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 12));
// コールバック関数の型
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
});
let combineValues; //関数型
combineValues = add;
console.log(combineValues(8, 8));
