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

// Rest parameters
// it must always be at the last the rest paramters
const total = (a: number, ...nums: number[]): number => {
  return (
    a +
    nums.reduce((prev, curr) => {
      console.log(prev, curr);
      return prev + curr;
    })
  );
};

logMsg(total(2, 4, 5, 5, 6, 7, 3));

// automatically the error comes with a never type
const createError = (errMsg: string) => {
  throw new Error(errMsg);
};

// you can as well set it to never
// const createError = (errMsg: string): never => {
//   throw new Error(errMsg);
// };

// also for infinite loop

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

// custom guard type
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// the use of never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return createError("This should never happen!");
};

// type casting or type assertions
type One = string;
type Two = string | number;
type Three = "hello";

// converting to more or less speicfic
let a1: One = "hello";
let b1 = a as Two; //less specific
let c1 = a1 as Three; //more specific

// this cant be used in react
let d1 = <One>"world";
let e1 = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

// BE CAREFUL TS SEES NO PROBLEM HERE ---BUT A STRING IS RETURNED
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// this will not work
// 10 as string;

// double casting or foward casting or two assertions
10 as unknown as string;

// THE DOM
const img = document.querySelector("img");
const myImg = document.getElementById("#Img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img");
