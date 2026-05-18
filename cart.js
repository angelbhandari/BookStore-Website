let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartList = document.querySelector(".cart-items-list");
const totalPriceEl = document.querySelector(".cart-row.total span:last-child");

let discount = 0;


function displayCart() {
  cartList.innerHTML = "";
  let total = 0;

  const itemCountEl = document.querySelector(".cart-row span");
  const itemsPriceEl = document.querySelectorAll(".cart-row span")[1];

  if (cart.length === 0) {
    cartList.innerHTML = "<p>Your cart is empty </p>";
    itemCountEl.innerText = "Items (0)";
    itemsPriceEl.innerText = "₹0";
    totalPriceEl.innerText = "₹0";
    return;
  }

  cart.forEach((item, index) => {
    const priceNumber = parseInt(item.price.replace("₹", ""));
    total += priceNumber;

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <div class="cart-item-img">
        <img src="${item.image}">
      </div>
      <div class="cart-item-info">
        <h3>${item.title}</h3>
        <p class="author">${item.author}</p>
        <p class="cart-item-price">${item.price}</p>
      </div>
      <button onclick="removeItem(${index})"></button>
    `;

    cartList.appendChild(div);
  });

  const finalTotal = total - discount;


  itemCountEl.innerText = `Items (${cart.length})`;
  itemsPriceEl.innerText = "₹" + total;     
  totalPriceEl.innerText = "₹" + finalTotal;
}


function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}


const couponInput = document.querySelector(".coupon-row input");
const couponBtn = document.querySelector(".coupon-row button");

couponBtn.addEventListener("click", () => {
  const code = couponInput.value.trim().toUpperCase();

  if (code === "SAVE10") {
    discount = 100;
    alert("Coupon Applied! ₹100 OFF ");
  } else if (code === "BOOK20") {
    discount = 200;
    alert("Coupon Applied! ₹200 OFF ");
  } else {
    discount = 0;
    alert("Invalid Coupon ");
  }

  displayCart();
});

const payBtn = document.querySelector(".pay-btn");

payBtn.innerText = "Place Order →";

payBtn.addEventListener("click", () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    alert("Please login first to place order ");
    window.location.href = "login.html";
    return;
  }

  if (cart.length === 0) {
    alert("Your cart is empty ");
    return;
  }

  alert(" Order Placed Successfully!");

  cart = [];
  localStorage.removeItem("cart");
  discount = 0;

  displayCart();
});



document.querySelectorAll(".add-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".book-card");

    const title = card.querySelector("h3").innerText;
    const author = card.querySelector(".author").innerText;
    const price = card.querySelector(".price").innerText;
    const image = card.querySelector("img").src;

    cart.push({ title, author, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
    alert(title + " added to cart 🛒");
  });
});



displayCart();
