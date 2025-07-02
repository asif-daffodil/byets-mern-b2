const main = document.getElementById("main");
const pain = document.getElementsByClassName("pain")[0];
const pain2 = document.getElementsByClassName("pain")[1];
const rain = document.querySelector("#rain");
const h1 = document.querySelector("h1");
const chain = document.querySelector(".chain");
const chain2 = document.querySelectorAll(".chain");
const cityList = document.querySelector("#cityList");


main.innerHTML = "<h1>Apurba is a good boy.</h1>";
pain.innerText = "Apurba is not a bad boy.";
pain2.innerText = "Apurba is a nice boy.";
rain.textContent = "It is raining today.";
h1.textContent = "Bangladesh!";
chain.textContent = "Apurba is a busy boy.";
chain2[1].textContent = "Apurba will not get leave today.";

// console.log(cityList.childNodes);
// console.log(cityList.children);

cityList.children[0].textContent = "Dhaka";
cityList.children[1].textContent = "Chittagong";
cityList.children[2].textContent = "Sylhet";
cityList.children[3].textContent = "Rajshahi";
cityList.children[4].textContent = "Khulna";

// select parent element
console.log(cityList.parentElement);
console.log(cityList.parentNode);
// select next sibling
console.log(cityList.nextElementSibling);
console.log(cityList.nextSibling);
// select previous sibling
console.log(cityList.previousElementSibling);
console.log(cityList.previousSibling);

cityList.nextElementSibling.textContent = "This is the next sibling of cityList.";

cityList.previousElementSibling.textContent = "This is the previous sibling of cityList.";