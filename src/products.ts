import { divStorePage } from "./filtres";

const divProducts = document.createElement("div");
divProducts.classList.add("products");
divStorePage.appendChild(divProducts);

const sortProducts = document.createElement("div");
sortProducts.classList.add("sort-products");
divProducts.appendChild(sortProducts);

const form = document.createElement("form");
sortProducts.appendChild(form);
const select = document.createElement("select");
select.classList.add("select");
form.appendChild(select);
const option1 = document.createElement("option");
option1.setAttribute("selected", "");
option1.textContent = "sort";
select.appendChild(option1);
const option2 = document.createElement("option");
option2.textContent = "sort by price min";
select.appendChild(option2);
const option3 = document.createElement("option");
option3.textContent = "sort by price max";
select.appendChild(option3);
const option4 = document.createElement("option");
option4.textContent = "sort by rating min ";
select.appendChild(option4);
const option5 = document.createElement("option");
option5.textContent = "sort by rating max";
select.appendChild(option5);

const foundProduct = document.createElement("p");
foundProduct.classList.add("found-product");
foundProduct.textContent = "Found:100";
sortProducts.appendChild(foundProduct);

const cardsProducts = document.createElement("div");
cardsProducts.classList.add("cards-products");
divProducts.appendChild(cardsProducts);
for (let i = 0; i <= 100; i++) {
  const cardProduct = document.createElement("div");
  cardProduct.classList.add("card-product");
  cardsProducts.appendChild(cardProduct);
  const productImg = document.createElement("div");
  productImg.classList.add("product__img");
  cardProduct.appendChild(productImg);
  const productDescription = document.createElement("div");
  productDescription.classList.add("product__description");
  cardProduct.appendChild(productDescription);

  const img = document.createElement("img");
  img.classList.add("img");
  productImg.append(img);

  const titleProduct = document.createElement("h3");
  titleProduct.classList.add("product__title");
  titleProduct.textContent = " Title";
  productDescription.append(titleProduct);

  const wrapPriceButton = document.createElement("div");
  wrapPriceButton.classList.add("wrap-price-button");
  productDescription.append(wrapPriceButton);
  const priceProduct = document.createElement("p");
  priceProduct.classList.add("product__price");
  priceProduct.textContent = "Price";
  wrapPriceButton.append(priceProduct);
  const buttonToCart = document.createElement("button");
  buttonToCart.classList.add("button-to-cart");
  buttonToCart.textContent = "add to cart";
  wrapPriceButton.append(buttonToCart);
}
