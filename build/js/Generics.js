"use strict";
// type parameter type variable
const echo = (arg) => arg;
const isObject = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObject(true));
console.log(isObject("John"));
console.log(isObject([1, 2, 3, 4, 5]));
console.log(isObject({ name: "John" }));
console.log(isObject(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return {
            arg,
            is: false,
        };
    }
    if (isObject(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "DAVE" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return {
            value: arg,
            is: false,
        };
    }
    if (isObject(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
// applying the extends
const processUser = (user) => {
    // PROCESS USER
    return user;
};
console.log(processUser({ id: 1, name: "David" }));
// this wont work because we didnt pass the id in the hasid interface
// console.log(processUser({ name: "David" }));
const getUsersProperty = (users, key) => {
    return users.map((user) => user[key]);
};
const users = [
    {
        id: 1,
        name: "adeola",
        email: "mustaphafarouk41@gmail.com",
    },
    {
        id: 2,
        name: "Bisi",
        email: "faroukayo41@gmail.com",
    },
];
console.log(getUsersProperty(users, "email"));
// Generic in class;
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John");
console.log(store.state);
const storeStr = new StateObject("John");
// storeStr.state=(43)
console.log(store.state);
const storeState = new StateObject([15]);
storeState.state = ["Dave", 43, true];
console.log(storeState.state);
