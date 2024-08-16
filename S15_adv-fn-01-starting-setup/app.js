function add(num1, num2) { // pure function
    return num1 + num2;
}

console.log(add(4, 5));
console.log(add(12, 4));

function addRandom(num1) { // inpure function
    return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
    const sum = num1 + num2;
    previousResult = sum;
    return sum;
}

console.log(addMoreNumbers(1, 4));

const hobbies = ['sports', 'cooking'];

function printHobbies(h) {
    h.push('coding');
    console.log(h);
}

printHobbies(hobbies);


function createTaxCalculator(tax) {
    function calculateTax(amount) {
        return amount * tax;
    }

    return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

// const vatAmount = calculateTax(100, 0.19);
// const incomeTax = calculateTax(100, 0.25);

let userName = 'Joe';

function greetUser() {
    let name = userName;
    console.log(`Hi ${name}`)
}

userName = 'Steven';

greetUser();

function powerOf(x, n) {
    // if (n ===1) {
    //     return x;
    // }
    // return x * powerOf(x, n - 1);
    
    return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));
console.log(powerOf(3, 4));

const myself = {
    name: 'Joe',
    friends: [
        {
            name: 'Sara',
            friends: [
                {
                    name: 'Chris'
                },
                {
                    name: 'Susan',
                    friends: [
                        {
                            name: 'Jonathan'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Jules'
        },
        {
            name: 'Tom'
        }
    ]
}

function getFriendNames(person) {
    const collectNames = [];

    if (!person.friends) {
        return [];
    }

    for (const friend of person.friends) {
        collectNames.push(friend.name);
        collectNames.push(...getFriendNames(friend));
    }

    return collectNames;
}

console.log(getFriendNames(myself));