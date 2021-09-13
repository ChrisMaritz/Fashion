// google-map-about-page
function initMap() {
    const location = {lat: -33.929, lng: 18.410};
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 12,
        center: location
    });
}

new Vue ({
    el : "#whole_page",

    data : {
        number : 0,
        carts : document.getElementById("add-cart"),
        cartItems : [],
        total : 0,
        array : parseInt(localStorage.getItem("cartAmount")),
        value : null,
    },
    mounted(){
        if(localStorage.getItem("cartItems")){
            this.cartItems = JSON.parse(localStorage.getItem("cartItems"))
        }else{console.log(this.cartItems)}

        console.log("here we are",typeof(this.total))

        if (Number.isInteger(parseInt(localStorage.getItem("cartAmount")))){
            this.total = parseInt(localStorage.getItem("cartAmount"))
        }
        else if (Number.isInteger(parseInt(localStorage.getItem("cartAmount")) == false)){
            localStorage.setItem("cartAmount", "0")
        }

        let object = JSON.parse(localStorage.getItem("cartItems"))
        let totalCost = parseInt(object.price)
        console.log("number",totalCost);
    },
    computed :{
        amount(){
            return localStorage.getItem("cartAmount");
        }
    },
    methods : {
        Objects(item,price){
            this._item = item;
            this._price = price;
        },
        selector(object,{select = [],index = 0}){
            return object, select[index]
        },
        addItems(key, name, price){
                class item{
                    constructor(keyC, name, price) {
                        this.keys = keyC;
                        this.item = name;
                        this.prices = price;
                    }
                }

                let object = new item (key, name, price);
                this.cartItems.push(object);
            localStorage.setItem("cartItems", JSON.stringify(this.cartItems));

        },
        counter(){
            this.total += 1;
            localStorage.setItem("cartAmount",JSON.stringify(this.total));

            this.total = parseInt(localStorage.getItem("cartAmount"));
            
        },
        value(){
            return localStorage.getItem("cartItems")
        }
      },
})

new Vue ({
    el : "#vue_all",
    data : {
        theSum : 0
    },
    computed :{
            amount(){
                return localStorage.getItem("cartAmount");
            }
        },
    mounted(){
        //item name display
        let cartItems = localStorage.getItem("cartItems");
            cartItems = JSON.parse(cartItems);
            let result = Object.values(cartItems).filter(obj => {
                let itemName = obj.item;
                let itemPrice = obj.prices;
                document.getElementById("nameDisplay").append(itemName,"(","R",itemPrice,") ","I I", " ");
            });
        //total cost
        let object =JSON.parse(localStorage.getItem("cartItems"));
        let newObject =object.map(this.fullCost);
        let sum = (newObject.reduce(this.getSum, 0))
        this.theSum = sum;
    },
    methods : {
        fullCost(object){
            return object.prices;
        },
        getSum(total, num) {
            return total + Math.round(num);
          }
    },
})
