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

export const buttonReset = document.createElement("button");
buttonReset.classList.add("filters__button");
buttonReset.textContent = "Reset filters";
divResetCopy.appendChild(buttonReset);

export const buttonCopy = document.createElement("button");
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
brandDiv.classList.add("brand");
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

export const minPrice = document.createElement("div");
minPrice.classList.add("min-price");
minPrice.textContent = `$${priceMin}`;
wrapMinMaxPrice.appendChild(minPrice);

export const maxPrice = document.createElement("div");
maxPrice.classList.add("max-price");
maxPrice.textContent = `$${priceMax}`;
wrapMinMaxPrice.appendChild(maxPrice);

const rangeContainerPrice = document.createElement("div");
rangeContainerPrice.classList.add("range-container");
priceDiv.appendChild(rangeContainerPrice);

export const inputRangeMinPrice = document.createElement("input");
inputRangeMinPrice.classList.add("range", "min-range-price");
inputRangeMinPrice.setAttribute("type", "range");
inputRangeMinPrice.setAttribute("min", `${priceMin}`);
inputRangeMinPrice.setAttribute("max", `${priceMax}`);
inputRangeMinPrice.setAttribute("value", `${priceMin}`);
rangeContainerPrice.appendChild(inputRangeMinPrice);

export const inputRangeMaxPrice = document.createElement("input");
inputRangeMaxPrice.classList.add("range", "max-range-price");
inputRangeMaxPrice.setAttribute("type", "range");
inputRangeMaxPrice.setAttribute("min", `${priceMin}`);
inputRangeMaxPrice.setAttribute("max", `${priceMax}`);
inputRangeMaxPrice.setAttribute("value", `${priceMax}`);
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

export const minStock = document.createElement("div");
minStock.classList.add("min-stock");
minStock.textContent = `${stockMin}`;
wrapMinMaxStock.appendChild(minStock);

export const maxStock = document.createElement("div");
maxStock.classList.add("max-stock");
maxStock.textContent = `${stockMax}`;
wrapMinMaxStock.appendChild(maxStock);

const rangeContainerStock = document.createElement("div");
rangeContainerStock.classList.add("range-container");
stockDiv.appendChild(rangeContainerStock);

export const inputRangeMinStock = document.createElement("input");
inputRangeMinStock.setAttribute("type", "range");
inputRangeMinStock.setAttribute("min", `${stockMin}`);
inputRangeMinStock.setAttribute("max", `${stockMax}`);
inputRangeMinStock.setAttribute("value", `${stockMin}`);
inputRangeMinStock.classList.add("range", "min-range-stock");
rangeContainerStock.appendChild(inputRangeMinStock);

export const inputRangeMaxStock = document.createElement("input");
inputRangeMaxStock.setAttribute("type", "range");
inputRangeMaxStock.setAttribute("min", `${stockMin}`);
inputRangeMaxStock.setAttribute("max", `${stockMax}`);
inputRangeMaxStock.setAttribute("value", `${stockMax}`);
inputRangeMaxStock.classList.add("range", "max-range-stock");
rangeContainerStock.appendChild(inputRangeMaxStock);

document.querySelector("main")?.appendChild(fragmentStorePage);
//


