const fileInput = document.getElementById("file")
const uploadBox = document.getElementById("uploadBox");
const previewImage = document.getElementById("placeholderImg");
const span = document.querySelectorAll("span")
const continueBtn = document.getElementById("continue")

let file

fileInput.addEventListener("change", function (){
    file = this.files[0];

    if(file){
        // console.log(file);
            
        const reader = new FileReader();
        
        reader.onload = function (e) {

            file = e.target.result;
            

            previewImage.src = e.target.result;
            previewImage.style.height = "70%"

            span.forEach(s =>{
                s.style.display = "none"
            })
        }
        reader.readAsDataURL(file);
    } else {
        console.log("No file selected");
        
    }
})

continueBtn.addEventListener("click", () => {
    window.location.href = "./project-description.html"
    localStorage.setItem("image", file)
})