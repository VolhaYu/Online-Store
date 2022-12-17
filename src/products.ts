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
