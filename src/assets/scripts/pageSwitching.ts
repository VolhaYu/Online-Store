import { divStorePage } from "../../StorePage/filtres";
import { divCartPage } from "../../CartPage/cartPage";
import { divDescriptiontPage } from "../../descriptionPage/productDescription";
import { getCartPage } from "../../CartPage/cartPage";

document.querySelector(".shoping-cart")?.addEventListener("click", () => {
  if (document.querySelector("main")?.lastChild === divStorePage) {
    document.querySelector("main")?.removeChild(divStorePage);
    document.querySelector("main")?.appendChild(divCartPage);
    getCartPage();
  } else {
    document.querySelector("main")?.removeChild(divDescriptiontPage);
    document.querySelector("main")?.appendChild(divCartPage);
    getCartPage();
  }
});

document.querySelector(".logo")?.addEventListener("click", () => {
  if (document.querySelector("main")?.lastChild === divDescriptiontPage) {
    document.querySelector("main")?.removeChild(divDescriptiontPage);
    document.querySelector("main")?.appendChild(divStorePage);
  } else {
    document.querySelector("main")?.removeChild(divCartPage);
    document.querySelector("main")?.appendChild(divStorePage);
  }
});
