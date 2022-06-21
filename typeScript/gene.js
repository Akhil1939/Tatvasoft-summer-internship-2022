"use strict";
// normal
function myFun(data) {
    return data;
}
console.log(myFun({ name: "akhil", age: '20' }));
// generic
function myFun1(data) {
    return data;
}
console.log(myFun1({ name: "akhil", age: '20' }));
console.log(myFun1({ name: "ram", age: '22' }).age);
