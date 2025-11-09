import {addToCart,cart,loadFromStorage} from '../../data/cart.js';
describe('test suite:addToCart',()=>{
   it('adds an exisiting product to the cart',()=>{
      spyOn(localStorage,'setItem');//A mock only lasts for 1 test
      spyOn(localStorage,'getItem').and.callFake(()=>{
        return JSON.stringify([{
          productId:'hwbhu-6gsygx-736jhsvvx',
          quantity:1,
          deliveryOptionId:'1'
        }]);
      });
      loadFromStorage();
      addToCart('hwbhu-6gsygx-736jhsvvx');
      expect(cart.length).toEqual(1);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);//It means how many times this method was called and that method has to be passed from spyOn.
      expect(cart[0].productId).toEqual('hwbhu-6gsygx-736jhsvvx');
      expect(cart[0].quantity).toEqual(2);
   });
   it('adds a new product to the cart',()=>{
      spyOn(localStorage,'setItem');
      spyOn(localStorage,'getItem').and.callFake(()=>{
        return JSON.stringify([]);//empty array as we want getitem to return empty array for this test.now local storage only supports strings.
      });
      
      loadFromStorage();
      addToCart('hwbhu-6gsygx-736jhsvvx');
      expect(cart.length).toEqual(1);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);//It means how many times this method was called and that method has to be passed from spyOn.
      expect(cart[0].productId).toEqual('hwbhu-6gsygx-736jhsvvx');
      expect(cart[0].quantity).toEqual(1);
   });
   //After we mock local storage.getItem to return an  empty array, here we should reload the cart so using that function localfromstorage from cart.js 
   // Since we mocked getItem to return [],
   // this will result in:
   // cart = [];
   // So now our test starts with an empty cart.
});
// So these unit tests are checking:
// If the cart already has the product -> quantity increases by 1.
// If the cart does not have the product -> the product is added for the first time.
// Just one function, tested in multiple situations.