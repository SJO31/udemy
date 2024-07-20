const nameInput1 = (salutation = 'Dear', name = 'Sir') => {
  let greeting;
  if (salutation && name) {
    console.log(`${salutation} ${name}`);
    greeting = `${salutation} ${name}. What a great day!`
  } else {
    console.log(`Hi Joe`);
  }
  return greeting;
}
const nameInput2 = (name, phrase) => console.log(`${phrase} ${name}`);
const nameInput3 = () => console.log(`Dear Sir`);
const nameInput4 = name => `Dear ${name}`;
const nameInput5 = (name, phrase = 'Dear') => console.log(`${phrase} ${name}`);

nameInput1(undefined, 'John');
nameInput2('Hello', 'John');
nameInput3();
console.log(nameInput4('Hello', 'John'));

function checkInput(cb, ...arg) {
  let hasEmptyText = false;
  for (const text of arg) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(() => {
  console.log('All not empty')
}, 'hi', '142', 'asdf', 'sdf')

