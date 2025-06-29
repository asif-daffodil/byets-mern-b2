myStudents = [
    {
        name: "Arafat",
        age: 22,
        city: "Chadpur"
    },
    {
        name: "Sagar",
        age: 23,
        city: "Dhaka"
    },
    {
        name: "Apurba",
        age: 21,
        city: "Cumilla"
    }
];

myStudents.map(student => {
    console.log(student.name + " is " + student.age + " years old and lives in " + student.city);
})

