import React from 'react'
import '../Styles.css/PagarStyles.css'
import { Link } from 'react-router-dom';

function Pagar() {
  return (
    
    <div id='Pagar'>
          <div className='botonrojo'>
    <Link to ="/PagP" >  <button class="btn-class-name"> 
  <span class="back"></span>
  <span class="front"></span>
</button>
</Link>
      </div>
        <div className='Payment'>
        <div class="container">
  <div class="card cart">
    <label class="title">CHECKOUT</label>
    <div class="steps">
      <div class="step">
        <div>
          <span>Comprando</span>
          <input placeholder='Prenda o accesorio' type="text" />
         <input placeholder='id' type="text" />
        </div>
        <hr />
        <div>
          <span>PAYMENT METHOD</span>
            <select name="Select1" id="Sl">
            <option value="">Mastecard</option>
            <option value="">BCR</option>
            <option value="">Visa</option>
            </select>
            <br />
         <input placeholder='Numero de la tarjeta' type="number" required />
        </div>
        <hr />
        <div class="promo">
          <span>Tienes codigo de descuento?</span>
          <form class="form">
            <input
              class="input_field"
              placeholder="Ingreselo aqui"
              type="text"
            />
            
          </form>
        </div>
        <hr />
        <div class="payments">
          <span>PAYMENT</span>
          <div class="details">
            <span>Subtotal:</span>
            <span>$240.00</span>
            <span>Shipping:</span>
            <span>$10.00</span>
            <span>Tax:</span>
            <span>$30.40</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card checkout">
    <div class="footer">
      <label class="price">$280.40</label>
      <button class="checkout-btn">Comprar</button>
    </div>
  </div>
</div>
</div>
    </div>
  )
}

export default Pagar
