const sharePortfolio = document.querySelector(".share")

const img = sharePortfolio.firstChild.nextSibling;

sharePortfolio.addEventListener("mouseenter", () => {
  sharePortfolio.classList.add("share-active");

  img.setAttribute("src", "./Assets/icons/right-arrow-white.png");
  
})


sharePortfolio.addEventListener("mouseleave", () => {
  sharePortfolio.classList.remove("share-active");

  img.setAttribute("src", "./Assets/icons/right-arrow.png");
});