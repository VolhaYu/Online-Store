export function showPopUp(button: HTMLButtonElement) {
  const popUp = document.querySelector('.pop-up') as HTMLElement;
  button.addEventListener("click", () => {
    console.log('click');
    popUp.classList.add('pop-up-active');
  });
  popUp.addEventListener('click', event => {
    if((event.target as HTMLElement)?.classList.contains('pop-up')) {
      popUp.classList.remove('pop-up-active');
    };
  });

  document.querySelector('.form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('kiki');
    popUp.textContent = 'Thank you, your order has been placed!';
    popUp.classList.add('pop-up-text');
    setTimeout(() => location. reload(), 3000);
  });
  showImgCard();
}
function showImgCard() {
  const cardNumber = document.querySelector('.input-card-number') as HTMLInputElement;
  const img = document.querySelector('.credit-card__img') as HTMLImageElement;
  cardNumber.addEventListener('input', () => {
    if(cardNumber.value[0] === '4') {
      img.src="assets/img/visa.png";
    }
    if(cardNumber.value[0] === '5') {
      img.src="assets/svg/mc.svg";
    }
    if(!cardNumber.value[0]) {
      img.src="assets/svg/2443.webp";
    }
  });
}
