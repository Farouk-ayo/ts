"use strict";
// index signatures
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
const todaysTransactions = {
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
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: "Dough",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key} :${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key} : ${student[key]}`);
};
logStudentKey(student, "GPA");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
