const checkbox = document.querySelectorAll(".check");
const checkFill = document.querySelectorAll(".check-fill");
const checkBorder = document.querySelectorAll(".custom-checkbox");

let filterText;

checkbox.forEach((check, index) => {
  check.addEventListener("click", () => {
    checkFill[index].classList.toggle("check-fill-block");
    checkBorder[index].classList.toggle("check-border-green");

    filterText = check.lastChild;

    console.log(filterText);
    
    
  });
});


const filter = document.getElementById("filter");
const filterSection = document.getElementById("filterSection");
const closeFilter = document.getElementById("closeFilterBtn");
const closeFilterDisplay = document.getElementById("closedFilterDisplay");
const firstRow = document.getElementById("firstRow");

const rightSection = document.getElementById("rightSection");


const categories = document.querySelectorAll(".item");

document.addEventListener("DOMContentLoaded", () => {
  categories.forEach((category) => {
    if (category.textContent === "All") {
      category.classList.add("active");

      const img = category.querySelector("img");

      if (img)
        img.setAttribute("src", "./Assets/icons/right-facing-arrow-white.png");
    }
  });
});

const windowWidth = window.innerWidth;
const smfilter = document.getElementById("filterSmallScreens");

let intervalId

if(windowWidth <= 800){

  smfilter.addEventListener("click", () => {
    backgroundCover.style.display = "block";
    document.body.style.overflow = "hidden";
    filter.style.display = "flex";

    // Use setTimeout instead of setInterval if it's a one-time movement
    intervalId = setTimeout(() => {
      filter.style.left = "0px";
      filter.style.top = "0px";
    }, 200);
  });

  closeFilter.addEventListener("click", () => {
    filter.style.left = "-100%";

    
    setTimeout(() => {
      filter.style.display = "none";
      backgroundCover.style.display = "none";
      document.body.style.overflow = "scroll";
    }, 200);
  });

}else{
  closeFilter.addEventListener("click", () => {
    filterSection.classList.add("filter-section-closed");
    filter.classList.add("filter-closed");
    filter.style.position = "absolute";
    closeFilterDisplay.style.display = "flex";
    rightSection.classList.add("right-section-filter-closed");
    firstRow.classList.add("first-row-filter-closed");
    contentGrid.classList.add("content-grid-closed-filter");
    contentGrid.style.alignItems = "end";
  });

  closeFilterDisplay.addEventListener("click", () => {
    filterSection.classList.remove("filter-section-closed");
    filter.classList.remove("filter-closed");
    filter.style.position = "relative";
    rightSection.classList.remove("right-section-filter-closed");
    firstRow.classList.remove("first-row-filter-closed");
    contentGrid.classList.remove("content-grid-closed-filter");
    closeFilterDisplay.style.display = "none";
  });
}