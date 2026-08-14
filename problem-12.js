const getDiscountProducts = (products, category) =>{

    const result = products.filter(product => product.category === category).map(product => product.price * 0.90).reduce((total, pric)=>{
       return total + price
    })

    return result
}
const products = [
    {name: "Pen", category: "stationery", price: 100},
    {name: "Book", category: "stationery", price: 300},
    {name: "Shirt", category: "clothing", price: 800},
    {name: "Pencil", category: "stationery", price: 50}
];

const category = "stationery";

console.log(getDiscountProducts(products, category))