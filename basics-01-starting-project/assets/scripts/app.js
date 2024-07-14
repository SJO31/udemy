const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseFloat(userInput.value);
}
function createAndWriteOutput(operator, resultBeforeCalc, calcNum) {
    const calcDesc = `${resultBeforeCalc} ${operator} ${calcNum}`;
    outputResult(currentResult, calcDesc);
}
function addLogEntry(operator, initialResult, num, currentResult) {
    const logEntry = {
        operation: operator,
        prevResult: initialResult,
        number: num,
        result: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}
function executeCalculation(calcType) {
    const inputNum = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if(calcType === 'ADD') {
        currentResult += inputNum;
        mathOperator = '+';
    } else if(calcType === 'SUBTRACT') {
        currentResult -= inputNum;
        mathOperator = '-';
    } else if(calcType === 'MULTIPLY') {
        currentResult *= inputNum;
        mathOperator = '*';
    } else if(calcType === 'DIVIDE') {
        currentResult /= inputNum;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator, initialResult, inputNum);
    addLogEntry(calcType, initialResult, inputNum, currentResult);
}
function add() {
    executeCalculation('ADD');
}
function subtract() {
    executeCalculation('SUBTRACT');
}
function multiply() {
    executeCalculation('MULTIPLY');
}
function divide() {
    executeCalculation('DIVIDE');
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

userInput.value = 0;