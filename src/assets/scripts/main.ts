const total = 0;

const fragment = document.createDocumentFragment();
document.body.appendChild(fragment);

const header = document.createElement("HEADER");
header.setAttribute("class", "header");
fragment.appendChild(header);

const wrapper = document.createElement("div");
wrapper.setAttribute("class", "wrapper");
header.appendChild(wrapper);

const title = document.createElement("H1");
title.setAttribute("class", "title");
wrapper.appendChild(title);

const text = document.createTextNode("Online Store");
title.appendChild(text);

const main = document.createElement("main");
main.setAttribute("class", "main");
fragment.appendChild(main);

const mainWrapper = document.createElement("div");
mainWrapper.setAttribute("class", "wrapper");
main.appendChild(mainWrapper);

const mainOrders = document.createElement("H2");
mainOrders.innerText = "Book Catalog";
mainOrders.setAttribute("class", "title");
mainWrapper.appendChild(mainOrders);

const frame = document.createElement("div");
frame.setAttribute("class", "frame");
mainWrapper.appendChild(frame);
header.appendChild(mainOrders);

const section = document.createElement("aside");
section.setAttribute("class", "section droppable");
fragment.appendChild(section);

const footer = document.createElement("FOOTER");
footer.setAttribute("class", "footer");
footer.appendChild(mainOrders);
fragment.appendChild(footer);

const div = document.createElement("div");
section.appendChild(div);

const titleOrders = document.createElement("H2");
titleOrders.innerText = "Oder books";
titleOrders.setAttribute("class", "title");
div.appendChild(titleOrders);

const confirmOrders = document.createElement("button");
confirmOrders.setAttribute("class", "bag");
confirmOrders.innerText = `Confirm oder`;
div.appendChild(confirmOrders);

div.appendChild(document.createElement("br"));

const totally = document.createElement("H2");
totally.innerText = `Total: $${total}`;
totally.setAttribute("class", "total");
div.appendChild(totally);

div.appendChild(document.createElement("br"));
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