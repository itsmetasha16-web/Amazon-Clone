import {cart} from '../../data/cart.js';
import {getProduct} from '../../data/products.js';
import {getDeliveryOption} from '../../data/deliveryOptions.js';
import {formatCurrency} from '../utility/money.js';

export function renderPaymentSummary(){
    let productPriceCents = 0;
    let shippingPriceCents=0;
    cart.forEach((cartItem)=>{
     const product = getProduct(cartItem.productId);
     productPriceCents+= product.priceCents*cartItem.quantity;

     const deliveryOption=getDeliveryOption(cartItem.deliveryOptionId);  
     shippingPriceCents+=deliveryOption.priceCents
    });

    const totalbeforetaxcents=productPriceCents+shippingPriceCents;
    const taxcents=totalbeforetaxcents * 0.1;
    const totalcents=totalbeforetaxcents + taxcents;

    const paymentSummaryHTML=`
        <div class="Payment-summary-title">
            Order Summary
         </div>

         <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-of-money">
              $${formatCurrency(productPriceCents)}
            </div>
         </div>

         <div class="payment-summary-row">
            <div>Shipping &amp;handling:</div> 
            <div class="payment-summary-of-money">
              $${formatCurrency (shippingPriceCents)}
            </div>
         </div>
         <!--This could confuse the browser because it might think you're trying to write an HTML entity like &handling; (which doesn’t exist), and it will not render correctly.
         This tells the browser: “Hey! I actually want to display the & symbol itself,” so it renders: Shipping &handling
         -->
         <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div> 
            <div class="payment-summary-of-money">
              $${formatCurrency(totalbeforetaxcents)}
            </div>
         </div>
         <!--All rows will follow the payment-summary-row styles.Only the subtotal row will get additional bold text or background.-->
         <div class="payment-summary-row">
            <div>Estimated Tax of 10%:</div>
            <div class="payment-summary-of-money">
             $${formatCurrency(taxcents)}
            </div>
         </div> 

         <div class="payment-summary-row total-row">
            <div>Order Total:</div>
            <div class="payment-summary-of-money">
             $${formatCurrency(totalcents)}
            </div>
         </div>

         <button class="button-for-pacing-order button-primary">
            Place your Order
         </button>
        
    `;
    document.querySelector('.js-payment-summary').innerHTML=paymentSummaryHTML;

}

//Understanding of the code :
// Loop through cart -> for each products,price*quantity-> add everything together 