const formTitle = document.getElementById("form-title");
const confirmPasswordContainer = document.getElementById("confirm-password-container");
const submitButton = document.getElementById("submit");
const toggleLink = document.getElementById("toggle-link");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

function toggleAuth() {
  const isLoginForm = formTitle.textContent === "Login";
  formTitle.textContent = isLoginForm ? "Sign Up" : "Login";
  submitButton.textContent = isLoginForm ? "Sign Up" : "Login";
  toggleLink.textContent = isLoginForm ? "Login" : "Sign Up";
  confirmPasswordContainer.style.display = isLoginForm ? "block" : "none";
}

const users = [];

function login(username, password) {
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    alert("Successfully login!");
  }
  else {
    alert("User not found. Please sign up first.");
  }
}

function signUp(username, password, confirmPassword) {
  if (password !== confirmPassword) {
    alert("Passwords don't match.");
  }
  else {
    users.push({ username, password });
    alert("Sign up successful! You can now log in.");
    toggleAuth();
  }
}

function handleSubmit() {
  const isLoginForm = formTitle.textContent === "Login";
  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*\.\/]).*$/);
  const validPassword = regex.test(password);

  if (isLoginForm) {
    if (!username || !password) {
      alert("Please enter a username and password.");
    }
    else {
      login(username, password);
    }
  }
  else {
    if (validPassword) {
      signUp(username, password, confirmPassword);
    }
    else {
      alert("Password must contain at least one uppercase letter, one lowercase letter, one digit and one special character.");
    }
  }
}