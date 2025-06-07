const userName = document.querySelectorAll(".name");
const personName = localStorage.getItem("firstname");
const surname = localStorage.getItem("lastname");


const firstLetterFN = personName.slice(0, 1).toUpperCase();
const otherLettersFN = personName.slice(1, personName.length);

const firstLettersLN = surname.slice(0, 1).toUpperCase();
const otherLettersLN = surname.slice(1, surname.length);

userName.forEach(user => {
    user.textContent =
      personName.slice(0, 1).toUpperCase() +
      personName.slice(1, personName.length) +
      " " +
      surname.slice(0, 1).toUpperCase() +
      surname.slice(1, surname.length);
})

const first = document.getElementById("first");
const last = document.getElementById("last");

first.textContent = firstLetterFN + otherLettersFN
last.textContent = firstLettersLN + otherLettersLN