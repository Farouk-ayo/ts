// type parameter type variable
const echo = <T>(arg: T): T => arg;

const isObject = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObject(true));
console.log(isObject("John"));
console.log(isObject([1, 2, 3, 4, 5]));
console.log(isObject({ name: "John" }));
console.log(isObject(null));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return {
      arg,
      is: false,
    };
  }
  if (isObject(arg) && !Object.keys(arg as keyof T).length) {
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

// using interface
interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return {
      value: arg,
      is: false,
    };
  }
  if (isObject(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

// using interface again
interface HasID {
  id: number;
}

// applying the extends
const processUser = <T extends HasID>(user: T): T => {
  // PROCESS USER
  return user;
};
console.log(processUser({ id: 1, name: "David" }));
// this wont work because we didnt pass the id in the hasid interface
// console.log(processUser({ name: "David" }));

const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
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
class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const;
