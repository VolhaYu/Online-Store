import {
  categorySet,
  brandSet,
  priceMin,
  priceMax,
  stockMin,
  stockMax,
} from "./findData";

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
buttonCopy.textContent = "Copy filters";
divResetCopy.appendChild(buttonCopy);

const inputSearch = document.createElement("input");
divFilters.appendChild(inputSearch);
inputSearch.setAttribute("type", "text");
inputSearch.setAttribute("placeholder", "search");
inputSearch.classList.add("input-search");

const categoryDiv = document.createElement("div");
categoryDiv.classList.add("category");
divFilters.appendChild(categoryDiv);
const h2Caregory = document.createElement("h2");
h2Caregory.classList.add("h2");
h2Caregory.textContent = "Category";
categoryDiv.appendChild(h2Caregory);
const wrapCheckbox = document.createElement("div");
wrapCheckbox.classList.add("wrap-checkbox");
categoryDiv.appendChild(wrapCheckbox);

for (let i = 0; i < categorySet.size; i++) {
  const labelCheckbox = document.createElement("label");
  labelCheckbox.classList.add("label-checkbox");
  labelCheckbox.textContent = `${Array.from(categorySet)[i]}`;
  const inputCheckbox = document.createElement("input");
  inputCheckbox.setAttribute("type", "checkbox");
  inputCheckbox.classList.add("checkbox");
  labelCheckbox.prepend(inputCheckbox);
  wrapCheckbox.appendChild(labelCheckbox);
}
const brandDiv = document.createElement("div");
brandDiv.classList.add("brand-div");
divFilters.appendChild(brandDiv);
const h2Brand = document.createElement("h2");
h2Brand.classList.add("h2");
h2Brand.textContent = "Brand";
brandDiv.appendChild(h2Brand);
const wrapCheckboxBrand = document.createElement("div");
wrapCheckboxBrand.classList.add("wrap-checkbox");
brandDiv.appendChild(wrapCheckboxBrand);
for (let i = 0; i < brandSet.size; i++) {
  const labelCheckbox = document.createElement("label");
  labelCheckbox.classList.add("label-checkbox");
  labelCheckbox.textContent = `${Array.from(brandSet)[i]}`;
  const inputCheckbox = document.createElement("input");
  inputCheckbox.setAttribute("type", "checkbox");
  inputCheckbox.classList.add("checkbox");
  labelCheckbox.prepend(inputCheckbox);
  wrapCheckboxBrand.appendChild(labelCheckbox);
}
const priceDiv = document.createElement("div");
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

const stockDiv = document.createElement("div");
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
