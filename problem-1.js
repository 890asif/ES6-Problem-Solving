const totalSalaryAfterBonous = (employees)=>{

    const addBonous = employees.map(employee => employee.salary *1.20)

    const totalSalary = addBonous.reduce((total, salary)=>{
        return total + salary
    },0)
return totalSalary;
}

const employees = [
  { name: "Asif", salary: 30000 },
  { name: "Rafi", salary: 40000 },
  { name: "Nadia", salary: 50000 }
];

console.log(totalSalaryAfterBonous(employees))