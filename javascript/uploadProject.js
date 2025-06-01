const input = document.getElementById("tech");
let tech = [];

const uploadBtn = document.getElementById("upload");

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === ",") {
        e.preventDefault();
        const value = input.value.trim().replace(/,$/, "");
        if (value && !tech.includes(value)) {
            tech.push(value);
            displayTools();
            input.value = "";
        }
    }
});

function displayTools() {
    document.getElementById("toolList").textContent = tech.join(", ");
}

async function uploadProject() {
    const project_name = document.getElementById("projectName").value;
    const project_image = localStorage.getItem("image")
    const period = document.getElementById("period").value;
    const count = document.getElementById("count").value;
    const project_description = document.getElementById("description").value;
    const project_url = document.getElementById("url").value;    

    try {
        const response = await fetch(
          "https://jodna-portfolio.onrender.com/project/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              project_name,
              project_image,
              period,
              count,
              project_description,
              project_url,
            }),
          }
        );

          const result = await response.json();

          if (response.ok) {
            console.log("Project uploaded successfully", result);
            alert("Your project has been uploaded successfully");
            window.location.href = "./explore.html";
          } else {
            console.error("Upload failed:", result);
            alert("Upload failed: " + result.message);
          }
    } catch (error) {
        console.error("Error uploading project:", error);
        alert("Something went wrong!");
    }
}


uploadBtn.addEventListener("click", () => {
    uploadProject()
})