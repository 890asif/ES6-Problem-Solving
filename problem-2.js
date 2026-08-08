 const totalPriceofInstockProducts = (prosucts)=>{
    const totalPrice = products.filter(product => product.stock === true).map(product => product.price).reduce((total, price)=>{
        return total + price;
    },0)
    return totalPrice
 }

 const products = [
  { name: "Pen", price: 100, stock: true },
  { name: "Bag", price: 500, stock: false },
  { name: "Book", price: 200, stock: true }
];

console.log(totalPriceofInstockProducts(products))