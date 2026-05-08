const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill in all fields 📚");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    alert("Invalid email or password ❌");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));

  alert("Welcome back " + user.name + " 📚");

  // 🔁 Redirect to homepage
  window.location.href = "index.html";
});


const rememberCheckbox = document.querySelector("input[name='remember']");

rememberCheckbox.addEventListener("change", () => {
  if (rememberCheckbox.checked) {
    localStorage.setItem("remember", "true");
  } else {
    localStorage.removeItem("remember");
  }
});


window.addEventListener("load", () => {
  const remembered = localStorage.getItem("remember");
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (remembered === "true" && currentUser) {
    alert("Welcome back " + currentUser.name + " 📖");
  }
});