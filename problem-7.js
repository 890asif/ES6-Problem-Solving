const findTotalReveneue = (products)=>{
    
    totalRevenue = products.reduce((total, {price, quantity})=>{
        return total + (price * quantity)
    },0)

    return totalRevenue;
}
const products = [
  { name: "Pen", price: 20, quantity: 5 },
  { name: "Book", price: 100, quantity: 3 },
  { name: "Bag", price: 500, quantity: 2 }
];

console.log(findTotalReveneue(products))