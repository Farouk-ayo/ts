"use strict";
// ORIGINAL JS CODE
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;
// TRANSFORM INTO TS using first varitaion
let year;
year = document.getElementById("year");
let thisYear;
thisYear = new Date().getFullYear().toString();
// because the year can read a null value
if (year) {
    year.setAttribute("datetime", thisYear);
    year.textContent = thisYear;
}
// using the 2nd variation using type assertion
const year2 = document.getElementById("year");
const thisYear2 = new Date().getFullYear().toString();
year2.setAttribute("datetime", thisYear2);
year2.textContent = thisYear2;
//////////////////////////////////////////////////////////////////
// CLASSES
class Coder {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
// to prevent redundancy codes we use this approach
class Coder2 {
    constructor(name, music, age, lang = "typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    //   calling the private property age is ok , since we are still inside of the class
    getAge() {
        return `Hello , I'm  ${this.age}`;
    }
}
const Dave = new Coder2("Dave", "Rock", 42);
console.log(Dave.getAge());
// check the errors here to read through the property changes
// console.log(Dave.age);
// console.log(Dave.lang);
class WebDev extends Coder2 {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `i write ${this.lang} with ${this.computer}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
class Guitarist2 {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist2("Jimmy", "guitar");
console.log(Page.play("strums"));
/////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
// instances of peeps
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Amy.id);
console.log(Steve.id);
console.log(John.id);
console.log(Peeps.count);
////////////////////////////////////////
// GETTERS AND SETTERS
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            // if we put the return before the this.dataState=value,,,,,,the error is that setters dont return a value
            this.dataState = value;
            return;
        }
        else
            throw new Error("Params is not an array of strings");
    }
}
// instantiating it now
const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
// MyBands.data = ["Van Helen", 23434];
