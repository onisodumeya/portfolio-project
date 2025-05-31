
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("userId");
    window.location.href = "./index.html"
})