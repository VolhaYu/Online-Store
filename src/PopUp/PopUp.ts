import './PopUp.css';

export const popUp = () => `
  <div class="pop-up">
    <div class="pop-up-content">
      <div class="pop-up-container">
        <form class="form" action="#">
          <div class="wrap-personal">
            <h3 class="h3-pop-up">Personal details</h3>
            <input class="input personal__input-text" type="text" placeholder="Name" required>              
            <input class="input personal__input-text" type="number" placeholder="Phone number" required>              
            <input class="input personal__input-text" type="text" placeholder="Delivery address" required>              
            <input class="input personal__input-text" type="email" placeholder="E-mail" required>
          </div>
          <h3 class="h3-pop-up">Credit card details</h3>
          <div class="credit-card">
            <div class="wrap-input-number-card">
              <img class="credit-card__img" src="assets/svg/2443.webp" alt="img">
              <label class="label-card-number">
                <input class="input input-number input-card-number" type="text" placeholder="Card number" maxLength="16" pattern="[0-9]{16}" required>
              </label>        
            </div>
            <div class="wrap-input">
              <label class="label"> Valid:
                <input class="input input-number wrap-input__number" type="text" placeholder="Valid Thru" maxLength="4" pattern="[0-9]{4}" required>
              </label>
              <label class="label"> CVV:
                <input class="input input-number wrap-input__number" type="text" placeholder="Code" maxLength="3" pattern="[0-9]{3}" required>
              </label>
            </div>
          </div> 
          <button type="submit" class="input button-confirm">CONFIRM</button>
        </form>                       
      </div>
    </div>
  </div>
`;
document.querySelector('.main')?.insertAdjacentHTML('afterbegin', popUp());