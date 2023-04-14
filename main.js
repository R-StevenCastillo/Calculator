const btnDelete = document.getElementById("delete");
const btnClear = document.getElementById("clear");
const btnDecimal = document.getElementById("decimal");
const btnExp = document.getElementById("exponential");
const btnLastAns = document.getElementById("last-answer");
const btnGetResult = document.getElementById("result");
const resultDisplay = document.getElementById("calculator-data")
let result = 1;
let arrFirstNumb = [];
let numb = "";
let separatedArray;
let exPowerTen = 0;
let lastAns = 0;
let operator;
let error = "Syntax ERROR";
let mathError = "Math ERROR";

function writeNumber(dataFromButton) {
    arrFirstNumb.push(dataFromButton.value);
    numb = arrFirstNumb.join("")
    resultDisplay.setAttribute('value', numb);
}

function writeOperator(operatorFromBtn) {
    operator = operatorFromBtn.value;
    console.log(operator);
}

function sum() {
    separatedArray = numb.split('+');

    let sum = parseFloat(separatedArray[0]) + parseFloat(separatedArray[1]);
    if (isNaN(sum)) {
        resultDisplay.setAttribute('value', error);
    } else {
        arrFirstNumb = [];
        arrFirstNumb.push(sum);
        resultDisplay.setAttribute('value', sum);
    }

}

function subtract() {
    separatedArray = numb.split('-');

    let sub = parseFloat(separatedArray[0]) - parseFloat(separatedArray[1]);
    if (isNaN(sub)) {
        resultDisplay.setAttribute('value', error);
    } else {
        arrFirstNumb = [];
        arrFirstNumb.push(sub);
        resultDisplay.setAttribute('value', sub);
    }
}

function multiply() {
    separatedArray = numb.split('x');

    let multiply = parseFloat(separatedArray[0]) * parseFloat(separatedArray[1]);
    if (isNaN(multiply)) {
        resultDisplay.setAttribute('value', error);
    } else {
        arrFirstNumb = [];
        arrFirstNumb.push(multiply);
        resultDisplay.setAttribute('value', multiply);
    }
}

function divide() {
    separatedArray = numb.split('÷');
    let divisor = 0;
    divisor = parseFloat(separatedArray[1]);

    if  (divisor === 0) { resultDisplay.setAttribute('value', mathError)}
    else {

        let divide = parseFloat(separatedArray[0]) / divisor;
        
        if (isNaN(divide)) {
            resultDisplay.setAttribute('value', error);
        } else {
            arrFirstNumb = [];
            arrFirstNumb.push(divide);
            resultDisplay.setAttribute('value', divide);
        }
    }
}

function powerOfTen() {
    separatedArray = numb.split('E');
    exPowerTen = Math.pow(10, parseFloat(separatedArray[0]));
    console.log(exPowerTen);
    resultDisplay.setAttribute('value', exPowerTen);
}

function operation() {
    if (operator === "+") {
        sum();
    } else if (operator === "-") {
        subtract();
    } else if (operator === "x") {
        multiply();
    } else if (operator === "÷") {
        divide();
    } else if (operator === "E") {
        powerOfTen();
    }
}

btnGetResult.addEventListener('click', operation);

btnClear.addEventListener('click', function() {
    lastAns = arrFirstNumb.join("");
    btnLastAns.value = lastAns;
    reset()
});

btnDelete.addEventListener('click', reset)

function reset() {
    numb = 0;
    operator = "";
    arrFirstNumb = [];
    resultDisplay.setAttribute('value', 0);
}