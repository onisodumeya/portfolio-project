const project_name = document.getElementById("projectName").value;
const project_image = localStorage.getItem("image")
const project_description = document.getElementById("description").value;
const period = document.getElementById("duration").value;
const project_url = document.getElementById("url");
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

uploadBtn.addEventListener("click", () => {
    
    
})