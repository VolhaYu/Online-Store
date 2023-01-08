import { emptyCart, divCartPage, cartWrapper, showInCart, getCount, inCart } from "./CartPage/cartPage";
import { products } from "./assets/data/productsData";
import { addToCartButton, divDescriptiontPage } from "./descriptionPage/productDescription";

export const buttunToCart = document.querySelectorAll(".button-to-cart");
const cartCounter = document.querySelector(".shoping-cart__number") as HTMLElement;
const headerTotal = document.querySelector(".header__p") as HTMLElement;
export let counter = 0;
export let totalCounter = 0;

export const objCart: { [key: string]: HTMLDivElement } = {};
console.log("hi");

(function getCartCounter() {
  for (let i = 0; i < buttunToCart.length; i++) {
    buttunToCart[i].addEventListener("click", () => {
      emptyCart.style.display = "none";
      divCartPage.appendChild(cartWrapper);
      console.log(`${i}` in objCart);
      if (`${i}` in objCart === false) {
        objCart[`${i}`] = showInCart(i);
        inCart.appendChild(objCart[`${i}`] as HTMLDivElement);
        console.log(objCart);
        buttunToCart[i].textContent = "In cart";
        buttunToCart[i].classList.add("button-to-cart-active");
        addToCartButton.textContent = "In cart";
        addToCartButton.classList.add("button-to-cart-active");
        counter = counter + 1;
        totalCounter = totalCounter + Number(products[i].price);
      } else {
        inCart.removeChild(objCart[`${i}`]);
        delete objCart[`${i}`];
        console.log(objCart);
        buttunToCart[i].textContent = "Add to cart";
        addToCartButton.textContent = "Add to cart";
        buttunToCart[i].classList.remove("button-to-cart-active");
        addToCartButton.classList.remove("button-to-cart-active");
        counter = counter - 1;
        totalCounter = totalCounter - Number(products[i].price);
      }
      cartCounter.textContent = `${counter}`;
      headerTotal.textContent = `Grand total: $${totalCounter}`;
      getCount(counter, totalCounter);
      if (counter === 0) {
        emptyCart.style.display = "block";
        divCartPage.removeChild(cartWrapper);
      }
      return counter;
    });
  }
})();

export function getCartCounterDescription(n: number) {
  console.log(n);
  if (document.querySelector("main")?.appendChild(divDescriptiontPage)) {
    addToCartButton.addEventListener("click", () => {
      console.log(`${n}` in objCart);
      if (`${n}` in objCart === true) {
        inCart.removeChild(objCart[`${n}`]);
        delete objCart[`${n}`];
        console.log(objCart);
        addToCartButton.textContent = "Add to cart";
        buttunToCart[n].textContent = "Add to cart";
        addToCartButton.classList.remove("button-to-cart-active");
        buttunToCart[n].classList.remove("button-to-cart-active");
        counter = counter - 1;
        totalCounter = totalCounter - Number(products[n].price);
      } else {
        objCart[`${n}`] = showInCart(n);
        inCart.appendChild(objCart[`${n}`] as HTMLDivElement);
        console.log(objCart);
        emptyCart.style.display = "none";
        divCartPage.appendChild(cartWrapper);
        addToCartButton.textContent = "In cart";
        buttunToCart[n].textContent = "In cart";
        addToCartButton.classList.add("button-to-cart-active");
        buttunToCart[n].classList.add("button-to-cart-active");
        counter = counter + 1;
        totalCounter = totalCounter + Number(products[n].price);
      }
      cartCounter.textContent = `${counter}`;
      headerTotal.textContent = `Grand total: $${totalCounter}`;
      getCount(counter, totalCounter);
      if (cartCounter.textContent === "0") {
        emptyCart.style.display = "block";
        divCartPage.removeChild(cartWrapper);
      }
      return counter;
    });
  }
  console.log(objCart);
}

