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
const hobbies = ['gaming', 'cooking'];
hobbies.push('reading');
hobbies.pop(); // removes the last value
hobbies.unshift('coding');
hobbies.shift(); // removes the first value

// hobbies[1] = 'swimming'; // rarely used
console.log(hobbies);

let gameName = 'Super Mario';

hobbies.splice(1, 0, 'soccer');
// gameName.splice(6, 7, 'Luigi and '); // does not work!