
// logoutBtn.addEventListener("click", () => {
//     localStorage.removeItem("userId");
//     window.location.href = "./index.html"
// })


async function logoutUser() {
  try {
    const response = await fetch(
      "https://jodna-portfolio.onrender.com/auth/logout",
      {
        method: "POST",
        credentials: "include", // include cookies if you're using sessions
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${token}`, // if using token-based auth
        },
      }
    );

    if (response.ok) {
      // Clear cookies/localStorage/etc.
    //   clearAllCookies();
      localStorage.clear();
      sessionStorage.clear();

      // Redirect to login or homepage
      window.location.href = "login.html";
    } else {
      console.error("Logout failed");
    }
  } catch (error) {
    console.error("Error logging out:", error);
  }
}
