const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;
const ulNode = document.querySelector('ul');

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

button.addEventListener('click', () => {
  // if (section.className === 'red-bg visible') {
  //   section.className = 'red-bg invisible';
  // } else {
  //   section.className = 'red-bg visible';
  // }

  // section.classList.toggle('visible');
  section.classList.toggle('invisible');
});

const li1 = document.createElement('li');
const li2 = document.createElement('li');

li1.textContent = 'Item 4';
li2.textContent = 'Item 5';

ulNode.append(li1);
ulNode.lastElementChild.before(li2);

const li3 = li1.cloneNode(true);
ulNode.append(li3);