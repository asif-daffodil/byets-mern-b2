const cities = ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet", "Barisal", "Rangpur", "Comilla"];

// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// }

const cityBack = (c, i) => {
    console.log(i + " = " + c);
    return c;
}

// cities.forEach(cityBack);
// cities.map(cityBack);

const datas = cities.map(cityBack);
console.log(datas);

