export let cart;
loadFromStorage();

export function loadFromStorage(){
    cart= JSON.parse(localStorage.getItem('cart'));
    //localStorage only save strings and to convert it back into array we will use JSON.parse 
    // and we will not be having our cart saved then we will get null as the output.
    // now to give default value to it that is default cart
    if(!cart){
        cart=[{
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

        }];
    }
}

 //This cart is actually empty in original amzon website but here just to understand we are writing these to write some default values basically 

function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){  // to run this function we need to access that productId variable in this function as a parameter
    let matchingItem;

    cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
            matchingItem=cartItem;
        }    
    });
    if(matchingItem){
        matchingItem.quantity+=1;
    }// matchingItem here is truthy value 
    else{
        cart.push({
        productId:productId,
        quantity:1,
        deliveryOptionId:'1'
        });
    }

    saveToStorage();
}
//Steps to be followed for the below function:
// 1.) Create a new array 
// 2.) Loop through the cart
// 3.) Add each product to the new array,except for this productId
export function removeFromcart(productId){
    const newCart=[];
    cart.forEach((cartItem)=>{
        if(cartItem.productId !== productId ){
            newCart.push(cartItem);
        }
    });
    cart.length=0;
    cart.push(...newCart);
    //cart=newCart should be avoided as due to this reference of cart will get change and other files/modules in which cart is imported ,values will not get updated in them.
    // if we will follow this above line code then same array reference will get updated then changes will be reflected everywhere.
    saveToStorage();
    //so whenever we will update the cart we will store it in the local storage 
}
//1.)Loop through the cart and find the product
//2.)Update the deliveryOptionId of the product
//3.)Update deliveryOptionid in the cart. 
//4.)Update the page.
export function updateDeliveryOption(productId,deliveryOptionId){
    let matchingItem;

    cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
            matchingItem=cartItem;
        }    
    });
    matchingItem.deliveryOptionId=deliveryOptionId;
    saveToStorage();
}
    