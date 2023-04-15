const btnDelete = document.getElementById("delete");
const btnClear = document.getElementById("clear");
const btnLastAns = document.getElementById("last-answer");
const btnGetResult = document.getElementById("result");
const resultDisplay = document.getElementById("calculator-data");
let arrFirstNumb = [];
let numb = "";
let separatedArray;
let lastAns = 0;
let operator;
let error = "Syntax ERROR";
let mathError = "Math ERROR";
let countClick = 0;

function writeNumber(dataFromButton) {
    arrFirstNumb.push(dataFromButton.value);
    numb = arrFirstNumb.join("")
    resultDisplay.setAttribute('value', numb);
}

function writeOperator(operatorFromBtn) {
    if (countClick !== 0) {
        operation();
        operator = operatorFromBtn.value;
        arrFirstNumb.push(operatorFromBtn.value);
        numb = arrFirstNumb.join("")
    }
    else {
        operator = operatorFromBtn.value;
        countClick++;
    }
}

function sum() {
    separatedArray = numb.split('+');

    let sum = parseFloat(separatedArray[0]) + parseFloat(separatedArray[1]);
    if (isNaN(sum)) {
        numb = error;
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
        numb = error;
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
        numb = error;
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

    if  (divisor === 0) { resultDisplay.setAttribute('value', mathError); numb = mathError;}
    else {

        let divide = parseFloat(separatedArray[0]) / divisor;
        
        if (isNaN(divide)) {
            numb = error;
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
    let exPowerTen = 0;
    separatedArray = numb.split('E');
    exPowerTen = Math.pow(10, parseFloat(separatedArray[0]));
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
        operationFunction();
    } else {
        resultDisplay.setAttribute('value', error);
    }
}

btnGetResult.addEventListener('click', function() {
    operation();
    countClick = 0;
});

btnClear.addEventListener('click', function() {
    lastAns = arrFirstNumb.join("");
    btnLastAns.value = lastAns;
    reset()
});

btnDelete.addEventListener('click', function() {
    let plus, min, times, divide, expo;
    plus = numb.indexOf("+")
    min = numb.indexOf("-")
    times = numb.indexOf("x")
    divide = numb.indexOf("÷")
    expo = numb.indexOf("-")
    countClick = 0;
    if (numb === error || numb === mathError) {
        reset();
    } else {
        if (plus !== -1 || min !== -1 || times !== -1 || divide !== -1 || expo !== -1) {
            deleteInput();    
        } else {
            countClick = 1;
            deleteInput();
        }
    }
});

function deleteInput() {
    arrFirstNumb.pop();
    numb = arrFirstNumb.join("");
    resultDisplay.setAttribute('value', numb);
}

function reset() {
    numb = 0;
    operator = "";
    arrFirstNumb = [];
    resultDisplay.setAttribute('value', 0);
    countClick = 0;
}