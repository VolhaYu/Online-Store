import "./description.css";
// import { imgClick } from "../pageSwitching";
import { products } from "../productsData";
import { divStorePage } from "../StorePage/filtres";
// console.log(imgClick);

const fragmentDescriptiontPage = document.createDocumentFragment();
export const divDescriptiontPage = document.createElement("div");
divDescriptiontPage.classList.add("description-page");
fragmentDescriptiontPage.appendChild(divDescriptiontPage);

const titleDescription = document.createElement("h2");
titleDescription.classList.add("title-description");
// titleDescription.textContent = "Title";
divDescriptiontPage.appendChild(titleDescription);

const wrapDescription = document.createElement("div");
wrapDescription.classList.add("wrap-description");
divDescriptiontPage.appendChild(wrapDescription);

export const wrapDescriptionImage = document.createElement("div");
wrapDescriptionImage.classList.add("wrap-description__img");
wrapDescription.appendChild(wrapDescriptionImage);

const mainPhoto = document.createElement("img");
mainPhoto.classList.add("main-photo");
wrapDescriptionImage.appendChild(mainPhoto);

export const wrapSlideImage = document.createElement("div");
wrapSlideImage.classList.add("wrap-slide-image");
wrapDescriptionImage.appendChild(wrapSlideImage);

const wrapProductInfo = document.createElement("div");
wrapProductInfo.classList.add("wrap-description__product-info");
wrapDescription.appendChild(wrapProductInfo);
const infoDescription = document.createElement("p");
infoDescription.classList.add("product-info__p");
wrapProductInfo.appendChild(infoDescription);

const infoDiscont = document.createElement("p");
infoDiscont.classList.add("product-info__p");
wrapProductInfo.appendChild(infoDiscont);

const infoRating = document.createElement("p");
infoRating.classList.add("product-info__p");
wrapProductInfo.appendChild(infoRating);

const infoStock = document.createElement("p");
infoStock.classList.add("product-info__p");
wrapProductInfo.appendChild(infoStock);

const infoBrand = document.createElement("p");
infoBrand.classList.add("product-info__p");
wrapProductInfo.appendChild(infoBrand);

const infoCategory = document.createElement("p");
infoCategory.classList.add("product-info__p");
wrapProductInfo.appendChild(infoCategory);

const addToCard = document.createElement("div");
addToCard.classList.add("wrap-description__add-to-card");
wrapDescription.appendChild(addToCard);

const priceInfo = document.createElement("p");
priceInfo.classList.add("price-info");
addToCard.appendChild(priceInfo);

const addToCardButton = document.createElement("button");
addToCardButton.classList.add("add-to-card__button");
addToCardButton.textContent = "Add to cart";
addToCard.appendChild(addToCardButton);

const buyNowButton = document.createElement("button");
buyNowButton.classList.add("add-to-card__button");
buyNowButton.textContent = "Buy Now";
addToCard.appendChild(buyNowButton);

export const imgClick = document.querySelectorAll(".product__img");

function getProductInfo() {
  for (let i = 0; i < imgClick.length; i++) {
    imgClick[i].addEventListener("click", () => {
      titleDescription.textContent = `${products[i].title}`;
      mainPhoto.src = products[i].thumbnail;
      infoDescription.textContent = `Description: ${products[i].description}`;
      infoDiscont.textContent = `Discont: ${products[i].discountPercentage}%`;
      infoRating.textContent = `Rating: ${products[i].rating}`;
      infoStock.textContent = `Stock: ${products[i].stock}`;
      infoBrand.textContent = `Brand: ${products[i].brand}`;
      infoCategory.textContent = `Category: ${products[i].category}`;
      priceInfo.textContent = `$${products[i].price}`;
      for (let j = 0; j < products[i].images.length; j++) {
        const slideImage = document.createElement("img");
        slideImage.classList.add("slide-img");
        slideImage.src = products[i].images[j];
        wrapSlideImage.appendChild(slideImage);
      }
      document.querySelector("main")?.removeChild(divStorePage);
      document.querySelector("main")?.appendChild(divDescriptiontPage);
    });
  }
}
getProductInfo();

// document.querySelector("main")?.appendChild(fragmentDescriptiontPage);
