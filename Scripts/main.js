// google-map-about-page
function initMap() {
    const location = {lat: -33.929, lng: 18.410};
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 12,
        center: location
    });
}
//cart page

//targeting shop items
let carts = document.querySelectorAll("#add-cart")

//each item product specfications
let products = [
    {
        name : "MUSTARD SKIRT",
        tag : "mustardskirt",
        price : 300,
        inCart : 0
    },
    {
        name : "OLIVE JERSEY",
        tag : "olivejersey",
        price : 250,
        inCart : 0,
    },
    {
        name : "PINK JACKET",
        tag :"pinkjacket",
        price : 400,
        inCart : 0,
    },
    {
        name : "RED JERSEY",
        tag : "redjersey",
        price : 300,
        inCart : 0
    },
    {
        name : "WAISTCOAT",
        tag : "waistcoat",
        price : 300,
        inCart : 0
    },
    {
        name : "STRIPED PANTS",
        tag : "stripedpants",
        price : 200,
        inCart : 0
    },
    {
        name : "WOOL JACKET",
        tag : "wooljacket",
        price : 500,
        inCart : 0
    },
    {
        name : "FLUFFY JERSEY",
        tag : "fluffyjersey",
        price : 350,
        inCart : 0
    },
    {
        name : "YELLOW JOGGERS",
        tag : "yellowjersey",
        price : 200,
        inCart : 0
    },
    {
        name : "MUSTARD T-SHIRT",
        tag : "mustardt-shirt",
        price : 200,
        inCart : 0
    },
    {
        name : "LEAPOARD JACKET",
        tag : "leapoardjacket",
        price : 300,
        inCart : 0
    },
    {
        name : "CORDUROY PANTS",
        tag : "corduroypants",
        price : 300,
        inCart : 0
    },
    {
        name : "CAPPUCCINO SKIRT",
        tag : "cappucinoskirt",
        price : 250,
        inCart : 0
    },
    {
        name : "THIN BLOUSE",
        tag : "thinblouse",
        price : 200,
        inCart : 0
    },
    {
        name : "DENIM JACKET",
        tag : "denimjacket",
        price : 300,
        inCart : 0
    },
    {
        name : "DOTTED SKIRT",
        tag : "dottedskirt",
        price : 350,
        inCart : 0
    },
    {
        name : "LIGHT DENIM JACKET",
        tag : "lightdenimjacket",
        price : 350,
        inCart : 0
    },
    {
        name : "LOOSE DENIM PANTS",
        tag : "loosedenimpants",
        price : 300,
        inCart : 0
    },
    {
        name : "CLASSIC DENIM PANTS",
        tag : "classicdenimpants",
        price : 300,
        inCart : 0
    },
    {
        name : "STRIPED SHIRT",
        tag : "stripedpants",
        price : 200,
        inCart : 0
    }
]


//loop for adding cart items
// for (let i=0; i < carts.length; i++){
//     carts[i].addEventListener("click", () =>{
//         cartNumbers(products[i]);
//         totalCost(products[i]);
//     })
// }


//onload amount of cart items
// function onLoadCartNumbers(){
//     let productNumbers = localStorage.getItem("cartNumbers");

//     if (productNumbers){
//         document.querySelector("#cart span").textContent = productNumbers
//     }
// }

//item amount in cart set and text content
// function cartNumbers(product){
//     let productNumbers = localStorage.getItem("cartNumbers");
//     productNumbers = parseInt(productNumbers)
//     if( productNumbers ){
//         localStorage.setItem("cartNumbers", productNumbers  + 1);
//         document.querySelector("#cart span").textContent = productNumbers + 1
//     } else {
//         localStorage.setItem("cartNumbers", 1);
//         document.querySelector("#cart span").textContent = 1
//     }
//     setItems(product);
// }


//setting items for products specifications
// function setItems(product){
//     let cartItems = localStorage.getItem("productsInCart");
//     cartItems = JSON.parse(cartItems);
//     if(cartItems != null){
//         if(cartItems[products.tag] == undefined){
//             cartItems = {
//                 ...cartItems,
//                 [product.tag] : product
//             }
//         }
//         cartItems[product.tag].inCart += 1;
//     }else{
//         product.inCart = 1
//         cartItems = {
//             [product.tag] : product
//         }
//     }
//     localStorage.setItem("productsInCart", JSON.stringify(cartItems));
// }


// //total cost setting 
// function totalCost(product){
//     let cartCost = localStorage.getItem("totalCost");
//     if (cartCost != null){
//         cartCost = parseInt(cartCost);
//         localStorage.setItem("totalCost", cartCost + product.price);
//     }else{
//         localStorage.setItem("totalCost", product.price);
//     }
// }


// //price details display in cart
// function cartDisplayPrice(){
//     let cartItems = localStorage.getItem("productsInCart");
//     cartItems = JSON.parse(cartItems);
//     let result = Object.values(cartItems).filter(obj => {
//         let itemName = obj.name;
//         let itemPrice = obj.price;
//         console.log(itemName, "hello");
//         document.getElementById("priceDisplay").append(itemName,"(","R",itemPrice,")"," ");
//     });
// }


// //items names display
// function cartDisplayName(){
//     let cartItems = localStorage.getItem("productsInCart");
//     cartItems = JSON.parse(cartItems);
//     let result = Object.values(cartItems).filter(obj => {
//         let itemName = obj.name;
//         let itemAmount = obj.inCart;
//         document.getElementById("nameDisplay").append(itemName,"(",itemAmount,")",",");
//     });
// }


// //total cost display
// function cartDisplayTotal(){
//     let cartItems = localStorage.getItem("totalCost");
//     cartItems = JSON.parse(cartItems);
//     document.getElementById("totalDisplay").append("R",cartItems);
// }
new Vue ({
    el : "#shop-items",

    data : {
        number : 0,
        carts : document.getElementById("add-cart"),
    },
    methods : {
        Objects(item,price){
            this._item = item;
            this._price = price;
        },
        selector(object,{select = [],index = 0}){
            return object, select[index]
        },
        looper(key, name, price){
            let object = {}
                let cartItems = this.carts;
                class item{
                    constructor(keyC, name, price) {
                        this.keys = keyC;
                        this.item = name;
                        this.prices = price;
                    }
                }
                
                object = new item (key, name, price);

            localStorage.setItem("cartItems", JSON.stringify(object));
            console.log(key)
        },
        test(){
            console.log("hello")
        },
      },
})
//onload items
// cartDisplayName();
// cartDisplayPrice();
// cartDisplayTotal();
// onLoadCartNumbers();