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

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log('hello');
})