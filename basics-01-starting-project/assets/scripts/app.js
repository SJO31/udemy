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
function add() {
    const inputNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += inputNum;
    createAndWriteOutput('+', initialResult, inputNum);
    addLogEntry('ADD', initialResult, inputNum, currentResult);
}
function subtract() {
    const inputNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= inputNum;
    createAndWriteOutput('-', initialResult, inputNum);
    addLogEntry('SUBTRACT', initialResult, inputNum, currentResult);
}
function multiply() {
    const inputNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= inputNum;
    createAndWriteOutput('*', initialResult, inputNum);
    addLogEntry('MULTIPLY', initialResult, inputNum, currentResult);
}
function divide() {
    const inputNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= inputNum;
    createAndWriteOutput('/', initialResult, inputNum);
    addLogEntry('DIVIDE', initialResult, inputNum, currentResult);
}
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

userInput.value = 0;