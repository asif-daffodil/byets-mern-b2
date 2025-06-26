const prompt = require('prompt-sync')({ sigint: true });

const input = prompt('Enter a string: ');
console.log('You entered:', input);