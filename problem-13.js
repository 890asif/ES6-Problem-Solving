const iscountTotalCalculator = (numbers)=>{

    const finalResult = numbers.map(number => number - 5 ).reduce((total, number)=>{
        return total + number
    },0)

    return finalResult;
}
const numbers = [100, 250, 80]
console.log(iscountTotalCalculator(numbers))
