// destructuring arrays
const aas = ["Cricket", "Football", "Tennis", "Badminton", "Hockey"];

// const sp1 = aas[0];
// const sp2 = aas[1];
// const sp3 = aas[2];
// const sp4 = aas[3];
// const sp5 = aas[4];

const [sp1, , , , sp5] = aas;

console.log(sp5);

// destructuring objects
const person = {
    name: "John",
    age: 30,
    city: "New York",
    occupation: "Engineer"
};

// const name = person.name;
// const age = person.age;
// const city = person.city;
// const occupation = person.occupation;

const {name, age, city, occupation} = person;

console.log(city);