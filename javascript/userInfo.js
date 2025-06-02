const userName = document.querySelectorAll(".name");
const firstName = localStorage.getItem("firstname");
const lastName = localStorage.getItem("lastname");

userName.forEach(user => {
    user.textContent = firstName + " " + lastName;
})

const first = document.getElementById("first");
const last = document.getElementById("last");

first.textContent = firstName
last.textContent = lastName