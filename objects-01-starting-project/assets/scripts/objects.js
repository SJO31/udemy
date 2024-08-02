const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

let person = {
    'first name': 'John',
    age: 33,
    hobbies: ['cooking', 'reading'],
    greet: () => alert('Hi there!')
};

// person.isAdmin = 'true';
// delete person.age;

console.log(person['first name']);
console.log(person['age']);