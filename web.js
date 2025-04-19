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

const closeFilter = document.getElementById("closeFilter");
const filter = document.getElementById("filter")
const filterSection = document.getElementById("filterSection")

closeFilter.addEventListener("click", () => {
  filterSection.style.display = "none"
  filter.classList.remove("filter")
  filter.classList.add("filter-closed")
  filter.style.height = "fit-content"
})