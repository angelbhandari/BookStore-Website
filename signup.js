const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const exists = users.find(u => u.email === email);

  if (exists) {
    alert("User already exists ❌");
    return;
  }

  const newUser = { name, email, password };
  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created successfully 🎉");

  window.location.href = "login.html";
});