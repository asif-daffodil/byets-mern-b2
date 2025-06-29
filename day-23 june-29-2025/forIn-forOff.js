const arafat = {
    fullName : "Arafat Rahman",
    title: "Chacha",
    city: "Chadpur",
    status: "Single",
    university: "Daffodil" 
}


// for in
// for (const key in arafat) {
//     console.log(key, ":", arafat[key]);
// }


// for of
const keys = Object.keys(arafat);

for (const key of keys) {
    console.log(key, ":", arafat[key]);
}