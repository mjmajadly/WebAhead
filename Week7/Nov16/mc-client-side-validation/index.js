const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errorDiv = document.querySelector("#errorDiv");
​
form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorDiv.innerHTML = "";
  if (password.value !== confirmPassword.value) {
    console.log("Password Do Not Match");
    password.style.border = "3px solid red";
    confirmPassword.style.border = "3px solid red";
    errorDiv.style.color = "red";
    errorDiv.style.fontWeight = "bold";
    errorDiv.textContent = "Passwords Do Not Match";
  } else if (password.value === confirmPassword.value) {
    console.log("Thanks for submitting");
  }
});