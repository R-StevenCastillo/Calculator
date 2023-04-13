const btnAdd = document.querySelectorAll(".add");
const btnSubtract = document.getElementById("subtract");
const btnMultiply = document.getElementById("multiply");
const btnDivide = document.getElementById("divide");
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

function writeNumber(dataFromButton) {
    arrFirstNumb.push(dataFromButton.value);
    numb = arrFirstNumb.join("")
    resultDisplay.setAttribute('value', numb);
}

function sum() {
    separatedArray = numb.split('+');
    console.log(separatedArray)

    let sum = parseFloat(separatedArray[0]) + parseFloat(separatedArray[1]);
    arrFirstNumb = [];
    arrFirstNumb.push(sum);
    resultDisplay.setAttribute('value', sum);
}

function subtract() {
    separatedArray = numb.split('-');

    let sub = parseFloat(separatedArray[0]) - parseFloat(separatedArray[1]);
    arrFirstNumb = [];
    arrFirstNumb.push(sub);
    resultDisplay.setAttribute('value', sub);
}

function multiply() {
    separatedArray = numb.split('x');

    let multiply = parseFloat(separatedArray[0]) * parseFloat(separatedArray[1]);
    arrFirstNumb = [];
    arrFirstNumb.push(multiply);
    resultDisplay.setAttribute('value', multiply);
}

function divide() {
    separatedArray = numb.split('÷');

    let divide = parseFloat(separatedArray[0]) / parseFloat(separatedArray[1]);
    arrFirstNumb = [];
    arrFirstNumb.push(divide);
    resultDisplay.setAttribute('value', divide);
}

//Try Sum

btnGetResult.addEventListener('click', sum);

btnClear.addEventListener('click', function() {
    resultDisplay.setAttribute('value', 0)
});

btnDelete.addEventListener('click', function() {
    numb = 0;
    arrFirstNumb = [];
    resultDisplay.setAttribute('value', 0);
});

function operation() {

}