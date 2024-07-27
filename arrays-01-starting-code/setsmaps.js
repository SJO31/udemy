// const ids = new Set(['Good','Evening','Sir']);
// ids.add(2);

// for (const entry of ids.entries()) {
//     console.log(entry);
// }

// for (const value of ids.values()) {
//     console.log(value);
    
// }

// console.log(ids);

const person1 = {name: 'Max'};
const person2 = {name: 'Laura'};

const personData = new Map([[person1, [{date: '2024-08-23', price: 10}]]]);

personData.set(person2, [{date: '2024-01-22', price: 44}]);

console.log(personData);
console.log(personData.get(person1));

for ( const entry of personData.entries()) {
    console.log(entry);
    
}

for (const key of personData.keys()) {
    console.log(key);
    
}
console.log(personData.size);
