const exploreImages = [
  "./Assets/explore-img-1.png",
  "./Assets/explore-img-2.png",
  "./Assets/explore-img-3.png",
  "./Assets/explore-img-4.png",
  "./Assets/explore-img-5.png",
  "./Assets/explore-img-6.png",
  "./Assets/explore-img-7.png",
  "./Assets/explore-img-8.png"
];

const checkbox = document.querySelectorAll("#checkbox");
const checkFill = document.querySelectorAll(".check-fill");
const checkBorder = document.querySelectorAll(".custom-checkbox")

checkbox.forEach((check, index) => {
  check.addEventListener("click", () => {
    checkFill[index].classList.toggle("check-fill-block");
    checkBorder[index].classList.toggle("check-border-green");
  })
  
})

const filter = document.getElementById("filter");
const filterSection = document.getElementById("filterSection");
const closeFilter = document.getElementById("closeFilterBtn");
const closeFilterDisplay = document.getElementById("closedFilterDisplay");
const firstRow = document.getElementById("firstRow");
const contentGrid = document.getElementById("contentGrid")
const rightSection = document.getElementById("rightSection")

closeFilter.addEventListener("click", () => {
  filterSection.style.display = "none";
  filter.classList.add("filter-closed")
  filter.style.position = "absolute"
  closeFilterDisplay.style.display = "flex";
  firstRow.classList.add("first-row-filter-closed")
  contentGrid.classList.add("content-grid-closed-filter");
  contentGrid.style.alignItems = "end";
})

closeFilterDisplay.addEventListener("click", () => {
  filterSection.style.display = "flex";
  filter.classList.remove("filter-closed");
  filter.style.position = "relative";
  firstRow.classList.remove("first-row-filter-closed");
  contentGrid.classList.remove("content-grid-closed-filter");
  closeFilterDisplay.style.display = "none";
})