import {cart,removeFromcart,updateDeliveryOption} from '../../data/cart.js'; //as we need to get out of two folders one checkout and then scripts
import {products,getProduct} from '../../data/products.js';
import {formatCurrency} from '../utility/money.js';//to get out of  the  checkout folder and then into the utility folder
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs  from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import {deliveryOptions,getDeliveryOption} from '../../data/deliveryOptions.js';
import{renderPaymentSummary} from './paymentSummary.js';

// here these functions imported using curly brackets are "named exports".
// without curly brackets are "default export".


// two dots means looking into the folder which is outside the scripts that is current folder. 
// one dot means looking into the current folder that is the scripts folder here.
//using backticks(template literals) to generate html in the following 
//this following procedure we have done will actually loops through the cart and creates the html and put this on the page.
export function renderOrderSummary(){
   let  cartSummaryHTML='';
   cart.forEach((cartItem)=> {
      const productId = cartItem.productId;
      
      const matchingProduct= getProduct(productId);
      
      
      const deliveryOptionId=cartItem.deliveryOptionId;
      const  deliveryOption= getDeliveryOption(deliveryOptionId);
      
      const today = dayjs();
      const deliveryDate=today.add(
         deliveryOption.deliveryDays,'days'
      );
      const datestring=deliveryDate.format(
         'dddd, MMMM D'
      );

      cartSummaryHTML+=`
      <div class="cart-item-container
         js-cart-item-container-${matchingProduct.id}">
               <div class="Delivery-Date">
                  Delivery-Date : ${datestring}
               </div>
               <div class="Cart-Item-Details-Grid">
                  <img class="product-image"
                     src="${matchingProduct.image}">
                  
                  <div class="cart-item-details">
                     <div class="product-name">
                        ${matchingProduct.name}
                     </div>
                     <div class="product-price">$ ${formatCurrency(matchingProduct.priceCents)}</div>
                     <div class="product-quantity">
                        <span> 
                           Quantity:<span class="quantity-label">${cartItem.quantity}</span>
                        </span>
                        <span class="link-for-update-quantity link-primary">Update</span>

                        <span class="link-for-delete-quantity link-primary js-delete-link"data-product-id="${matchingProduct.id}">Delete     
                        </span>
                     </div>
                  </div>

                  <div class="Delivery-Options">
                     <div class="Delivery-options-title">
                        Choose a delivery Option:    
                     </div>
                     ${deliveryOptionsHTML(matchingProduct,cartItem)}
                  </div>
               </div>
         </div>
      
      `;
   });

   function deliveryOptionsHTML(matchingProduct,cartItem){
      let html='';
      deliveryOptions.forEach((deliveryOption) => {
         const today = dayjs();
         const deliveryDate=today.add(
            deliveryOption.deliveryDays,'days'
         );
         const datestring=deliveryDate.format(
            'dddd, MMMM D'
         );
         const pricestring=deliveryOption.priceCents===0?'FREE':`$${formatCurrency(deliveryOption.priceCents)} -`;

         const isChecked = deliveryOption.id===cartItem.    deliveryOptionId;
         //Now here this is the whole html code for delivery options and we are adding a class over here so that we can select it using DOM.
         html+=
         `<div class="Delivery-Option js-delivery-option"
            data-product-id="${matchingProduct.id}"
            data-delivery-option-id="${deliveryOption.id}">
               <input type="radio" 
                  ${isChecked ?'checked' :' '}
                  class="delivery-option-input"
                  name="delivery-option-${matchingProduct.id}">
               <div>
                  <div class="delivery-option-date">
                     ${datestring}
                  </div>
                  <div class="delivery-option-price">
                  ${pricestring} Shipping
                  </div>
               </div>
            </div>`
      });
      return html;
   }
   document.querySelector('.js-order-summary')
   .innerHTML=cartSummaryHTML;
   console.log(cartSummaryHTML);

   document.querySelectorAll('.js-delete-link')
   .forEach((link) => {
      link.addEventListener('click',()=>{
         const productId=link.dataset.productId;//dataset to access the data attribute that is productId here
         removeFromcart(productId);
         //now we want to insert in something here in following string so use variables will select the specific container that we need 
         const container = document.querySelector(
            `.js-cart-item-container-${productId}`
         );
         //   console.log(container);
         container.remove();
         renderPaymentSummary();
         });

      });
      //To add event listener
      document.querySelectorAll('.js-delivery-option')
      .forEach((element)=> {
         element.addEventListener('click',()=>{
            //get those values out of the data attributes
            const {productId,deliveryOptionId}=element.dataset;
            updateDeliveryOption(productId,deliveryOptionId);
            renderOrderSummary();
            renderPaymentSummary();
            //productId that we need to update for and deliveryOptionId that we picked 
            //data attributes = used to store data in HTML
               // dataset = used to get that stored data in JS
               // updateDeliveryOption() = updates the cart based on what user selects.
         });
      });
   // Now To remove the productId from the Cart we are writing this above thing in cart.js to make our project organised.
 }
//  Where called?  	Why?
// At bottom	      Page par cart ko pehli baar display karne ke liye
// Inside click event	User ne delivery change ki → UI ko           
//                      update    karna hoga

// renderOrderSummary();