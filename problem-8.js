const totalPriceAfterTax = (products)=>{

// const totalPrice = products.map(product=> product.price * 1.05).reduce((total, price)=>{
//     return total += price 
// },0)

const totalPrice = products.map(product => 
    product.price + (product.price * 0.05)
).reduce((total, price)=>{
    return total += price
},0)

return totalPrice;
}
const products = [
  { price: 100 },
  { price: 200 },
  { price: 300 }
];
console.log(totalPriceAfterTax(products))