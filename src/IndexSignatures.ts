// index signatures

// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

interface TransactionObj {
  readonly [index: string]: number;

  Pizza: number;
  Books: number;
  Job: number;
}

// or

// interface TransactionObj {
//   // the readonly here for only calling
//   readonly [index: string]: number;
// }

// const todaysTransactions: TransactionObj = {
//   Pizza: -10,
//   Books: -5,
//   Job: 50,
// };

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Dave: 34,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
console.log(todaysTransactions["Dave"]);

// todaysTransactions.Pizza=40

// dynamically getting the data
let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransactions));

// another example
interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Dough",
  GPA: 3.5,
  classes: [100, 200],
};

// console.log(student.test);

for (const key in student) {
  console.log(`${key} :${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key} : ${student[key]}`);
};

logStudentKey(student, "GPA");

/////////////////////////////////////////////////
//////////////////////////////////////////////////
///////////////////////////// //////////////////////

//
type Streams = "salary" | "bonus" | "sidehustle";
type Incomes = Record<Streams, number>;
const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
