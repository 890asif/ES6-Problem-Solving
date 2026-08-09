const getTotalAfterBonous = (orders, status)=>{
    const allAmount = orders.filter(order => order.status === status).map(order => order.amount * 1.05).reduce((total, amount)=>{
        return total + amount;
    },0)

    return allAmount;
}

const orders = [
  { customer: "Asif", amount: 500, status: "paid" },
  { customer: "Rafi", amount: 300, status: "pending" },
  { customer: "Nadia", amount: 700, status: "paid" },
  { customer: "Mitu", amount: 400, status: "paid" }
];
const status = "paid";

console.log(getTotalAfterBonous(orders, status))