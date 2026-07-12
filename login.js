// Default admin credentials
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin123";

function handleLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const usernameError = document.getElementById("username-error");
  const passwordError = document.getElementById("password-error");
  const errorMsg = document.getElementById("error-msg");

  usernameError.textContent = "";
  passwordError.textContent = "";
  errorMsg.style.display = "none";

  let valid = true;

  if (username === "") {
    usernameError.textContent = "Username is required.";
    valid = false;
  }

  if (password === "") {
    passwordError.textContent = "Password is required.";
    valid = false;
  }

  if (!valid) return;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    localStorage.setItem("isLoggedIn", "true");
    alert("Login successful!");
  } else {
    errorMsg.textContent = "Incorrect username or password.";
    errorMsg.style.display = "block";
  }
}
