import "./cartPage.css";

const fragmentCartPage = document.createDocumentFragment();
export const divCartPage = document.createElement("div");
divCartPage.classList.add("cart-page");
fragmentCartPage.appendChild(divCartPage);

const emptyCart = document.createElement("h1");
emptyCart.classList.add("h1");
emptyCart.textContent = "Cart is Empty!";
divCartPage.appendChild(emptyCart);

// document.querySelector("main")?.appendChild(fragmentCartPage);
