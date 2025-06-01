const loginBtn = document.getElementById("loginBtn");
const email = document.getElementById("email");
const password = document.getElementById("password");


async function loginUser() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(
      "https://jodna-portfolio.onrender.com/auth/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        
      }
    );

    const data = await response.json();
    console.log(data);
    

    if (data.message === "successful") {

      
      localStorage.setItem("firstname", data.data.user.fullname.firstname);
      localStorage.setItem("lastname", data.data.user.fullname.lastname);
      
      localStorage.setItem("userId", data.data.user._id);
      window.location.href = "./explore.html";
    }else{
      message.first
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("An error occurred while trying to log in.");
  }
}


const spinner = loginBtn.querySelector(".spinner");
const btnText = loginBtn.querySelector(".btn-text");

const img = btnText.nextElementSibling;

loginBtn.addEventListener("click", () => {
  loginUser();

  spinner.classList.remove("hidden");
  btnText.textContent = "Logging in...";
  img.style.display = "none";
})

