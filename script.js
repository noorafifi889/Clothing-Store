const container = document.getElementById("products-container");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    let product = data;
    console.log(product);
    data.forEach((product) => {
      const card = document.createElement("div");
      card.className = "col";
      let title = product.title;
      if (title.length > 30) {
        title = title.substring(0, 30) + "...";
      }
      card.innerHTML = `
        <a href="product.html?id=${product.id}" class="product" target="_blank" style="text-decoration: none; color: black;">
          <div class="card h-100">
            <img src="${product.image}" class="p-4 img-fluid d-flex justify-content-center" alt="${product.title}" style="object-fit: cover; height: 200px; margin-left:auto ; margin-right:auto">
            <div class="card-body">
              <h5 class="fs-6">${title}</h5>
              <p class="card-text">${product.price} $</p>
              <p class="text-black-50">Product Code: ${product.id}</p>
              <div class="icon fs-4 d-flex justify-content-between align-items-center mr-5" style="margin-right: 16%">
                <a href="#" class="icon-style add-cart" data-id="${product.id}"><i class="bi bi-cart-check icon-style"></i></a>
                <a href="#" class="icon-style"><i class="bi bi-heart icon-style"></i></a>
                <a href="#" class="icon-style"><i class="bi bi-share icon-style"></i></a>
              </div>
            </div>
          </div>
        </a>
      `;
      container.appendChild(card);
    });
    // let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cart_icon = document.getElementById("cart-icon");
    let count = 0;
    console.log(cart_icon);
    // الآن أضف الأحداث لجميع الأزرار
    const addCartButtons = document.querySelectorAll(".add-cart");

    addCartButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        count++;
        cart_icon.innerHTML = `<i class="bi bi-cart"></i>` + " (" + count + ")";
      });
      // localStorage.setItem("cart", JSON.stringify(cartArray));
    });
  })
  .catch((err) => console.error("حدث خطأ أثناء جلب البيانات:", err));
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function addItemToCart(product) {
  let cart = [];
  let rows = document.getElementsByClassName("row-1");
  let cart_info = document.createElementNS("cart-info");
  cart_info.innerHTML = ` <img id="cart-img" src="img/190781.jpg" alt="" width="100px" height="100px">
             <div id="cart-title" class="title fw-bold">Labptop</div>
             <div id="cart-price" class="price fw-bold">100$ </div>
            <button id="delete-btn" class="btn btn-danger fw-bold">delete</button>
             `;
  rows.appendChild(cart_info);
}
