// // Basic Array
// const numbers1 = [1, 2, 3];
// console.log(numbers1);

// // Array Function; This array method is slower as brackets!
// const numbers2 = new Array(5); // creates an array of length 5, NOT with the element 5
// console.log(numbers2);

// // This array method is slower as brackets!
// const numbers3 = Array.of(1, 2);
// console.log(numbers3);

// const numbers4 = Array.from('Hello');
// console.log(numbers4);

// Let's try some array functions

// const hobbies = ['gaming', 'cooking'];
// hobbies.push('reading');
// hobbies.pop(); // removes the last value
// hobbies.unshift('coding');
// hobbies.shift(); // removes the first value

// // hobbies[1] = 'swimming'; // rarely used
// hobbies.splice(1, 0, 'soccer');
// hobbies.splice(-2, 1);

// console.log(hobbies);

// let gameName = 'Super Mario';

// gameName.splice(6, 7, 'Luigi and '); // does not work!

// const examResults23 = [1, 3, 3, 2, 5, 2];
// const examResults24 = examResults23.slice(1, 4);
// const examResults25 = examResults23.concat(5, 5, 2);

// console.log(examResults23);
// console.log(examResults24);
// console.log(examResults25);

// console.log(examResults25.indexOf(2));

// const personas = ['max', 'stefan', 'laura', 'john', 'stuart'];
// const personas = [{name: 'max'}, {name: 'stefan'}, {name: 'laura'}, {name: 'john'}, {name: 'stuart'}];

// const stuart = personas.find((person, idx, persons) => {
//     return person.name == 'stuart';
// });
// console.log(stuart);

const prices = [3.99, 15.99, 40, 52.49];
const tax = 0.19;
const taxAdjustedPrices = [];

prices.forEach((price, idx, prices) => {
    const priceObj = { index: idx, taxAdjPrices: price * (1 + tax) }
    taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);