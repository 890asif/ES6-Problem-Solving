const findtotalPriceAfterDiscount = (products, category)=>{

    const totalPrice = products.filter(product => product.category === category ).map(product => product.price * 0.85).reduce((total, price)=>{

        return total + price 
    },0)

    return totalPrice
}

const products = [
  { name: "Mouse", category: "electronics", price: 1000 },
  { name: "Keyboard", category: "electronics", price: 2000 },
  { name: "Book", category: "stationery", price: 500 }
];

const category = "electronics";

console.log(findtotalPriceAfterDiscount(products, category))