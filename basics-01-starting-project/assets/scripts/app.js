const defaultResult = 0;
let currentResult = defaultResult;
let text = 'Test';

function add() {
    currentResult + userInput.value;
    outputResult(currentResult, userInput.value);
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
addBtn.addEventListener('click', add);

userInput.value = 0;