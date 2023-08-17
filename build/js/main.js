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
