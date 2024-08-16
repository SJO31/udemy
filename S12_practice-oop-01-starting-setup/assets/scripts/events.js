const buttons = document.querySelectorAll('button');

const buttonClickHandler = event => {
    // event.target.disabled = true;
    console.log(event);
}

const anotherButtonClickHandler = () => {
    console.log('This was clicked!');
}

const boundFn = buttonClickHandler.bind(this);

buttons.forEach(btn => {
    // btn.addEventListener('click', buttonClickHandler);
    // btn.addEventListener('mouseenter', buttonClickHandler);
});

// const listItems = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// listItems.forEach(listItem => {
//     listItem.addEventListener('click', event => {
//         event.target.classList.toggle('highlight');
//     })
// })

// list.addEventListener('click', event => {
//     // event.target.classList.toggle('highlight')
//     event.target.closest('li').classList.toggle('highlight');
// })

// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//     event.preventDefault();
//     console.log('hello');
// })