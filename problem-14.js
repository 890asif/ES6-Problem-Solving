const employeeProfileGenerator = (employee)=>{
    if(typeof employee !== "object" || employee === null){
        return "Invalid"
    }
    
    if(!("name" in employee) || 
    !("age" in employee) || 
        !("department" in employee)){
        return "Invalid"
    }

   const {name, age, department} = employee;

    return `My name is ${name}. I am ${age} years old. I work in ${department}.`

}
const employee = {
name: "Asif",
age: 21,
department: "Developer"
}
console.log(employeeProfileGenerator(employee))