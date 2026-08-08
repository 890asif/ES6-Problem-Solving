const totalageFind = (peoples)=>{

 const totalAge = peoples.map(people => people.age).reduce((total, age)=>{
    
    return total += age;
 },0)

 return totalAge
}

const peoples = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
  { name: "C", age: 30 }
];

console.log(totalageFind(peoples))