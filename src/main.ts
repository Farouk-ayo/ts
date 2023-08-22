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
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

// interface method
interface GuitaristInterface {
  name: string;
  active?: boolean;
  albums: (string | number)[];
}

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

const guitaristFtn = (guitarist: Guitarist) => {
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

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
console.log(Grade.D);
console.log(Grade.A);

// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = stringOrNumber[];

type Guitar = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// type and interface
// difference is just that type with any alias while interface is just for object ,classes

// interface PostId = stringOrNumber

// Literal types
let myFirstName: "Dave";

// i can also use the type alias here
let userName: "Dave" | "John" | "Amy";
userName = "Amy";

// functions
// addition
const add = (a: number, b: number): number => {
  return a + b;
};

// void is used when your code does not return anything
const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello");
logMsg(add(2, 3));

// subtraction
let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;
// using the interface approach
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));

// optional parameter
// the position of the  "?" optional parameter needs to come last
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
