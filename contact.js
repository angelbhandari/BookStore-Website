

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  console.log(fname, lname, email, phone, subject, message);

  if (
    !fname ||
    !lname ||
    !email ||
    !phone ||
    !subject ||
    !message
  ) {
    alert("Please fill all required fields");
    return;
  }

  const messages =
    JSON.parse(localStorage.getItem("messages")) || [];

  messages.push({
    fname,
    lname,
    email,
    phone,
    subject,
    message,
    date: new Date().toISOString(),
  });

  localStorage.setItem("messages", JSON.stringify(messages));

  alert("Message sent successfully");

  form.reset();
});
