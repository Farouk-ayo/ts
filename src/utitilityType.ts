// partial utility type

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "comp science",
  title: " Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

// Required and readonly utitlity type
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  //send to database, etc
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  //   verified: true,
};

// assignVerified.grade = 88;

console.log(recordAssignment({ ...assignGraded, verified: true }));

// record utitlity type
const hexaColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "sara" | "kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";
const finalGrades: Record<Students, LetterGrades> = { sara: "B", kelly: "U" };

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  sara: { assign1: 85, assign2: 93 },
  kelly: { assign1: 76, assign2: 10 },
};

// Pick and OMit
type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "k1234",
  grade: 86,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k124",
  title: "Final Project",
};
