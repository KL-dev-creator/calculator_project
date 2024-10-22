let firstNumber = 0;
let operator = "";
let secondNumber = 0;
let isOperator = false;

const displayedText = document.querySelector(".display");

let currentNumber = Number(0);


function add(a, b) {

    result = b + a;
    return result;
}

function subtract(a, b) {
    result = b - a;
    return result;
}


function multiply(a, b) {
    result = b * a;
    return result;
}


function divide(a, b) {
    result = b / a;
    return result;
}

console.log(add(firstNumber, secondNumber))

function operate(firstNumber, operator, secondNumber) {
    if (operator == "+") {
        return add(Number(firstNumber), Number(secondNumber));
    } else if (operator == "-") {
        return subtract(Number(firstNumber), Number(secondNumber));
    } else if (operator == "*") {
        return multiply(Number(firstNumber), Number(secondNumber));
    } else if (operator == "/") {
        return divide(Number(firstNumber), Number(secondNumber));
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

one.addEventListener('click', () => {
    console.log("One has been pressed");
    if (isOperator == true) {
        displayedText.textContent = "1";
    } else if (isOperator == false) {
        displayedText.textContent += "1";
    }
    currentNumber += "1";
    isOperator = false;
    console.log(currentNumber + " " + isOperator);
    })

two.addEventListener('click', () => {
    console.log("Two has been pressed")
    if (isOperator == true) {
        displayedText.textContent = "2";
    } else if (isOperator == false) {
        displayedText.textContent += "2";
    }
    currentNumber += "2";
    isOperator = false;
    console.log(currentNumber);
    })

three.addEventListener('click', () => {
    console.log("Three has been pressed")
    if (isOperator == true) {
        displayedText.textContent = "3";
    } else if (isOperator == false) {
        displayedText.textContent += "3";
    }
    currentNumber += "3";
    isOperator = false;
    console.log(currentNumber);
    })
    
four.addEventListener('click', () => {
    console.log("Four has been pressed")
    if (isOperator == true) {
        displayedText.textContent = "4";
    } else if (isOperator == false) {
        displayedText.textContent += "4";
    }
    currentNumber += "4";
    isOperator = false;
    console.log(currentNumber);
    })

five.addEventListener('click', () => {
    console.log("Five has been pressed")
    if (isOperator == true) {
        displayedText.textContent = "5";
    } else if (isOperator == false) {
        displayedText.textContent += "5";
    }
    currentNumber += "5";
    isOperator = false;
    console.log(currentNumber);
    })

six.addEventListener('click', () => {
    console.log("Six has been pressed")
    if (isOperator == true) {
        displayedText.textContent = "6";
    } else if (isOperator == false) {
        displayedText.textContent += "6";
    }
    currentNumber += "6";
    isOperator = false;
    console.log(currentNumber);
    })

seven.addEventListener('click', () => {
    console.log("Seven has been pressed")
    if (isOperator == true) {
        displayedText.textContent = "7";
    } else if (isOperator == false) {
        displayedText.textContent += "7";
    }
    currentNumber += "7";
    isOperator = false;
    console.log(currentNumber);
    })

eight.addEventListener('click', () => {
    console.log("Eight has been pressed")
    if (isOperator == true) {
        displayedText.textContent = "8";
    } else if (isOperator == false) {
        displayedText.textContent += "8";
    }
    currentNumber += "8";
    isOperator = false;
    console.log(currentNumber);
    })

nine.addEventListener('click', () => {
    console.log("Nine has been pressed")
    if (isOperator == true) {
        displayedText.textContent = "9";
    } else if (isOperator == false) {
        displayedText.textContent += "9";
    }
    currentNumber += "9";
    isOperator = false;
    console.log(currentNumber);
    })

zero.addEventListener('click', () => {
    console.log("Zero has been pressed")
    if (isOperator == true) {
        displayedText.textContent = "0";
    } else if (isOperator == false) {
        displayedText.textContent += "0";
    }
    currentNumber += "0";
    isOperator = false;
    console.log(currentNumber);
    })

addition.addEventListener('click', () => {
    console.log("+ has been pressed")
    isOperator = true;
    operator = "+";
    if (firstNumber == 0) {
        (firstNumber += currentNumber);
        displayedText.textContent = "+";
    } else if (firstNumber !== 0 && secondNumber == 0) {
        (secondNumber = Number(secondNumber) + Number(firstNumber));
        (firstNumber = currentNumber);
        displayedText.textContent = (Number(firstNumber) + Number(secondNumber));
    } else {
        (secondNumber = Number(secondNumber) + Number(firstNumber));
        (firstNumber = currentNumber);
        displayedText.textContent = (Number(firstNumber) + Number(secondNumber));
        console.log(Number(firstNumber) + " MULTIPLE ADDITION OPERATORS DETECTED");
    }
    currentNumber = 0;
    // displayedText.textContent = "+";
    console.log(currentNumber + " is the current number| " + firstNumber + " is the first number| " + secondNumber + " is the second number| " + isOperator + " is the state of the operator");

    return firstNumber;
    return secondNumber;
    })

subtraction.addEventListener('click', () => {
    console.log("- has been pressed")
    isOperator = true;
    operator = "-";
    if (firstNumber == 0) {
        (firstNumber += currentNumber);
    } else if (firstNumber !== 0 && secondNumber == 0) {
        (secondNumber += firstNumber);
        (firstNumber = currentNumber);
    } else {
        (secondNumber = firstNumber);
        (firstNumber = currentNumber);
    }
    currentNumber = 0;
    displayedText.textContent = "-";
    console.log(currentNumber + " " + firstNumber + " " + isOperator);
    })

multiplication.addEventListener('click', () => {
    console.log("x has been pressed")
    isOperator = true;
    operator = "*";
    if (firstNumber == 0) {
        (firstNumber += currentNumber);
    } else if (firstNumber !== 0 && secondNumber == 0) {
        (secondNumber += firstNumber);
        (firstNumber = currentNumber);
    } else {
        (secondNumber = firstNumber);
        (firstNumber = currentNumber);
    }
    currentNumber = 0;
    displayedText.textContent = "x";
    console.log(currentNumber + " " + firstNumber + " " + isOperator);
    })

division.addEventListener('click', () => {
    console.log("/ has been pressed")
    isOperator = true;
    operator ="/";
    if (firstNumber == 0) {
        (firstNumber += currentNumber);
    } else if (firstNumber !== 0 && secondNumber == 0) {
        (secondNumber += firstNumber);
        (firstNumber = currentNumber);
    } else {
        (secondNumber = firstNumber);
        (firstNumber = currentNumber);
    }
    currentNumber = 0;
    displayedText.textContent = "/";
    console.log(currentNumber + " " + firstNumber + " " + isOperator);  
    })

equals.addEventListener('click', () => {
    console.log("= has been pressed")
    isOperator = false;
    if (firstNumber == 0) {
        (firstNumber += currentNumber);
    } else if (firstNumber !== 0 && secondNumber == 0) {
        (secondNumber += firstNumber);
        (firstNumber = currentNumber);
    } else {
        (secondNumber = firstNumber);
        (firstNumber = currentNumber);
    }
    displayedText.textContent = operate(firstNumber, operator, secondNumber);
    console.log(currentNumber + "The first number is " + firstNumber + "| The second number is " + secondNumber);
    })

// function convertButtonInput(num) {
//     num.addEventListener()
//     return displayedText.textContent += num;
// }

// function CalculatorArray (buttonID, buttonName, isOperator) {
//     buttonID; [1,2,3,4,5,6,7,8,9,0,"+","-","x","/"],
//     buttonName; [one, two, three, four, five, six, seven, eight, nine , zero, addition, subtraction, multiplication, division],
//     isOperator; [false, false, false, false, false, false, false, false, false, false, true, true, true, true]
//     };

// const mappedCalculatorArray = calculatorArray.map(convertButtonInput)

// console.log(CalculatorArray[0])


clear.addEventListener('click', () => {
    currentNumber = 0;
    displayedText.textContent = ""
    })