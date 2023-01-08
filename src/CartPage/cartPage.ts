import "./cartPage.css";
import { products } from "../assets/data/productsData";
import { objCart } from "../cartPageWork";

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   brand: string;
//   category: string;
//   thumbnail: string;
//   images: [string];
// }
const fragmentCartPage = document.createDocumentFragment();
export const divCartPage = document.createElement("div");
divCartPage.classList.add("cart-page");
fragmentCartPage.appendChild(divCartPage);

export const emptyCart = document.createElement("h1");
emptyCart.classList.add("h1");
emptyCart.textContent = "Cart is Empty!";
divCartPage.appendChild(emptyCart);

export const cartWrapper = document.createElement("div");
cartWrapper.classList.add("cart-wrapper");

export const inCart = document.createElement("div");
inCart.classList.add("in-cart");
cartWrapper.appendChild(inCart);

const productsInCart = document.createElement("div");
productsInCart.classList.add("products-in-cart");
inCart.appendChild(productsInCart);

const titleCart = document.createElement("h2");
titleCart.textContent = "Products In Cart";
productsInCart.appendChild(titleCart);

export function showInCart(n: number) {
  const inCartItem = document.createElement("div");
  inCartItem.classList.add("in-cart__item");

  const inCartPhoto = document.createElement("img");
  inCartPhoto.classList.add("in-cart__photo");
  inCartPhoto.src = products[n].thumbnail;
  inCartItem.appendChild(inCartPhoto);

  const inCartDescription = document.createElement("div");
  inCartDescription.classList.add("in-cart-description");
  inCartItem.appendChild(inCartDescription);

  const inCartTitle = document.createElement("h3");
  inCartTitle.classList.add("in-cart__title", "in-cart__text");
  inCartTitle.textContent = products[n].title;
  inCartDescription.appendChild(inCartTitle);

  const inCartInfo = document.createElement("p");
  inCartInfo.classList.add("in-cart__info", "in-cart__text");
  inCartInfo.textContent = products[n].description;
  inCartDescription.appendChild(inCartInfo);

  const inCartDiscont = document.createElement("p");
  inCartDiscont.classList.add("in-cart__discont", "in-cart__text");
  inCartDiscont.textContent = `Discont: $${products[n].discountPercentage}`;
  inCartDescription.appendChild(inCartDiscont);

  const inCartRating = document.createElement("p");
  inCartRating.classList.add("in-cart__rating", "in-cart__text");
  inCartRating.textContent = `Rating: ${products[n].rating}`;
  inCartDescription.appendChild(inCartRating);

  const inCartStock = document.createElement("p");
  inCartStock.classList.add("in-cart__stock", "in-cart__text");
  inCartStock.textContent = `Stock: ${products[n].stock}`;
  inCartDescription.appendChild(inCartStock);

  const inCartPrice = document.createElement("p");
  inCartPrice.classList.add("in-cart__price", "in-cart__text");
  inCartPrice.textContent = `Price: $${products[n].price}`;
  inCartDescription.appendChild(inCartPrice);

  let amount = 1;

  const numberControl = document.createElement("div");
  numberControl.classList.add("number-control");
  inCartItem.appendChild(numberControl);

  const buttonPlus = document.createElement("button");
  buttonPlus.classList.add("button-plus", "button");
  buttonPlus.textContent = "+";
  numberControl.appendChild(buttonPlus);

  buttonPlus.addEventListener("click", () => {
    number.textContent = `${amount += 1}`;
    console.log("click", amount);
  });

  const number = document.createElement("p");
  number.classList.add("number-amount");
  number.textContent = `${amount}`;
  numberControl.appendChild(number);

  const buttonMinus = document.createElement("button");
  buttonMinus.classList.add("button-minus", "button");
  buttonMinus.textContent = "-";
  numberControl.appendChild(buttonMinus);

  buttonMinus.addEventListener("click", () => {
    number.textContent = `${amount -= 1}`;
    console.log("click", amount);
    if (amount === 0) {
      const counter = document.querySelector(".shoping-cart__number") as HTMLElement;
      counter.textContent = `${Number(counter.textContent) - 1}`;
      console.log(counter.textContent);
      inCart.removeChild(inCartItem);
      delete objCart[`${n}`];
      console.log(objCart);
      if (counter.textContent === "0") {
        emptyCart.style.display = "block";
        divCartPage.removeChild(cartWrapper);
      }
    }
  });
  return inCartItem;
}

const totalSum = document.createElement("div");
totalSum.classList.add("total-sum");
cartWrapper.appendChild(totalSum);

export const productNumber = document.createElement("p");
productNumber.classList.add("product-number");
totalSum.appendChild(productNumber);

export const total = document.createElement("p");
total.classList.add("total");
totalSum.appendChild(total);

const inputPromo = document.createElement("input");
inputPromo.classList.add("input-promo");
inputPromo.setAttribute("type", "text");
totalSum.appendChild(inputPromo);

const buttonBuy = document.createElement("button");
buttonBuy.classList.add("button-buy");
buttonBuy.textContent = "buy now";
totalSum.appendChild(buttonBuy);

export function getCount(count: number, totalcount: number) {
  productNumber.textContent = `Products: ${count}`;
  total.textContent = `Total:${totalcount}`;
}

