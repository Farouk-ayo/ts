"use strict";
// partial utility type
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "comp science",
    title: " Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// Required and readonly utitlity type
const recordAssignment = (assign) => {
    //send to database, etc
    return assign;
};
const assignVerified = Object.assign({}, assignGraded);
// assignVerified.grade = 88;
console.log(recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true })));
// record utitlity type
const hexaColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = { sara: "B", kelly: "U" };
const gradeData = {
    sara: { assign1: 85, assign2: 93 },
    kelly: { assign1: 76, assign2: 10 },
};
const score = {
    studentId: "k1234",
    grade: 86,
};
const preview = {
    studentId: "k124",
    title: "Final Project",
};
