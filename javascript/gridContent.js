const exploreImages = [
  "./Assets/images/explore-img-1.png",
  "./Assets/images/explore-img-2.png",
  "./Assets/images/explore-img-3.png",
  "./Assets/images/explore-img-4.png",
  "./Assets/images/explore-img-5.png",
  "./Assets/images/explore-img-6.png",
  "./Assets/images/explore-img-7.png",
  "./Assets/images/explore-img-8.png",
];

const contentGrid = document.getElementById("contentGrid");

exploreImages.forEach(image => {
  const div = document.createElement("div");
  div.setAttribute("class", "project")
  div.classList.add("square");
  div.innerHTML = `<a href="./details.html" class="eplore-content">
          <div class="img" style="background-image: url('${image}');"></div>
            <h4 style="font-weight: 700;">UX Design Fundamentals</h4>
            <div class="tags">
              <p class="design tag-size tag-padding">Design</p>
              <p class="beginner tag-size tag-padding">Design</p>
              <p class="tutorial tag-size tag-padding">Design</p>
            </div>
            <div class="info">
              <p style="color: inherit;">25 mins</p>
              <p style="color: inherit;">890 views</p>
            </div>
          </a>`;

  contentGrid.appendChild(div);
});

// const project = document.querySelectorAll(".project")

// const arr = []

// project.forEach(p => {
//   p.addEventListener("click", () => {
//     console.log(p);

//     arr.push(p)

//     console.log(arr);
    
//   })
  
// })