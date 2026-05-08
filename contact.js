// const form = document.querySelector("form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const fname = document.getElementById("fname").value.trim();
//   const lname = document.getElementById("lname").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const phone = document.getElementById("phone").value.trim();
//   const subject = document.getElementById("subject").value;
//   const order = document.getElementById("order").value.trim();
//   const message = document.getElementById("message").value.trim();


//   if (
//     fname === "" ||
//     lname === "" ||
//     email === "" ||
//     phone === "" ||
//     subject === "" ||
//     message === ""
//   ) {
//     alert("Please fill all required fields ⚠️");
//     return;
//   }

  
//   const newMessage = {
//     fname,
//     lname,
//     email,
//     phone,
//     subject,
//     order,
//     message
//   };

//   // 🔸 Get existing messages
//   let messages = JSON.parse(localStorage.getItem("messages")) || [];

//   // 🔸 Add new message
//   messages.push(newMessage);

//   // 🔸 Save back to localStorage
//   localStorage.setItem("messages", JSON.stringify(messages));

//   alert("Message saved successfully 📩");

//   // 🔸 Reset form
//   form.reset();
// });

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fname = document.getElementById("fname").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value.trim();

  if (!fname || !lname || !email || !phone || !subject || !message) {
    alert("Please fill all required fields ⚠️");
    return;
  }

  // Save message (optional)
  const messages = JSON.parse(localStorage.getItem("messages")) || [];

  messages.push({
    fname,
    lname,
    email,
    phone,
    subject,
    message,
    date: new Date().toISOString()
  });

  localStorage.setItem("messages", JSON.stringify(messages));

  alert("Message sent successfully ✅📩");

  // ⭐ THIS is the important part
  form.reset();
});