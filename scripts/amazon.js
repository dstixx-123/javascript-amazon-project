import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";

let productsHTML = "";

products.forEach((productsArray) => {
  productsHTML += `                                            
     <div class="product-container"> 
        <div class="product-image-container">
          <img class="product-image" src="${productsArray.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${productsArray.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="images/ratings/rating-${productsArray.rating.stars * 10}.png">
          <div class="product-rating-count link-primary">
            ${productsArray.rating.count}
          </div>
        </div>

        <div class="product-price">
          $${(productsArray.priceCents / 100).toFixed(2)}
        </div>
        <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary add-to-cart"
        data-products-array-id="${productsArray.id}">
          Add to Cart
        </button>
      </div>
    `;
  //   console.log(html);
});

function calculateTotalQuantity() {
  let totalCartQuantity = 0; //       Store Total Quantity;

  cart.forEach((cartItem) => {
    totalCartQuantity += cartItem.quantity;
  });

  // cart.push({
  //   productName: button.dataset.nameOfProduct,
  //   quantity: 1,
  // });

  document.querySelector(".js-cart-quantity").innerHTML = totalCartQuantity;
}

document.querySelector(".products-grid").innerHTML = productsHTML;
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productsArrayId = button.dataset.productsArrayId;

    addToCart(productsArrayId); // adds the products to the cart
    calculateTotalQuantity(); // calculates and updates the cart quantity on the page.
  });
});
