const test = "test";

const scope = () => {
    const scopeTest = test;
    console.log(scopeTest);
}

console.log(test);
// console.log(scopeTest);

scope();