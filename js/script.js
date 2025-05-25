let navBar = true;

document.querySelector(".navbar-menu-btn").addEventListener("click", ()=> {

    if (navBar === true) {
        document.querySelector(".navbar-items-mob").style.display = "none";
        navBar = false;
    } else {
        document.querySelector(".navbar-items-mob").style.display = "block";
        navBar = true;
    }
})

let profDetails = true;

document.querySelector("#profile-btn").addEventListener("click", ()=> {
    if (profDetails === true) {
        document.querySelector(".profile").style.display = "none";
        profDetails = false;
    } else {
        document.querySelector(".profile").style.display = "block";
        profDetails = true;
    }
})
