const numbers = [1, 42, 55, 22, 155, 24, 4, 66, 322, 42, 55, 1, 24];

const filteredNumbers = numbers.filter(el => el > 5);
const mappedNumbers = numbers.map(el => ({num: el}));
const productOfNumbers = numbers.reduce((preVal, curVal) => preVal *= curVal, 1);
let sum = 1;

numbers.forEach(el => {
    sum *= el;
})

console.log(filteredNumbers);
console.log(mappedNumbers);
console.log(productOfNumbers);
console.log(sum);

function findMax(...values) {
    let curMax = values[0]
    for (const val of values) {
        if (val > curMax) { 
            curMax = val; 
        };
    }
    return curMax
}

function findMinMax(...values) {
    let curMax = values[0];
    let curMin = values[0];
    for (const val of values) {
        if (val > curMax) { 
            curMax = val; 
        };
        if (val < curMin) { 
            curMin = val; 
        };
    }
    return [curMin, curMax]
}

console.log(findMax(...numbers));
console.log(...numbers);
const [min, max] = findMinMax(...numbers);
console.log(min, max)


const userIds = new Set();
userIds.add(4)
userIds.add(3)
userIds.add(4)
userIds.add(3)
userIds.add(2)
console.log(userIds);
