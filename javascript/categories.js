var option;

categories.forEach((category) => {
  category.addEventListener("click", () => {
    option = category.firstChild;

    categories.forEach((c) => {
      c.classList.remove("active");
      const cImg = c.querySelector("img");

      if (cImg)
        cImg.setAttribute("src", "./Assets/icons/right-facing-arrow.png");
    });

    const isAlreadyActive = category.classList.contains("active");

    if (!isAlreadyActive) {
      category.classList.add("active");
      const img = category.querySelector("img");
      if (img)
        img.setAttribute("src", "./Assets/icons/right-facing-arrow-white.png");
    }
  });
});
