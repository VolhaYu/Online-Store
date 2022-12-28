import { emptyCart, divCartPage, cartWrapper, showInCart } from "./CartPage/cartPage";
import { products } from "./assets/data/productsData";
import { addToCartButton, divDescriptiontPage } from "./descriptionPage/productDescription";

export const buttunToCart = document.querySelectorAll(".button-to-cart");
// console.log(buttunToCart);
const cartCounter = document.querySelector(".shoping-cart__number") as HTMLElement;
const headerTotal = document.querySelector(".header__p") as HTMLElement;
let counter = 0;
let totalCounter = 0;

(function getCartCounter() {
  for (let i = 0; i < buttunToCart.length; i++) {
    buttunToCart[i].addEventListener("click", () => {
      emptyCart.style.display = "none";
      divCartPage.appendChild(cartWrapper);
      buttunToCart[i].classList.toggle("button-to-cart-active");
      showInCart(i);
      if (buttunToCart[i].textContent === "add to cart") {
        buttunToCart[i].textContent = "in cart";
        counter = counter + 1;
        totalCounter = totalCounter + Number(products[i].price);
      } else {
        buttunToCart[i].textContent = "add to cart";
        counter = counter - 1;
        totalCounter = totalCounter - Number(products[i].price);
      }
      cartCounter.textContent = `${counter}`;
      headerTotal.textContent = `Grand total: $${totalCounter}`;
      console.log(counter);
      // return counter;
    });
  }
})()

export function getCartCounterDescription(n: number) {
  if (document.querySelector("main")?.appendChild(divDescriptiontPage)) {
    addToCartButton.addEventListener("click", () => {
      addToCartButton.classList.toggle("button-to-cart-active");
      if (addToCartButton.textContent === "in cart") {
        addToCartButton.textContent = "add to cart";
        counter = counter - 1;
        totalCounter = totalCounter - Number(products[n].price);
      } else {
        addToCartButton.textContent = "in cart";
        counter = counter + 1;
        totalCounter = totalCounter + Number(products[n].price);
      }
      buttunToCart[n].textContent = addToCartButton.textContent;
      buttunToCart[n].classList.toggle("button-to-cart-active");
      cartCounter.textContent = `${counter}`;
      headerTotal.textContent = `Grand total: $${totalCounter}`;
    });
  }
}
// getCartCounterDescription();
