let firstNumber = 0;
let operator = "";
let secondNumber = 0;

let currentNumber = "";


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
    console.log("One has been pressed");
    currentNumber += "1";
    console.log(currentNumber);
    })

two.addEventListener('click', () => {
    console.log("Two has been pressed")
    currentNumber += "2";
    console.log(currentNumber);
    })

three.addEventListener('click', () => {
    console.log("Three has been pressed")
    currentNumber += "3";
    console.log(currentNumber);
    })
    
four.addEventListener('click', () => {
    console.log("Four has been pressed")
    currentNumber += "4";
    console.log(currentNumber);
    })

five.addEventListener('click', () => {
    console.log("Five has been pressed")
    currentNumber += "5";
    console.log(currentNumber);
    })

six.addEventListener('click', () => {
    console.log("Six has been pressed")
    currentNumber += "6";
    console.log(currentNumber);
    })

seven.addEventListener('click', () => {
    console.log("Seven has been pressed")
    currentNumber += "7";
    console.log(currentNumber);
    })

eight.addEventListener('click', () => {
    console.log("Eight has been pressed")
    currentNumber += "8";
    console.log(currentNumber);
    })

nine.addEventListener('click', () => {
    console.log("Nine has been pressed")
    currentNumber += "9";
    console.log(currentNumber);
    })

zero.addEventListener('click', () => {
    console.log("Zero has been pressed")
    currentNumber += "0";
    console.log(currentNumber);
    })

// const calculatorArray = [1,2,3,4,5,6,7,8,9,0,+,-,*,/];

clear.addEventListener('click', () => {
    const displayedText = document.querySelector(".display");
    displayedText.textContent = "12345"
    })