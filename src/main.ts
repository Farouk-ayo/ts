let farouk: string = "sapa";
console.log(farouk);

let myName: string = "Dave";
let meaningOfLife: number;
let isLoading: boolean;

// this is set implicitly to any type of parameter
let album: any;

// union type....
// let album: string | number;
// let album: string | number | boolean

myName = "John";
meaningOfLife = 42;
isLoading = true;
album = "Qari";

let a: number = 12;
let b: number = 13;
let c: number = 6;

console.log(a / b);

// explicit named parameter
const sum = (a: number, b: number) => {
  return a + b;
};

const sumString = (a: number, b: string) => {
  return a + b;
};

let postId: string | number;
let isActive: number | boolean;

// regular expression type
let re: RegExp = /\w+/g;

// objects Arrays
let stringers = ["one", "hey", "dave"];
let guitars = ["stars", "les pauls", 5234];
let mixedData = ["ok", 1983, true];

stringers[0] = "goat";
stringers.push("hey");

guitars[0] = 1984;
guitars.unshift("Jim");

let test = [];
let brands: string[] = [];
brands.push("van nisteroy");

// TUPLES
let myTuple: [string, number, boolean] = ["dave", 42, true];
// myTuple[3]=42   is wrong
// myTuple[1]=42  is right

let mixed = ["John", 1, false];
// cuz there is a possiblitiy that the mixed parameters are more than 3

mixed = myTuple;
// myTuple=mixed

// OBJECTS
let myObj: object;
myObj = [];
console.log(typeof myObj);

myObj = brands;
myObj = {};

const example = {
  props1: "Dave",
  props2: true,
};

example.props1 = "John";

type Guitarist = {
  name: string;
  active?: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 512, "OU812"],
};

let jp: Guitarist = {
  name: "farouk",
  active: true,
  albums: ["1984", "512", "OU812"],
};

jp = evh;
console.log(jp);
