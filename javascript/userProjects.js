document.addEventListener("DOMContentLoaded", fetchUserProjects);

async function fetchUserProjects() {
  const contentGrid = document.getElementById("contentGrid");
  contentGrid.innerHTML = ""
  // const userId = localStorage.getItem("userId");
  try {
    const response = await fetch(
      "https://jodna-portfolio.onrender.com/project/user",
      {
        method: "GET",
        credentials: "include",
      }
    );

    const result = await response.json();
    // console.log(result);

    if (response.ok) {
      const projects = result.data.project;
      // console.log(projects);
      


      projects.forEach((project) => {
        // console.log(project);

        const div = document.createElement("div");
        div.setAttribute("class", "project");
        div.classList.add("square");
        const tagsHTML = project.tech
          .map((tech) => `<p class="design tag-size tag-padding">${tech}</p>`)
          .join("");

        div.innerHTML = `
                  <a href="./details.html" class="eplore-content">
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




async function fetchSavedProjects() {
  const contentGrid = document.getElementById("contentGrid");
  contentGrid.innerHTML = "";

  try {
    const response = await fetch(
      "https://jodna-portfolio.onrender.com/project/all",
      {
        method: "GET",
        credentials: "include",
      }
    );

    const result = await response.json();
    const projects = result.data.projects;

    if (response.ok) {
      const contentGrid = document.getElementById("contentGrid");
      projects.forEach((project) => {
        const div = document.createElement("div");
        div.setAttribute("class", "project square");

        const tagsHTML = project.tech
          .map((tech) => `<p class="design tag-size tag-padding">${tech}</p>`)
          .join("");

        div.innerHTML = `
          <button class="save-project-btn" data-id="${project._id}">
            <i class="fa-solid fa-heart" style="color: inherit"></i>
          </button>
          <a href="./details.html" class="eplore-content">
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

      // Highlight saved projects
      const projectBtns = document.querySelectorAll(".save-project-btn");

      const savedRes = await fetch(
        "https://jodna-portfolio.onrender.com/item/all",
        {
          method: "GET",
          credentials: "include",
        }
      );

      const savedResult = await savedRes.json();
      const savedItems = savedResult.data.savedItems;

      console.log(savedItems);

      const savedProjectIds = new Set(
        savedItems.map((item) => item.project._id)
      );

      projectBtns.forEach((button) => {
        const id = button.getAttribute("data-id");

        if (savedProjectIds.has(id)) {
          button.style.color = "red";
          button.style.borderColor = "red";
          button.style.borderWidth = "1px";
          button.style.borderStyle = "solid";
        }
        document.querySelectorAll(".square").forEach((card) => {
          const button = card.querySelector(".save-project-btn");
          const id = button?.getAttribute("data-id");

          if (id && savedProjectIds.has(id)) {
            card.style.display = "block"; // Show saved project
          } else {
            card.style.display = "none"; // Hide unsaved project
          }
        });
      });
    } else {
      console.error("Failed to fetch projects:", result.message);
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchUserProjects);

// Save button click
document.addEventListener("click", async (event) => {
  const button = event.target.closest(".save-project-btn");

  if (button) {
    const projectId = button.getAttribute("data-id");

    if (!projectId) return console.log("No project ID");

    try {
      const response = await fetch(
        `https://jodna-portfolio.onrender.com/item/save/${projectId}`, // Make sure this matches your backend route
        {
          method: "POST",
          credentials: "include",
        }
      );

      const contentType = response.headers.get("content-type");
      const result = contentType?.includes("application/json")
        ? await response.json()
        : await response.text();

      if (response.ok) {
        button.style.color = "red";
        button.style.borderColor = "red";
        button.style.borderWidth = "1px";
        button.style.borderStyle = "solid";
        alert("Project saved successfully!");
      } else {
        alert("Failed to save project: " + result.message);
      }
    } catch (error) {
      console.error("Save failed:", error);
      alert("Something went wrong.");
    }
  }
});

















const sections = document.querySelectorAll(".sections");

sections.forEach(section => {
  section.addEventListener("click", () => {
    const sect = section.textContent;
    console.log(sect);

    if (sect === "Saved Items") {
      
      fetchSavedProjects()

    } else if (sect === "My Work"){

      fetchUserProjects()

    } else if (sect === "Draft"){

      let contentGrid = document.getElementById("contentGrid")
      contentGrid.innerHTML = ""  
    }
    
  })
})