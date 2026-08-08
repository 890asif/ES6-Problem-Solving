const passedStudentsAverageMarks = ()=>{

    const avgMark = students.filter(student => student.marks > 40).map(student => student.marks)
    .reduce((total, marks)=>{
        return (total + marks) / 2;
    })
   
    return avgMark;
}
const students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 30 },
  { name: "C", marks: 60 }
];

console.log(passedStudentsAverageMarks(students))