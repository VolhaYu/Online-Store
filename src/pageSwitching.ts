import { divStorePage } from "./StorePage/filtres";
import { divCartPage } from "./CartPage/cartPage";
import { divDescriptiontPage } from "./descriptionPage/productDescription";

document.querySelector(".shoping-cart")?.addEventListener("click", () => {
  document.querySelector("main")?.removeChild(divStorePage);
  document.querySelector("main")?.appendChild(divCartPage);
});
document.querySelector(".shoping-cart")?.addEventListener("click", () => {
  document.querySelector("main")?.removeChild(divDescriptiontPage);
  document.querySelector("main")?.appendChild(divCartPage);
});
document.querySelector(".logo")?.addEventListener("click", () => {
  document.querySelector("main")?.removeChild(divCartPage);
  document.querySelector("main")?.appendChild(divStorePage);
});
document.querySelector(".cards-products")?.addEventListener("click", () => {
  console.log("click");
  document.querySelector("main")?.removeChild(divStorePage);
  document.querySelector("main")?.appendChild(divDescriptiontPage);
});
document.querySelector(".logo")?.addEventListener("click", () => {
  document.querySelector("main")?.removeChild(divDescriptiontPage);
  document.querySelector("main")?.appendChild(divStorePage);
});
