let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}


document.querySelectorAll(".add-cart").forEach((btn) => {
  btn.addEventListener("click", () => {

    const card = btn.closest(".book-card");

    const title = card.querySelector("h3").innerText;
    const author = card.querySelector(".author").innerText;
    const price = card.querySelector(".price").innerText;
    const image = card.querySelector("img").src;

    const item = { title, author, price, image };

    cart.push(item);
    saveCart();

    alert(title + " added to cart 🛒");
  });
});




const searchInput = document.querySelector(".search-bar input");
const genreSelect = document.querySelector(".search-bar select");
const bookCards = document.querySelectorAll(".book-card");

function filterBooks() {
  const searchText = searchInput.value.toLowerCase();
  const selectedGenre = genreSelect.value.toLowerCase();

  bookCards.forEach(card => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    const author = card.querySelector(".author").innerText.toLowerCase();

    const matchesSearch =
      title.includes(searchText) || author.includes(searchText);

    const matchesGenre =
      !selectedGenre || card.innerText.toLowerCase().includes(selectedGenre);

    card.style.display = (matchesSearch && matchesGenre) ? "block" : "none";
  });
}


searchInput.addEventListener("input", filterBooks);
genreSelect.addEventListener("change", filterBooks);

document.querySelector(".search-bar button")
  .addEventListener("click", filterBooks);

document.querySelectorAll(".tag").forEach(tag => {
  tag.addEventListener("click", () => {
    searchInput.value = tag.innerText;
    filterBooks();
  });
});
