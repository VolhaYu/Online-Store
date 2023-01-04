import { emptyCart, divCartPage, cartWrapper, showInCart } from "../CartPage/cartPage";
import { addToCartButton, divDescriptiontPage } from "../descriptionPage/productDescription";
import { divStorePage } from "./filtres";
import { products } from "../assets/data/productsData";
import { Products } from "../assets/scripts/findData";

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

const sortPriceMin = document.createElement("option");
sortPriceMin.textContent = "sort by price min";
select.appendChild(sortPriceMin);

const sortPriceMax = document.createElement("option");
sortPriceMax.textContent = "sort by price max";
select.appendChild(sortPriceMax);

const sortRatingMin = document.createElement("option");
sortRatingMin.textContent = "sort by rating min ";
select.appendChild(sortRatingMin);

const sortRatingMax = document.createElement("option");
sortRatingMax.textContent = "sort by rating max";
select.appendChild(sortRatingMax);

const foundProduct = document.createElement("p");
foundProduct.classList.add("found-product");
foundProduct.textContent = `Found:${products.length}`;
sortProducts.appendChild(foundProduct);

const wrapRadio = document.createElement("div");
wrapRadio.classList.add("wrap-radio");
sortProducts.append(wrapRadio);

const labelRadio1 = document.createElement("label");
labelRadio1.classList.add("label-radio", "label-radio_active");
wrapRadio.append(labelRadio1);

const labelImg1 = document.createElement("img");
labelImg1.classList.add("label-radio__img");
labelImg1.setAttribute("src", "./assets/svg/grid.svg");
labelRadio1.append(labelImg1);

const switchViewGrid = document.createElement("input");
switchViewGrid.classList.add("switch-view", "switch-view-grid");
switchViewGrid.setAttribute("type", "radio");
switchViewGrid.setAttribute("name", "switchView");
switchViewGrid.setAttribute("checked", "");
labelRadio1.append(switchViewGrid);

const labelRadio2 = document.createElement("label");
labelRadio2.classList.add("label-radio");
wrapRadio.append(labelRadio2);

const labelImg2 = document.createElement("img");
labelImg2.classList.add("label-radio__img");
labelImg2.setAttribute("src", "./assets/svg/row.svg");
labelRadio2.append(labelImg2);

const switchViewRow = document.createElement("input");
switchViewRow.classList.add("switch-view", "switch-view-row");
switchViewRow.setAttribute("type", "radio");
switchViewRow.setAttribute("name", "switchView");
labelRadio2.append(switchViewRow);

const cardsProducts = document.createElement("div");
cardsProducts.classList.add("cards-products");
divProducts.appendChild(cardsProducts);

// const radioSwichView = document.querySelectorAll(".switch-view");
const cardProduct = document.getElementsByClassName("card-product");
const productImg = document.getElementsByClassName("product__img");
const productDescription = document.getElementsByClassName("product__description");
const infoProduct = document.getElementsByClassName("product__info");

setProductsCard(products);

switchView(cardProduct)

function setProductsCard(items: Array<Products>) {
  for (const product of items) {
    const cardProduct = document.createElement("div");
    cardProduct.classList.add("card-product");
    cardsProducts.appendChild(cardProduct);

    const productImg = document.createElement("div");
    productImg.classList.add("product__img");
    productImg.setAttribute("id", `${product.id}`);
    productImg.style.backgroundImage = `url(${product.thumbnail})`;
    cardProduct.appendChild(productImg);

    const productDescription = document.createElement("div");
    productDescription.classList.add("product__description");
    cardProduct.appendChild(productDescription);

    const titleProduct = document.createElement("h4");
    titleProduct.classList.add("product__title");
    titleProduct.textContent = `${product.title}`;
    productDescription.append(titleProduct);

    const infoProduct = document.createElement("p");
    infoProduct.classList.add("product__info");
    infoProduct.textContent = `${product.description}`;
    productDescription.append(infoProduct);

    const wrapPriceButton = document.createElement("div");
    wrapPriceButton.classList.add("wrap-price-button");
    productDescription.append(wrapPriceButton);

    const priceProduct = document.createElement("p");
    priceProduct.classList.add("product__price");
    priceProduct.dataset.price = product.price.toString();
    priceProduct.textContent = `Price: $${product.price}`;
    wrapPriceButton.append(priceProduct);

    const ratingProduct = document.createElement("p");
    ratingProduct.classList.add("product__rating");
    ratingProduct.textContent = `Rating: ${product.rating}`;
    wrapPriceButton.append(ratingProduct);

    const buttonToCart = document.createElement("button");
    buttonToCart.classList.add("button-to-cart");
    buttonToCart.textContent = "Add to cart";
    wrapPriceButton.append(buttonToCart);
  }
}

function switchView(items: HTMLCollectionOf<Element>) {
  switchViewRow.addEventListener("click", () => {
    labelRadio1.classList.remove("label-radio_active");
    labelRadio2.classList.add("label-radio_active");
    cardsProducts.classList.add("cards-products_inLine");

    for (let i = 0; i < items.length; i++) {
      items[i].classList.add("card-product_inLine");
      productImg[i].classList.add("product__img_inLine");
      productDescription[i].classList.add("product__description_inLine");
      infoProduct[i].classList.add("product__info_inline");
    }
  });

  switchViewGrid.addEventListener("click", () => {
    labelRadio1.classList.add("label-radio_active");
    labelRadio2.classList.remove("label-radio_active");
    cardsProducts.classList.remove("cards-products_inLine");

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("card-product_inLine");
      productImg[i].classList.remove("product__img_inLine");
      productDescription[i].classList.remove("product__description_inLine");
      infoProduct[i].classList.remove("product__info_inline");
    }
  });
}

select.addEventListener("change", (event) => {
  const target = event.target as HTMLSelectElement;
  console.log(target.value)
  const items = document.getElementsByClassName("card-product");

  if (target.value === "sort by price min") {
    const minPrice = products.sort((a, b) => a.price - b.price);
    removeNodes(items);
    setProductsCard(minPrice);
    if (cardsProducts.classList.contains("cards-products_inLine")) setViewRow(items);
    getCartCounter();
  } else if (target.value === "sort by price max") {
    const maxPrice = products.sort((a, b) => b.price - a.price);
    removeNodes(items);
    setProductsCard(maxPrice);
    if (cardsProducts.classList.contains("cards-products_inLine")) setViewRow(items);
    getCartCounter();
  } else if (target.value === "sort by rating min") {
    const minRating = products.sort((a, b) => a.rating - b.rating);
    removeNodes(items);
    setProductsCard(minRating);
    if (cardsProducts.classList.contains("cards-products_inLine")) setViewRow(items);
    getCartCounter();
  } else if (target.value === "sort by rating max") {
    const maxRating = products.sort((a, b) => b.rating - a.rating);
    removeNodes(items);
    setProductsCard(maxRating);
    if (cardsProducts.classList.contains("cards-products_inLine")) setViewRow(items);
    getCartCounter();
  } else if (target.value === "sort") {
    removeNodes(items);
    setProductsCard(products);
    if (cardsProducts.classList.contains("cards-products_inLine")) setViewRow(items);
    getCartCounter();
  }
});

function removeNodes(items: HTMLCollectionOf<Element>) {
  Array.from(items).forEach(item => item.remove())
}

function setViewRow(items: HTMLCollectionOf<Element>) {
  for (let i = 0; i < items.length; i++) {
    items[i].classList.add("card-product_inLine");
    productImg[i].classList.add("product__img_inLine");
    productDescription[i].classList.add("product__description_inLine");
    infoProduct[i].classList.add("product__info_inline");
  }
}

const cartCounter = document.querySelector(".shoping-cart__number") as HTMLElement;
const headerTotal = document.querySelector(".header__p") as HTMLElement;
let counter = 0;
const totalCounter = 0;
let total = totalCounter;

function getCartCounter() {
  const buttunToCart = document.getElementsByClassName("button-to-cart");
  Array.from(buttunToCart).forEach((button, i) => button.addEventListener("click", () => {
    emptyCart.style.display = "none";
    divCartPage.appendChild(cartWrapper);
    button.classList.toggle("button-to-cart-active");
    showInCart(i);

    const prices = document.getElementsByClassName("product__price");

    if (button.textContent === "Add to cart") {
      button.textContent = "In cart";
      counter++;
      total += Number(prices[i].getAttribute("data-price"));
    } else {
      button.textContent = "Add to cart";
      counter--;
      total -= Number(prices[i].getAttribute("data-price"));
    }

    cartCounter.textContent = `${counter}`;
    headerTotal.textContent = `Grand total: $ ${total}`;
  }))
}

getCartCounter();

export function getCartCounterDescription(n: number) {
  const buttunToCart = document.getElementsByClassName("button-to-cart");
  if (document.querySelector("main")?.appendChild(divDescriptiontPage)) {
    addToCartButton.addEventListener("click", () => {
      addToCartButton.classList.toggle("button-to-cart-active");
      if (addToCartButton.textContent === "in cart") {
        addToCartButton.textContent = "add to cart";
        counter--;
        total -= - Number(products[n].price);
      } else {
        addToCartButton.textContent = "in cart";
        counter++;
        total += Number(products[n].price);
      }
      buttunToCart[n].textContent = addToCartButton.textContent;
      buttunToCart[n].classList.toggle("button-to-cart-active");
      cartCounter.textContent = `${counter}`;
      headerTotal.textContent = `Grand total: $ ${total}`;
      return addToCartButton;
    });
  }
}
// getCartCounterDescription();

export { setProductsCard, getCartCounter, totalCounter };