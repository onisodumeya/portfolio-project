const signUpBtn = document.getElementById("signUpBtn");
const firstName = document.getElementById("firstname").value;
const lastName = document.getElementById("lastname").value;
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const emailMessage = document.getElementById("emailMessage");

email.addEventListener("input", () => {
  const emailValue = emailInput.value;
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

  if (emailInput === "") {
    emailMessage.textContent = "";
  } else if (!isValid) {
    emailMessage.textContent = "Invalid email address";
    emailMessage.style.color = "red";
  }else{
    emailMessage.textContent = "";
  }
});

const passwordMessage = document.getElementById("passwordMessage");

confirmPassword.addEventListener("input", () => {
  const confirmPasswordInput = confirmPassword.value;
  const passwordValue = password.value

  if (confirmPasswordInput === passwordValue) {
    passwordMessage.textContent = "";
}else if(passwordValue === "" && confirmPasswordInput == ""){
    passwordMessage.textContent = "";
  } else{
    passwordMessage.textContent = "Passwords do not match";
    passwordMessage.style.color = "red";
  }
});

async function registerUser() {
  const firstname = document.getElementById("firstname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const response = await fetch(
      "https://jodna-portfolio.onrender.com/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({firstname, lastname, email, password})
      }
    );

    const data = await response.json();
    // console.log(data.data.user._id);
    

    if (response.ok) {
      window.location.href = "./login.html"
      console.log("Login successful:", data);
    } else {
      console.error("Login failed:", data.message);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
}

const img = document.getElementById("arrow")
const spinner = signUpBtn.querySelector(".spinner");
const btnText = document.getElementById("btnText")

// console.log(btnText.textContent);

signUpBtn.addEventListener("click", () => {
  registerUser();
  
    spinner.classList.remove("hidden");
    btnText.textContent = "Registering...";
    img.style.display = "none";
});