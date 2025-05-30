document.addEventListener("DOMContentLoaded", () => {
    const userId = localStorage.getItem("userId")

    if(!userId){
        alert("Please login to continue.")
        window.location.href = "./login.html"
    }
})