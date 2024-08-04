const randomNumber1 = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random();

if (randomNumber1 > 0.7) {
    alert(`Hey, the number ${randomNumber1} is greater than 0.7`)
}

if ((randomNumber1 > 0.7 && randomNumber2 > 0.7) || (randomNumber1 < 0.2 || randomNumber2 < 0.2)) {
    alert(`Condition met! Random Number 1: ${randomNumber1},  Random Number 2: ${randomNumber2}`)
}

let numArr = [1, 4, 6, 23, 55, 211];

for (let i = numArr.length - 1; i >= 0; i--) {
    console.log(numArr[i]);
}
for (const num of numArr) {
    console.log(num);
}