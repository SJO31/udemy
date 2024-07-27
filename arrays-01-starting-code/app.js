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


// forEach Function
// const prices = [3.99, 15.99, 40, 52.49, 5.99, 11.39, 38];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// prices.forEach((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjPrices: price * (1 + tax) }
//     taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

// // Map Function
// const newPrices = prices.map((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjPrices: price * (1 + tax) }
//     return priceObj;
// });

// console.log(prices, newPrices);

// const sortedPrices = prices.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return -1; 
//     }
// });
// console.log(prices);
// console.log(prices.reverse());

// const filteredArray = prices.filter((price, idx, prices) => {
//     return price > 15;
// });
// const filteredArray2 = prices.filter(el => el > 15); // same function as before just shortened
// console.log(filteredArray);
// console.log(filteredArray2);

// const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
//     return prevValue += curValue;
// }, 0);
// const sum2 = prices.reduce((prevValue, curValue) => prevValue += curValue, 0);
// console.log(sum);
// console.log(sum2);

// const data = 'london;1200;2024';
// const transformData = data.split(';');
// console.log(transformData);

const names = ['Laura', 'Stefan', 'Tom'];
const copiedNames = [...names];
console.log(copiedNames);
// console.log(Math.min(...prices));


