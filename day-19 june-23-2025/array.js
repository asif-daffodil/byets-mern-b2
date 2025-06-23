const studentNames = ["Maruf", "Rahimul", "Sagar", "Apurba", "Arif"];
// console.log(studentNames[0]);
// push
studentNames.push("Siam", "Sazid", "Hero Alom");

// pop
studentNames.pop();

// unshift
studentNames.unshift("Ananta Jalil", "Nasir", "Nazmul");

// shift
studentNames.shift();

// splice
studentNames.splice(2, 1, "Mr. Maruf");

// slice
console.log(studentNames.slice(3, 6));

// indexOf
// console.log(studentNames.indexOf("Arif"));

// for (let i = 0; i < studentNames.length; i++) {
//     console.log(studentNames[i]);
// }

// join
console.log(studentNames.join(" "));

// split
console.log("Ami vaat khai".split(" "));

// delete
delete studentNames[2];
console.log(studentNames);





