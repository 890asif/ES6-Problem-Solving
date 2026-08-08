const cheapestProduct = (products)=>{
    const result = products.reduce((cheapest, product)=>{
        if( cheapest.price > product.price){
            return product
        }
        else{ 
            return cheapest;
        }
    })
    return result;
}

const products = [
  { name: "Pen", price: 100 },
  { name: "Book", price: 50 },
  { name: "Bag", price: 500 }
];

console.log(cheapestProduct(products))