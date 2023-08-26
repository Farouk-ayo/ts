// ORIGINAL JS CODE
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;

// TRANSFORM INTO TS using first varitaion
let year: HTMLElement | null;
year = document.getElementById("year");
let thisYear: string;
thisYear = new Date().getFullYear().toString();

// because the year can read a null value
if (year) {
  year.setAttribute("datetime", thisYear);
  year.textContent = thisYear;
}

// using the 2nd variation using type assertion
const year2 = document.getElementById("year") as HTMLSpanElement;
const thisYear2: string = new Date().getFullYear().toString();
year2.setAttribute("datetime", thisYear2);
year2.textContent = thisYear2;
