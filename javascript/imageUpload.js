const fileInput = document.getElementById("file")
const uploadBox = document.getElementById("uploadBox");
const previewImage = document.getElementById("placeholderImg");
const span = document.querySelectorAll("span")

fileInput.addEventListener("change", function (){
    const file = this.files[0];

    if(file){
        console.log(file);
            
        const reader = new FileReader();
        
        reader.onload = function (e) {

            previewImage.src = e.target.result;
            previewImage.style.height = "100%"

            span.forEach(s =>{
                s.style.display = "none"
            })
        }
        reader.readAsDataURL(file);
    } else {
        console.log("No file selected");
        
    }
})