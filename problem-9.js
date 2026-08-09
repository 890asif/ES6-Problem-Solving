const getHighScore = (students)=>{

    const result = students.filter(student => student.marks > 80).map(student => student.name.toUpperCase())
        
    return result;
}
const students = [
  { name: "Asif", marks: 85 },
  { name: "Rafi", marks: 60 },
  { name: "Nadia", marks: 95 }
];

console.log(getHighScore(students))