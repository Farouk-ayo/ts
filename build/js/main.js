"use strict";
let farouk = "sapa";
console.log(farouk);
let myName = "Dave";
let meaningOfLife;
let isLoading;
// this is set implicitly to any type of parameter
let album;
// union type....
// let album: string | number;
// let album: string | number | boolean
myName = "John";
meaningOfLife = 42;
isLoading = true;
album = "Qari";
let a = 12;
let b = 13;
let c = 6;
console.log(a / b);
// explicit named parameter
const sum = (a, b) => {
    return a + b;
};
const sumString = (a, b) => {
    return a + b;
};
let postId;
let isActive;
// regular expression type
let re = /\w+/g;
// objects Arrays
let stringers = ["one", "hey", "dave"];
let guitars = ["stars", "les pauls", 5234];
let mixedData = ["ok", 1983, true];
stringers[0] = "goat";
stringers.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
let test = [];
let brands = [];
brands.push("van nisteroy");
// TUPLES
let myTuple = ["dave", 42, true];
// myTuple[3]=42   is wrong
// myTuple[1]=42  is right
let mixed = ["John", 1, false];
// cuz there is a possiblitiy that the mixed parameters are more than 3
mixed = myTuple;
// myTuple=mixed
// OBJECTS
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = brands;
myObj = {};
const example = {
    props1: "Dave",
    props2: true,
};
example.props1 = "John";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 512, "OU812"],
};
let jp = {
    name: "farouk",
    active: true,
    albums: ["1984", "512", "OU812"],
};
jp = evh;
console.log(jp);
const guitaristFtn = (guitarist) => {
    // a condition is used here to now accept the guitarist.name?.toLowerCase()
    if (guitarist.name) {
        return `Hello my name is ${guitarist.name.toUpperCase()}`;
    }
    return "Hello nigga";
};
console.log(guitaristFtn(jp));
// enums
// enums are not a type-level addition to javaScript but something added to the language and runtime
// enum Grade {
//   U,
//   D,
//   C,
//   B,
//   A
// }
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
console.log(Grade.D);
console.log(Grade.A);
// type and interface
// difference is just that type with any alias while interface is just for object ,classes
// interface PostId = stringOrNumber
// Literal types
let myFirstName;
// i can also use the type alias here
let userName;
userName = "Amy";
// functions
// addition
const add = (a, b) => {
    return a + b;
};
// void is used when your code does not return anything
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello");
logMsg(add(2, 3));
// subtraction
let subtract = function (c, d) {
    return c - d;
};
// using the interface approach
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameter
// the position of the  "?" optional parameter needs to come last
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
// Rest parameters
// it must always be at the last the rest paramters
const total = (a, ...nums) => {
    return (a +
        nums.reduce((prev, curr) => {
            console.log(prev, curr);
            return prev + curr;
        }));
};
logMsg(total(2, 4, 5, 5, 6, 7, 3));
// automatically the error comes with a never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// you can as well set it to never
// const createError = (errMsg: string): never => {
//   throw new Error(errMsg);
// };
// also for infinite loop
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
