const total = 0;

const fragment = document.createDocumentFragment();
document.body.appendChild(fragment);

const header = document.createElement("HEADER");
header.setAttribute("class", "");
fragment.appendChild(header);

const frame = document.createElement("div");
frame.setAttribute("class", "header");
header.appendChild(frame);

const logo = document.createElement("A");
logo.setAttribute("class", "logo");
logo.setAttribute("href", "#");
logo.innerHTML = `<img class="logo__img"src="assets/img/logo.png" alt="logo">`;
frame.appendChild(logo);

const title = document.createElement("P");
title.setAttribute("class", "header__p");
title.innerText = `Grand total: $ ${total}`;
frame.appendChild(title);

const shopingCartFragment = document.createElement("div");
shopingCartFragment.setAttribute("class", "shoping-cart");
shopingCartFragment.innerHTML = `<img class="shoping-cart__img" src="assets/img/shopping-cart.png" alt="shopping-cart"> <div class="shoping-cart__number">0</div>`;
frame.appendChild(shopingCartFragment)

const main = document.createElement("main");
main.setAttribute("class", "main");
fragment.appendChild(main);

const footer = document.createElement("FOOTER");
footer.setAttribute("class", "footer");
fragment.appendChild(footer);

const github = document.createElement("A");
github.setAttribute("class", "github");
github.setAttribute("href", "https://github.com/sesychev");
github.setAttribute("target", "_blank");
github.innerHTML = `<img class="github__img" src="assets/img/GitHub.png" alt="GitHub">`;
footer.appendChild(github);

const year = document.createElement("P");
year.setAttribute("class", "year");
year.innerText = `2022`;
footer.appendChild(year);

const link = document.createElement("A");
link.setAttribute("github", "logo");
link.setAttribute("href", "https://rs.school/js/");
link.setAttribute("target", "_blank");
link.innerHTML = `<img class="github__img" src="assets/svg/rs_school_js.svg" alt="rs_school_js">`;
footer.appendChild(link);

/*
const mainOrders = document.createElement("H2");
mainOrders.innerText = "Book Catalog";
mainOrders.setAttribute("class", "title");
main.appendChild(mainOrders);

const frame = document.createElement("div");
frame.setAttribute("class", "frame");
main.appendChild(frame);
header.appendChild(mainOrders);

const titleOrders = document.createElement("H2");
titleOrders.innerText = "Oder books";
titleOrders.setAttribute("class", "title");
div.appendChild(titleOrders);

const confirmOrders = document.createElement("button");
confirmOrders.setAttribute("class", "bag");
confirmOrders.innerText = `Confirm oder`;
div.appendChild(confirmOrders);

const section = document.createElement("aside");
section.setAttribute("class", "section");
fragment.appendChild(section);

const div = document.createElement("div");
section.appendChild(div);
div.appendChild(document.createElement("br"));

const totally = document.createElement("H2");
totally.setAttribute("class", "total");
totally.innerText = `Total: $${total}`;
div.appendChild(totally);

div.appendChild(document.createElement("br"));
*/

document.body.appendChild(fragment);
// paymentCash.innerHTML = `<input type="radio" name="payment" value="Cash" /> Cash`;
/*
<!--
    <header class="header">
        <a class="logo" href="#">
            <img class="logo__img"src="assets/img/logo.png" alt="logo">
        </a>
        <p class="header__p">Grand total: $0</p>
        <div class="shoping-cart">
            <img class="shoping-cart__img" src="assets/img/shopping-cart.png" alt="shopping-cart">
            <div class="shoping-cart__number">0</div>
        </div>
    </header>
  -->
  
 <!--
    <footer class="footer">
        <a class="github" href="#">
            <img class="github__img" src="assets/img/GitHub.png" alt="GitHub">
        </a>
        <p class="year">2022</p>
        <a class="link-rsschool" href="https://rs.school/js/">
            <img class="link-rsschool__img" src="assets/svg/rs_school_js.svg" alt="rs_school_js">
        </a>
    </footer>
-->
*/