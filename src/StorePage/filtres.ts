import { priceMin, priceMax, stockMin, stockMax, sortedCategorySet, sortedBrandSet } from "../assets/scripts/findData";

const fragmentStorePage = document.createDocumentFragment();
export const divStorePage = document.createElement("div");
divStorePage.classList.add("store-page");
fragmentStorePage.appendChild(divStorePage);

const divFilters = document.createElement("div");
divFilters.classList.add("filters");
divStorePage.appendChild(divFilters);

const divResetCopy = document.createElement("div");
divResetCopy.classList.add("buttons-reset-copy");
divFilters.appendChild(divResetCopy);

const buttonReset = document.createElement("button");
buttonReset.classList.add("filters__button");
buttonReset.textContent = "Reset filters";
divResetCopy.appendChild(buttonReset);

const buttonCopy = document.createElement("button");
buttonCopy.classList.add("filters__button");
buttonCopy.textContent = "Copy link";
divResetCopy.appendChild(buttonCopy);

const inputSearch = document.createElement("input");
divFilters.appendChild(inputSearch);
inputSearch.setAttribute("type", "text");
inputSearch.setAttribute("placeholder", "search");
inputSearch.classList.add("input-search");
// category
const categoryDiv = document.createElement("fieldset");
categoryDiv.classList.add("category");
divFilters.appendChild(categoryDiv);

const h2Caregory = document.createElement("h2");
h2Caregory.classList.add("h2");
h2Caregory.textContent = "Category";
categoryDiv.appendChild(h2Caregory);

const wrapCheckbox = document.createElement("div");
wrapCheckbox.classList.add("wrap-checkbox");
categoryDiv.appendChild(wrapCheckbox);

for (const category of sortedCategorySet) {
  const labelCheckbox = document.createElement("label");
  labelCheckbox.classList.add("label-checkbox");
  labelCheckbox.textContent = ` ${category.toUpperCase()}`;

  const inputCheckbox = document.createElement("input");
  inputCheckbox.setAttribute("type", "checkbox");
  inputCheckbox.classList.add("checkbox");
  labelCheckbox.prepend(inputCheckbox);
  wrapCheckbox.appendChild(labelCheckbox);
}
// brand
const brandDiv = document.createElement("fieldset");
brandDiv.classList.add("brand-div");
divFilters.appendChild(brandDiv);

const h2Brand = document.createElement("h2");
h2Brand.classList.add("h2");
h2Brand.textContent = "Brand";
brandDiv.appendChild(h2Brand);

const wrapCheckboxBrand = document.createElement("div");
wrapCheckboxBrand.classList.add("wrap-checkbox");
brandDiv.appendChild(wrapCheckboxBrand);

for (const brand of sortedBrandSet) {
  const labelCheckbox = document.createElement("label");
  labelCheckbox.classList.add("label-checkbox");
  labelCheckbox.textContent = ` ${brand.toUpperCase()}`;

  const inputCheckbox = document.createElement("input");
  inputCheckbox.setAttribute("type", "checkbox");
  inputCheckbox.classList.add("checkbox");
  labelCheckbox.prepend(inputCheckbox);
  wrapCheckboxBrand.appendChild(labelCheckbox);
}
// price
const priceDiv = document.createElement("fieldset");
priceDiv.classList.add("price-div");
divFilters.appendChild(priceDiv);

const h2Price = document.createElement("h2");
h2Price.classList.add("h2");
h2Price.textContent = "Price";
priceDiv.appendChild(h2Price);

const wrapMinMaxPrice = document.createElement("div");
wrapMinMaxPrice.classList.add("wrap-min-max");
priceDiv.appendChild(wrapMinMaxPrice);

const minPrice = document.createElement("div");
minPrice.classList.add("min-price");
minPrice.textContent = `$${priceMin}`;
wrapMinMaxPrice.appendChild(minPrice);

const maxPrice = document.createElement("div");
maxPrice.classList.add("max-price");
maxPrice.textContent = `$${priceMax}`;
wrapMinMaxPrice.appendChild(maxPrice);

const rangeContainerPrice = document.createElement("div");
rangeContainerPrice.classList.add("range-container");
priceDiv.appendChild(rangeContainerPrice);

const inputRangeMinPrice = document.createElement("input");
inputRangeMinPrice.classList.add("range", "min-range-price");
inputRangeMinPrice.setAttribute("type", "range");
inputRangeMinPrice.setAttribute("min", "0");
inputRangeMinPrice.setAttribute("max", "100");
inputRangeMinPrice.setAttribute("value", "0");
rangeContainerPrice.appendChild(inputRangeMinPrice);

const inputRangeMaxPrice = document.createElement("input");
inputRangeMaxPrice.classList.add("range", "max-range-price");
inputRangeMaxPrice.setAttribute("type", "range");
inputRangeMaxPrice.setAttribute("min", "0");
inputRangeMaxPrice.setAttribute("max", "100");
inputRangeMaxPrice.setAttribute("value", "100");
rangeContainerPrice.appendChild(inputRangeMaxPrice);
// stock
const stockDiv = document.createElement("fieldset");
stockDiv.classList.add("stock-div");
divFilters.appendChild(stockDiv);

const h2Stock = document.createElement("h2");
h2Stock.classList.add("h2");
h2Stock.textContent = "Stock";
stockDiv.appendChild(h2Stock);

const wrapMinMaxStock = document.createElement("div");
wrapMinMaxStock.classList.add("wrap-min-max");
stockDiv.appendChild(wrapMinMaxStock);

const minStock = document.createElement("div");
minStock.classList.add("min-stock");
minStock.textContent = `${stockMin}`;
wrapMinMaxStock.appendChild(minStock);

const maxStock = document.createElement("div");
maxStock.classList.add("max-stock");
maxStock.textContent = `${stockMax}`;
wrapMinMaxStock.appendChild(maxStock);

const rangeContainerStock = document.createElement("div");
rangeContainerStock.classList.add("range-container");
stockDiv.appendChild(rangeContainerStock);

const inputRangeMinStock = document.createElement("input");
inputRangeMinStock.setAttribute("type", "range");
inputRangeMinStock.setAttribute("min", "0");
inputRangeMinStock.setAttribute("max", "100");
inputRangeMinStock.setAttribute("value", "0");
inputRangeMinStock.classList.add("range", "min-range-stock");
rangeContainerStock.appendChild(inputRangeMinStock);

const inputRangeMaxStock = document.createElement("input");
inputRangeMaxStock.setAttribute("type", "range");
inputRangeMaxStock.setAttribute("min", "0");
inputRangeMaxStock.setAttribute("max", "100");
inputRangeMaxStock.setAttribute("value", "100");
inputRangeMaxStock.classList.add("range", "max-range-stock");
rangeContainerStock.appendChild(inputRangeMaxStock);

document.querySelector("main")?.appendChild(fragmentStorePage);
//
const checkboxes: HTMLCollectionOf<Element> = document.getElementsByClassName("label-checkbox");
let filter = new Set<string>();

Array.from(checkboxes).forEach((checkbox) => checkbox.addEventListener("change", (event) => {
  const cards: NodeListOf<Element> = document.querySelectorAll(".card-product");
  const checkboxText: string = checkbox.textContent?.trim() as string;
  const target = event.target as HTMLInputElement;

  cards.forEach((card) => {
    const dataCategory = card.getAttribute("data-category") as string;
    const dataBrand = card.getAttribute("data-brand") as string;

    if (checkboxText !== dataCategory) {
      card.classList.add("hide");
      filter.add(checkboxText);
    }

    if (checkboxText !== dataBrand) {
      card.classList.add("hide");
      filter.add(checkboxText);
    }

    if (!target.checked) {
      card.classList.remove("hide");
      filter.delete(checkboxText);
    }

    if (filter.has(dataCategory)) {
      if (filter.has(dataBrand)) {
        card.classList.remove("hide");
      }
      card.classList.remove("hide");
    } else if (filter.has(dataBrand)) {
      if (filter.has(dataCategory)) {
        card.classList.remove("hide");
      }
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }

    if (filter.has(dataBrand) && filter.has(dataCategory)) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }

    if (card.classList.contains("hide") && filter.size === 0) card.classList.remove("hide");
  });

  console.log(filter);
}))

buttonReset.addEventListener("click", () => {
  // const checkboxes = document.getElementsByClassName("checkbox") as HTMLCollectionOf<HTMLInputElement>;
  // document.querySelectorAll(".card-product") as NodeList<HTMLInputElement>
  Array.from(document.getElementsByClassName("checkbox") as HTMLCollectionOf<HTMLInputElement>).forEach(checkbox => checkbox.checked = false);
  document.querySelectorAll(".card-product").forEach((card) => card.classList.remove("hide"));
  filter = new Set<string>();
});