import {cart, addToCart} from '../data/cart.js';

import {products} from '../data/products.js';
import {formatCurrency} from './utility/money.js'

//that products.js thing will come here 
let productsHTML=''; // accumulating the result here as that forEach loop works This is called Acuumulator Pattern. 
//loop through this array -products using foreach 
products.forEach((products)=> {
    productsHTML+=`
    <div class="product-container">
            <div class="product-image-container">
                <img class="product-image" src="${products.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${products.name}
            </div>

            <div class="product-rating-in-container">
                <img class="product-rating-stars" src="images/rating-${products.rating.stars *10}.png">
                <div class="product-rating-count link-primary">${products.rating.count}     
                </div>
            </div>

            <div class="product-price">$${formatCurrency(products.priceCents)}
            </div>

            <div class="product-quantity-container">
                <select>
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>
        <!-- empty div is created to cretae some visual space-->
            
            <div class="added-to-cart">
                <img src="images/myicons/checkmark.png">
                Added
            </div>


            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id="${products.id}">
                Add to Cart
            </button>
        </div>
    </div>
    `;
    
});
console.log(productsHTML);

document.querySelector('.js-products-grid').innerHTML=productsHTML;



//this function actually updates the page and not related with cart.js too much so ,for now keep it in this file only.

function updateCartQuantity(){
    let cartQuantity=0;

    cart.forEach((cartItem)=>{
        cartQuantity+=cartItem.quantity;
      });
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
    button.addEventListener('click',()=>{
      const productId=button.dataset.productId;  
      addToCart(productId);
      updateCartQuantity();

        

      
        // cart.push({
        //     productName:productName,
        //     quantity:1
        // });//adding product to the cart 
        
        // console.log(cartQuantity);
        // console.log(cart);     
 });
});