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

const closeFilterBtn = document.getElementById("closeFilterBtn");
const filter = document.getElementById("filter")
const filterSection = document.getElementById("filterSection")
const filterHead = document.getElementById("filterHead")
const filterIcon = document.getElementById("filterIcon")

closeFilterBtn.addEventListener("click", () => {
  filter.classList.remove("filter")
  filter.classList.add("filter-closed")
  filter.style.height = "fit-content"
  closeFilterBtn.style.display = "none"
  filterHead.classList.remove("filter-head");
  filterHead.classList.add("filter-head-closed");
  filterIcon.style.display = "block"
})

filterHead.addEventListener("click", () => {
    filter.classList.remove("filter-closed");
    filter.classList.add("filter");
    closeFilterBtn.style.display = "block";
    filterHead.classList.remove("filter-head-closed");
    filterHead.classList.add("filter-head");
    filterIcon.style.display = "none";
  
})