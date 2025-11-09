import {renderOrderSummary} from '../../scripts/checkout/orderSummary.js';
import {loadFromStorage} from '../../data/cart.js';
import {products} from '../../data/products.js';
describe('test suite:renderOrderSummary',()=>{
   
   it('displays the cart',()=>{
      document.querySelector('.js-test-container').innerHTML=`
        <div class="js-order-summary"></div>
      `;
    spyOn(localStorage,'getItem').and.callFake(()=>{
         return JSON.stringify([{
          productId:'hwbhu-6gsygx-736jhsvvx',
          quantity:1,
          deliveryOptionId:'1'
        },{
            productId:'edbej-376vhwg-42bbchee',
            quantity:1,
            deliveryOptionId:'2'
        },
        {
            productId:'heddbh-983bdxe-34hvddw',
            quantity:2,
            deliveryOptionId:'2'

        }]);
     });
    loadFromStorage();
    renderOrderSummary();
   });
});