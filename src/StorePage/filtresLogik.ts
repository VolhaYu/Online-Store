import { select } from './products';
import { buttonReset, buttonCopy } from './filtres';

const items = document.getElementsByClassName("card-product") as HTMLCollectionOf<HTMLElement>;

select.addEventListener("change", (event) => {
  const target = event.target as HTMLSelectElement;

  if (target.value === "sort by price min") {
    const sorted = Array.from(items).sort((a: Element, b: Element) => Number(a.getAttribute("data-price")) - Number(b.getAttribute("data-price")));
    sorted.forEach((item) => document.querySelector(".cards-products")?.appendChild(item));
  } else if (target.value === "sort by price max") {
    const sorted = Array.from(items).sort((a: Element, b: Element) => Number(b.getAttribute("data-price")) - Number(a.getAttribute("data-price")));
    sorted.forEach((item) => document.querySelector(".cards-products")?.appendChild(item));
  } else if (target.value === "sort by rating min") {
    const sorted = Array.from(items).sort((a: Element, b: Element) => Number(a.getAttribute("data-rating")) - Number(b.getAttribute("data-rating")));
    sorted.forEach((item) => document.querySelector(".cards-products")?.appendChild(item));
  } else if (target.value === "sort by rating max") {
    const sorted = Array.from(items).sort((a: Element, b: Element) => Number(b.getAttribute("data-rating")) - Number(a.getAttribute("data-rating")));
    sorted.forEach((item) => document.querySelector(".cards-products")?.appendChild(item));
  }else if (target.value === "sort:") {
    const sorted = Array.from(items).sort((a: Element, b: Element) => Number(a.getAttribute("data-id")) - Number(b.getAttribute("data-id")));
    sorted.forEach((item) => document.querySelector(".cards-products")?.appendChild(item));
  }
});

const checkboxes: HTMLCollectionOf<Element> = document.getElementsByClassName("label-checkbox");
const filter1 = new Set<string>();
let found = 100;
const cards = document.querySelectorAll<HTMLElement>(".card-product");

Array.from(checkboxes).forEach((checkbox) => checkbox.addEventListener("change", (event) => {
  const checkboxText: string = checkbox.textContent?.trim() as string;
  const target = event.target as HTMLInputElement;

  Array.from(cards).forEach((card) => {
    const dataCategory = card.getAttribute("data-category") as string;
    const dataBrand = card.getAttribute("data-brand") as string;

    if ((checkboxText !== dataCategory)) {
      card.classList.add("hide");
      card.style.display = "none"
      filter1.add(checkboxText);
    }

    if ((checkboxText !== dataBrand)) {
      card.classList.add("hide");
      card.style.display = "none"
      filter1.add(checkboxText);
    }

    if (!target.checked) {
      card.classList.remove("hide");
      card.style.display = "flex"
      filter1.delete(checkboxText);
    }

    if (filter1.has(dataCategory) && filter1.has(dataBrand)) {
      card.classList.remove("hide");
      card.style.display = "flex"
      // eslint-disable-next-line no-dupe-else-if
    } else if (filter1.has(dataCategory) || filter1.has(dataBrand)) {
      card.classList.remove("hide");
      card.style.display = "flex"
    } else {
      card.classList.add("hide");
      card.style.display = "none"
    }

    if (card.classList.contains("hide") && filter1.size === 0) {
      card.classList.remove("hide");
      card.style.display = "flex";
    }
    showFoundProduct();
  });
  console.log("filter1:", filter1);
}));

document.querySelector(".input-search")?.addEventListener("input", (event) => {
  const cards = document.querySelectorAll<HTMLElement>(".card-product");
  const target = event.target as HTMLInputElement;

  Array.from(cards).forEach((card) => {
    const dataPrice = card.getAttribute("data-price") as string;
    const dataRating = card.getAttribute("data-rating") as string;
    const dataCategory = card.getAttribute("data-category") as string;
    const dataBrand = card.getAttribute("data-brand") as string;

    if (!(dataPrice.includes(target.value) || dataRating.includes(target.value) || dataCategory.includes(target.value.toLocaleUpperCase()) || dataBrand.includes(target.value.toLocaleUpperCase()))) {
      card.style.display = "none"
    } else {
      card.style.display = "flex"
    }
  });
  showFoundProduct();
});

buttonReset.addEventListener("click", () => {
  const cards = document.querySelectorAll<HTMLElement>(".card-product");
  Array.from(cards).forEach((card) => {
    card.style.display = "flex";
    filter1.clear();
    const input = document.querySelectorAll("input[type=checkbox]") as NodeListOf<HTMLInputElement>;
    input.forEach(el => {
      el.checked = false;
    });
  });
  const sorted = Array.from(items).sort((a: Element, b: Element) => Number(a.getAttribute("data-id")) - Number(b.getAttribute("data-id")));
  sorted.forEach((item) => document.querySelector(".cards-products")?.appendChild(item));
  const sort = document.querySelector('.select') as HTMLSelectElement;
  sort.value = sort.options[0].textContent as string;
  (document.querySelector(".input-search") as HTMLInputElement).value = '';
  showFoundProduct();
});

function showFoundProduct() {
  const foundProduct = document.querySelector(".found-product");
  found = Array.from(cards).filter(card => card.style.display === "flex").length;
  if (foundProduct != undefined) foundProduct.textContent = `Found: ${found} pcs`;
}

function copyUrl() {
  buttonCopy.addEventListener('click', () => {
    buttonCopy.style.background='#C6C6C6';
    setTimeout(() => buttonCopy.style.background='buttonface', 500);
    const copy = window.location.href;
    console.log(copy);
    const tmp   = document.createElement('INPUT') as HTMLInputElement, 
    focus = document.activeElement as HTMLInputElement;
    tmp.value = copy;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);
    focus.focus();
  });
}
copyUrl();

