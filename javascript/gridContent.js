async function fetchUserProjects() {
  // const userId = localStorage.getItem("userId");
  try {
    const response = await fetch("https://jodna-portfolio.onrender.com/project/all",
      {
        method: "GET",
        credentials: "include"
      });

    const result = await response.json(); 
    // console.log(result);
       

    if (response.ok) {
      const projects = result.data.projects;

      const contentGrid = document.getElementById("contentGrid");

      projects.forEach((project) => {
        console.log(project);

        const div = document.createElement("div");
        div.setAttribute("class", "project");
        div.classList.add("square");
        const tagsHTML = project.tech
          .map((tech) => `<p class="design tag-size tag-padding">${tech}</p>`)
          .join("");

        div.innerHTML = `<a href="./details.html" class="eplore-content">
                  <div class="img" style="background-image: url('${project.project_image.image_url}');"></div>
                    <h4 style="font-weight: 700;">${project.project_name}</h4>
                    <div class="tags">${tagsHTML}</div>
                    <div class="info">
                      <p style="color: inherit;">${project.project_duration}</p>
                      <p style="color: inherit;">${project.total_views} views</p>
                    </div>
                  </a>`;

        contentGrid.appendChild(div);
      });

      // console.log(result.data.project);
      // displayProjects(result.data.projects);
    } 
    else {
      console.error("Failed to fetch projects:", result.message);
      // alert("Failed to fetch projects: " + result.message);
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchUserProjects);