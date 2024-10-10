let firstNumber = 0;
let operator = "";
let secondNumber = 0;


function add(a, b) {

    result = a + b;
    return result;
}

function subtract(a, b) {
    result = a - b;
    return result;
}


function multiply(a, b) {
    result = a * b;
    return result;
}


function divide(a, b) {
    result = a / b;
    return result;
}

console.log(add(firstNumber, secondNumber))

function operate(firstNumber, operator, secondNumber) {
    if (operator == "+") {
        return add(firstNumber, secondNumber);
    } else if (operator == "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator == "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator == "/") {
        return divide(firstNumber, secondNumber);
    } else {
        return "Error";
    }
}

console.log(add(12, 4))
console.log(subtract(12, 4))
console.log(multiply(12, 4))
console.log(divide(12, 4))

console.log("Testing nested functions below")

console.log(operate(12, "+", 4))
console.log(operate(12, "-", 4))
console.log(operate(12, "*", 4))
console.log(operate(12, "/", 4))
console.log(operate(12, "S", 4))

const oneButton = document.querySelector('.one')
const twoButton = document.querySelector('.two')

one.addEventListener('click', () => {
    console.log("One has been pressed")
    })

clear.addEventListener('click', () => {
    document.querySelector('.display')
    display.innertext
    })