const buttons = document.querySelectorAll(".add-cart");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  buttons.forEach((button) => {
    button.addEventListener("click", () => {

      const card = button.closest(".book-card");

      const title = card.querySelector("h3").innerText;
      const author = card.querySelector(".author").innerText;
      const price = card.querySelector(".price").innerText;

      const image = card.querySelector("img").src;

     
      const book = {
        title: title,
        author: author,
        price: price,
        image: image  
      };

      cart.push(book);

      localStorage.setItem("cart", JSON.stringify(cart));

      alert(title + " added to cart 🛒");
    });
  });