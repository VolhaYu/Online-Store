import { emptyCart, divCartPage, cartWrapper, showInCart, removeInCart, productNumber, total } from "./CartPage/cartPage";
import { products } from "./assets/data/productsData";
import { addToCartButton, divDescriptiontPage } from "./descriptionPage/productDescription";

export const buttunToCart = document.querySelectorAll(".button-to-cart");
const cartCounter = document.querySelector(".shoping-cart__number") as HTMLElement;
const headerTotal = document.querySelector(".header__p") as HTMLElement;
let counter = 0;
let totalCounter = 0;
let counterInCart = 0;

(function getCartCounter() {
  for (let i = 0; i < buttunToCart.length; i++) {
    buttunToCart[i].addEventListener("click", () => {
      emptyCart.style.display = "none";
      divCartPage.appendChild(cartWrapper);
      if (buttunToCart[i].textContent === "Add to cart") {
        buttunToCart[i].textContent = "In cart";
        buttunToCart[i].classList.add("button-to-cart-active");
        addToCartButton.textContent = "In cart";
        addToCartButton.classList.add("button-to-cart-active");
        counter = counter + 1;
        totalCounter = totalCounter + Number(products[i].price);
        counterInCart += 1;
        showInCart(i);
      } else {
        buttunToCart[i].textContent = "Add to cart";
        addToCartButton.textContent = "Add to cart";
        buttunToCart[i].classList.remove("button-to-cart-active");
        addToCartButton.classList.remove("button-to-cart-active");
        counter = counter - 1;
        totalCounter = totalCounter - Number(products[i].price);
        counterInCart = counterInCart - 1;
      }
      cartCounter.textContent = `${counter}`;
      headerTotal.textContent = `Grand total: $${totalCounter}`;
      productNumber.textContent = `Products: ${counterInCart}`;
      total.textContent = `Total:${totalCounter}`;
      console.log(counterInCart);
      return counterInCart;
    });
  }
})()
console.log(counterInCart);

export function getCartCounterDescription(n: number) {
  if (document.querySelector("main")?.appendChild(divDescriptiontPage)) {
    addToCartButton.addEventListener("click", () => {
      if (addToCartButton.textContent === "In cart") {
        addToCartButton.textContent = "Add to cart";
        buttunToCart[n].textContent = "Add to cart";
        addToCartButton.classList.remove("button-to-cart-active");
        counter = counter - 1;
        totalCounter = totalCounter - Number(products[n].price);
        counterInCart -= 1;
      } else {
        addToCartButton.textContent = "In cart";
        buttunToCart[n].textContent = "In cart";
        addToCartButton.classList.add("button-to-cart-active");
        counter = counter + 1;
        totalCounter = totalCounter + Number(products[n].price);
        counterInCart += 1;
      }
      buttunToCart[n].textContent = addToCartButton.textContent;
      buttunToCart[n].classList.toggle("button-to-cart-active");
      cartCounter.textContent = `${counter}`;
      headerTotal.textContent = `Grand total: $${totalCounter}`;
      productNumber.textContent = `Products: ${counterInCart}`;
      total.textContent = `Total:${totalCounter}`;
      return counter;
    });
  }
}

