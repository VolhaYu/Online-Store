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

function setProductsCard(products: Array<Products>) {
  for (const product of products) {
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
    priceProduct.textContent = `Price: $${product.price}`;
    wrapPriceButton.append(priceProduct);

    const ratingProduct = document.createElement("p");
    ratingProduct.classList.add("product__rating");
    ratingProduct.textContent = `Rating: ${product.rating}`;
    wrapPriceButton.append(ratingProduct);

    const buttonToCart = document.createElement("button");
    buttonToCart.classList.add("button-to-cart");
    buttonToCart.setAttribute("value", `${product.id}`);
    buttonToCart.textContent = "Add to cart";
    wrapPriceButton.append(buttonToCart);
  }
}

setProductsCard(products);

// const radioSwichView = document.querySelectorAll(".switch-view");
const cardProduct = document.querySelectorAll(".card-product");
const productImg = document.querySelectorAll(".product__img");
const productDescription = document.querySelectorAll(".product__description");
const infoProduct = document.querySelectorAll(".product__info");

(function switchView() {

  switchViewRow.addEventListener("click", () => {
    labelRadio1.classList.remove("label-radio_active");
    labelRadio2.classList.add("label-radio_active");
    cardsProducts.classList.add("cards-products_inLine");
    for (let i = 0; i < cardProduct.length; i++) {
      cardProduct[i].classList.add("card-product_inLine");
      productImg[i].classList.add("product__img_inLine");
      productDescription[i].classList.add("product__description_inLine");
      infoProduct[i].classList.add("product__info_inline");
    }
  });

  switchViewGrid.addEventListener("click", () => {
    labelRadio1.classList.add("label-radio_active");
    labelRadio2.classList.remove("label-radio_active");
    cardsProducts.classList.remove("cards-products_inLine");
    for (let i = 0; i < cardProduct.length; i++) {
      cardProduct[i].classList.remove("card-product_inLine");
      productImg[i].classList.remove("product__img_inLine");
      productDescription[i].classList.remove("product__description_inLine");
      infoProduct[i].classList.remove("product__info_inline");
    }
  });

})()

// sorts
select.addEventListener("change", (event) => {
  const target = event.target as HTMLSelectElement;
  console.log(target.value);
  const min = products.sort((a, b) => a.price - b.price);
  const max = products.sort((a, b) => b.price - a.price);

  if (target.value === "sort by price min") {
    setProductsCard(min); // sort by rating min
  }

  if (target.value === "sort by price max") {
    setProductsCard(max); //sort by rating max
  }

});
/*
function sortMumberMin(a: number, b: number) {
  return a - b;
};
*/
const booksList = document.getElementsByClassName("card-product");

const elements = [].slice.call(booksList[0].childNodes[0]);
console.log(elements)

const e = cardsProducts.children as HTMLCollection;
[].slice
  .call(e)
  .sort((a, b) => a - b).forEach(item => console.log(item));

//options.forEach(item => console.log(item.innerText))

/*
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 }
];
items.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a должно быть равным b
  return 0;
});
*/