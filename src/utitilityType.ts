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

// exclude and extract
// they work with string union type

type adjustedGrade = Exclude<LetterGrades, "U">;

type highGrades = Extract<LetterGrades, "A" | "B">;

// NonNullable
type AllPossibleGrade = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrade>;

// return Type

// type newAssign = {
//   title: string;
//   points: number;
// };
const createNewAssign = (title: string, points: number) => {
  return {
    title,
    points,
  };
};

type NewAssign = ReturnType<typeof createNewAssign>;
const tsAssign: NewAssign = createNewAssign("Utility types", 100);

console.log(tsAssign);

// parameters
type AssignParams = Parameters<typeof createNewAssign>;
const assignArgs: AssignParams = ["Generic", 100];
const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// awaited utility , works with promise fetching of datas
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

fetchUsers().then((users) => console.log(users));
