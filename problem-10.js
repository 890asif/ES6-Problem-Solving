const totalCostbyCategory = (products, category)=>{

const finalResult = products.filter(product => product.category === category)

.reduce((total, {quantity, price})=>{

return  total + (quantity * price * 0.90) 
},0)

return finalResult;
}
const products = [
  {
    name: "Pen",
    category: "stationery",
    price: 10,
    quantity: 10
  },
  {
    name: "Book",
    category: "stationery",
    price: 100,
    quantity: 2
  },
  {
    name: "Mouse",
    category: "electronics",
    price: 500,
    quantity: 1
  }
];
const category = "stationery"

console.log(totalCostbyCategory(products, category))