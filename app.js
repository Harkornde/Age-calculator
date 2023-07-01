"use strict";

const clicked = document.querySelector("button");
const dayInput = document.querySelector(".day-check");
const monthInput = document.querySelector(".month-check");
const yearInput = document.querySelector(".year-check");
const checkErrorDay = document.querySelector(".er-one");
const checkErrorMonth = document.querySelector(".er-two");
const checkErrorYear = document.querySelector(".er-three");
const validDate = document.querySelector(".er-sev");
const validMonth = document.querySelector(".er-six");
const validYear = document.querySelector(".er-five");
const yearCheck = document.querySelector(".er-four");
const yearError = document.querySelector(".er-eig");

const addYear = document.querySelector(".yrs");
const addMnth = document.querySelector(".mnth");
const addDys = document.querySelector(".dys");

clicked.addEventListener("click", function () {
  // Checking if no value is passed when the button is clicked
  //For month
  const day = +dayInput.value;
  const month = +monthInput.value;
  const year = +yearInput.value;
  const currentYear = new Date().getFullYear();

  const dateOfBirth = new Date(year, month - 1, day);
  const newDate = new Date();
  const diffInMilliseconds = newDate - dateOfBirth;

  const millisecondsInDay = 24 * 60 * 60 * 1000;
  const millisecondsInMonth = 30 * millisecondsInDay;
  const millisecondsInYear = 365 * millisecondsInDay;

  // Calculate the difference in years, months, and days
  const years = Math.floor(diffInMilliseconds / millisecondsInYear);

  const months = Math.floor(
    (diffInMilliseconds % millisecondsInYear) / millisecondsInMonth
  );

  const days = Math.floor(
    ((diffInMilliseconds % millisecondsInYear) % millisecondsInMonth) /
      millisecondsInDay
  );

  year === 0 && (checkErrorYear.style.visibility = "visible");

  month === 0 && (checkErrorMonth.style.visibility = "visible");

  day === 0 && (checkErrorDay.style.visibility = "visible");

  // Checking to know if the year is greater than current year

  year > currentYear && (yearCheck.style.display = "block");

  year < 0 && (validYear.style.display = "block");

  // Validating month
  (month > 12 || month < 0) && (validMonth.style.display = "block");

  //Cheking for a valid date for a particular input month
  const month31Day = [1, 3, 5, 7, 8, 10, 12];

  month31Day.forEach((x) => {
    ((month === x && day > 31) || (month === x && day < 1)) &&
      (validDate.style.display = "block");
  });

  const month30Day = [4, 6, 9, 11];

  month30Day.forEach((x) => {
    ((month === x && day > 30) || (month === x && day < 1)) &&
      (validDate.style.display = "block");
  });

  ((month === 2 && day > 29) || (month === 2 && day < 1)) &&
    (validDate.style.display = "block");

  //Confirming if all parameters are correct
  +newDate < +dateOfBirth &&
    ((yearError.style.display = "block"),
    (addMnth.textContent = "- -"),
    (addYear.textContent = "- -"),
    (addDys.textContent = "- -"));
  //Calulating All

  newDate > +dateOfBirth &&
    year <= currentYear &&
    year > 0 &&
    month <= 12 &&
    month > 0 &&
    day > 0 &&
    ((month === 1 && day < 31) ||
      (month === 2 && day <= 29) ||
      (month === 3 && day <= 31) ||
      (month === 4 && day <= 30) ||
      (month === 5 && day <= 31) ||
      (month === 6 && day <= 30) ||
      (month === 7 && day <= 31) ||
      (month === 8 && day <= 31) ||
      (month === 9 && day <= 30) ||
      (month === 10 && day <= 31) ||
      (month === 11 && day <= 30) ||
      (month === 12 && day <= 31)) &&
    ((addYear.textContent = years),
    (addMnth.textContent = months),
    (addDys.textContent = days));
});

yearInput.addEventListener("keydown", function () {
  checkErrorYear.style.visibility = "hidden";
  yearCheck.style.display = "none";
  validYear.style.display = "none";
  yearError.style.display = "none";
});

monthInput.addEventListener("keydown", function () {
  checkErrorMonth.style.visibility = "hidden";
  validMonth.style.display = "none";
  yearError.style.display = "none";
});

dayInput.addEventListener("keydown", function () {
  checkErrorDay.style.visibility = "hidden";
  validDate.style.display = "none";
  yearError.style.display = "none";
});