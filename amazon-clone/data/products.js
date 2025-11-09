export function getProduct(productId){
    let matchingProduct;
    products.forEach((product)=>{
        if(product.id===productId){
             matchingProduct = product;
            }
        
    });
    return matchingProduct;
}
export const products=[{
    id:"hwbhu-6gsygx-736jhsvvx",
    image:'images/products/athletic-cottons-socks-6-pairs.jpg',
    name:'Black-Gray Athletic Cotton Socks-6 Pairs',
    rating:{
        stars:4.5,
        count:80
    },
    priceCents: 1150  //all the data about our first product is saved 
},{
    id:"bkhe78jsxh-behdb7-njse0",
    image:'images/products/basketball.jpg',
    name:'Intermediate Size Basketball',
    rating:{
        stars:4,
        count:100
    },
    priceCents:2050
},{
    id:"hsbhd67-ndhe78eedk0-ejhd87",
    image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name:'Adults Plain Cotton T-Shirt - 2 Packs',
    rating:{
        stars:4.5,
        count:65
    },
    priceCents:805
},{
    id:"gvgjed-736jbeje-98hxbhj",
    image:'images/products/6-piece-non-stick-baking-set.webp',
    name:' 6-piece-Non-Sticky-Baking-Set',
    rating:{
        stars:4,
        count:120
    },
    priceCents:9050
},{
    id:"hdbdhe-76gdghe-76eddghg",
    image:'images/products/6-piece-white-dinner-plate-set.jpg',
    name:'6 Piece White Dinner Plate Set',
    rating:{
        stars:3,
        count:111
    },
    priceCents:7678
},{
    id:"heddbh-983bdxe-34hvddw",
    image:'images/products/backpack.jpg',
    name:'BackPack',
    rating:{
        stars:3.5,
        count:200
    },
    priceCents:1550
},{
    id:"edbej-376vhwg-42bbchee",
    image:'images/products/bathroom-rug.jpg',
    name:'Bathroom Rug',
    rating:{
        stars:3,
        count:257
    },
    priceCents:7950
},{
    id:"hbde78-62jbvgw-djcbe76",
    image:'images/products/black-2-slot-toaster.jpg',
    name:'2 Slot Black Toasterl',
    rating:{
        stars:2,
        count:250
    },
    priceCents:7750
},{
    id:"ndccnejc-73bdjgejgd-65ndhedc",
    image:'images/products/coffeemaker-with-glass-carafe-black.jpg',
    name:'CoffeeMaker With Glass Carafe Black',
    rating:{
        stars:3.5,
        count:300
    },
    priceCents:8067
},{
    id:"54hdbhec-76jdhhee-23bjhec",
    image:'images/products/cotton-bath-towels-teal.webp',
    name:'Cotton Bath Towels',
    rating:{
        stars:5,
        count:396
    },
    priceCents:1635
},{
    id:"dnwjkw76-dkhee7-36bdjjdc",
    image:'images/products/countertop-blender-64-oz.jpg',
    name:'Counter Top Blender',
    rating:{
        stars:2,
        count:356
    },
    priceCents:17787
},{
    id:"ehbekh98-25dbjhedj-536jbjhc",
    image:'images/products/double-elongated-twist-french-wire-earrings.webp',
    name:'Double Elongated Twist French Wire Earrings',
    rating:{
        stars:1,
        count:456
    },
    priceCents:8798
},{
    id:"23bdjec-09jgdcvcje-54djbf",
    image:'images/products/duvet-cover-set-blue-twin.jpg',
    name:'Duvet Cover Set Blue Colored',
    rating:{
        stars:5,
        count:587
    },
    priceCents:9020
},{
    id:"ejbehd76-gvdgve10b-egced76",
    image:'images/products/electric-glass-and-steel-hot-water-kettle.webp',
    name:'Electric Glass and Steel Hot Water Kettle',
    rating:{
        stars:2,
        count:108
    },
    priceCents:18750
}];
