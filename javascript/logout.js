const logoutBtn = document.getElementById("logoutBtn")


logoutBtn.addEventListener("mouseenter", () => {
  logoutBtn.firstElementChild.setAttribute(
    "src",
    "./Assets/icons/logout-icon-white.png"
  );
});
logoutBtn.addEventListener("mouseleave", () => {
  logoutBtn.firstElementChild.setAttribute(
    "src",
    "./Assets/icons/logout-icon.png"
  );
});


async function logoutUser() {
  try {
    const response = await fetch(
      "https://jodna-portfolio.onrender.com/auth/logout",
      {
        
        method: "GET",
        credentials: "include",
        
      }
    );

    if (response.ok) {

      localStorage.removeItem("firstname");
      localStorage.removeItem("image");
      localStorage.removeItem("lastname");
      localStorage.removeItem("userId");
      sessionStorage.clear();


      window.location.href = "./index.html";
    } else {
      console.error("Logout failed");
    }
  } catch (error) {
    console.error("Error logging out:", error);
  }
}


logoutBtn.addEventListener("click", () => {
    logoutUser()
})