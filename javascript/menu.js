const menuBtn = document.getElementById("menuBtn");
const navItems = document.getElementById("navItems");
const closeMenu = document.getElementById("closeMenu");
const backgroundCover = document.getElementById("backgroundCover");


menuBtn.addEventListener("click", () => {
    navItems.style.left = "0px"
    document.body.style.overflow = "hidden"
    backgroundCover.style.display = "block"
})

closeMenu.addEventListener("click", () => {
    navItems.style.left = "-100%"
    document.body.style.overflow = "scroll"
    backgroundCover.style.display = "none";
})