const btnDelete = document.getElementById("delete");
const btnClear = document.getElementById("clear");
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
}

function sum() {
    separatedArray = numb.split('+');

    let sum = parseFloat(separatedArray[0]) + parseFloat(separatedArray[1]);
    if (isNaN(sum)) {
        resultDisplay.setAttribute('value', error);
    } else {
        let formatSum = sum.toFixed(10).replace(/\.?0+$/, '');
        arrFirstNumb = [];
        arrFirstNumb.push(formatSum);
        resultDisplay.setAttribute('value', formatSum);
    }
}

function subtract() {
    separatedArray = numb.split('-');

    let sub = parseFloat(separatedArray[0]) - parseFloat(separatedArray[1]);
    if (isNaN(sub)) {
        resultDisplay.setAttribute('value', error);
    } else {
        let formatSub = sub.toFixed(10).replace(/\.?0+$/, '');
        arrFirstNumb = [];
        arrFirstNumb.push(formatSub);
        resultDisplay.setAttribute('value', formatSub);
    }
}

function multiply() {
    separatedArray = numb.split('x');

    let multiply = parseFloat(separatedArray[0]) * parseFloat(separatedArray[1]);
    if (isNaN(multiply)) {
        resultDisplay.setAttribute('value', error);
    } else {
        let formatMultiply = multiply.toFixed(10).replace(/\.?0+$/, '');
        arrFirstNumb = [];
        arrFirstNumb.push(formatMultiply);
        resultDisplay.setAttribute('value', formatMultiply);
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
            let formatDivision = divide.toFixed(10).replace(/\.?0+$/, '');
            arrFirstNumb = [];
            arrFirstNumb.push(formatDivision);
            resultDisplay.setAttribute('value', formatDivision);
        }
    }
}

function powerOfTen() {
    separatedArray = numb.split('E');
    exPowerTen = Math.pow(10, parseFloat(separatedArray[0]));
    console.log(exPowerTen);
    arrFirstNumb = [];
    arrFirstNumb.push(exPowerTen.toFixed(8));
    resultDisplay.setAttribute('value', exPowerTen.toFixed(8));
}

const operations = {
    "+": sum,
    "-": subtract,
    "x": multiply,
    "÷": divide,
    "E": powerOfTen
};

function operation() {
    const operationFunction = operations[operator];
    if (operationFunction) {
        operationFunction()
    } else {
        resultDisplay.setAttribute('value', error);
    }
}

btnGetResult.addEventListener('click', operation);

btnClear.addEventListener('click', function() {
    lastAns = arrFirstNumb.join("");
    btnLastAns.value = lastAns;
    reset()
});

//Disable decimal button (This is not allowed => 12.12.12.12 x 12.12.12 0.0)
//Add a way to make operation more dinamic, like 12 + 3 = 15 - 5 = 10 * 2 = 20 / 5 = 2

btnDelete.addEventListener('click', function() {
    arrFirstNumb.pop();
    numb = arrFirstNumb.join("");
    resultDisplay.setAttribute('value', numb);
});

function reset() {
    numb = 0;
    operator = "";
    arrFirstNumb = [];
    resultDisplay.setAttribute('value', 0);
}