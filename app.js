let firstNumber = 0;
let operator = "";
let secondNumber = 0;
let isOperator = false;

const displayedText = document.querySelector(".display");

let currentNumber = Number(0);
let holdingNumber = Number(0);


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

one.addEventListener('click', () => {
    console.log("One has been pressed");
    if (isOperator == true) {
        displayedText.textContent = "1";
    } else if (isOperator == false) {
        displayedText.textContent += "1";
    }
    currentNumber += "1";
    isOperator = false;
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

decimal.addEventListener('click', () => {
    console.log(". has been pressed")
    if (isOperator == true) {
        displayedText.textContent = ".";
    } else if (isOperator == false) {
        displayedText.textContent += ".";
    }
    currentNumber += ".";
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
    holdingNumber += Number(currentNumber);
    currentNumber = 0;
    console.log(currentNumber + " is the current number| " + firstNumber + " is the first number| " + secondNumber + " is the second number| " + isOperator + " is the state of the operator| " + holdingNumber + " is the holding number");

    return firstNumber;
    return secondNumber;
    })

subtraction.addEventListener('click', () => {
    // console.log("- has been pressed")
    // isOperator = true;
    // operator = "-";
    // if (firstNumber == 0) {
    //     (firstNumber = currentNumber);
    //     holdingNumber = firstNumber;
    //     displayedText.textContent = "-";
    // } else if (firstNumber !== 0 && secondNumber == 0) {
    //     (secondNumber = Number(firstNumber));
    //     (firstNumber = currentNumber);
    //     holdingNumber -= Number(currentNumber);
    //     displayedText.textContent = (Number(secondNumber) - Number(firstNumber));
    // } else {
    //     (secondNumber = Number(secondNumber) - Number(firstNumber));
    //     (firstNumber = currentNumber);
    //     holdingNumber -= Number(currentNumber);
    //     displayedText.textContent = (Number(secondNumber) - Number(firstNumber));
    //     console.log(Number(firstNumber) + " MULTIPLE SUBTRACTION OPERATORS DETECTED");
    // }
    // currentNumber = 0;
    // console.log(currentNumber + " is the current number| " + firstNumber + " is the first number| " + secondNumber + " is the second number| " + isOperator + " is the state of the operator| " + holdingNumber + " is the holding number");

    // return firstNumber;
    // return secondNumber;
    console.log("+ has been pressed")
    isOperator = true;
    operator = "-";
    if (firstNumber == 0) {
        firstNumber = Number(firstNumber) + (Number(currentNumber)* -1);
        displayedText.textContent = "-";
    } else if (firstNumber !== 0 && secondNumber == 0) {
        secondNumber = (Number(secondNumber) + (Number(firstNumber)* -1));
        (firstNumber = currentNumber);
        displayedText.textContent = ((Number(firstNumber)* -1) + Number(secondNumber));
    } else {
        secondNumber = (Number(secondNumber) + (Number(firstNumber)*-1));
        (firstNumber = currentNumber);
        displayedText.textContent = ((Number(firstNumber)* -1) + Number(secondNumber));
        console.log(Number(firstNumber) + " MULTIPLE SUBTRACTION OPERATORS DETECTED");
    }
    holdingNumber += (Number(currentNumber)*-1);
    currentNumber = 0;
    console.log(currentNumber + " is the current number| " + firstNumber + " is the first number| " + secondNumber + " is the second number| " + isOperator + " is the state of the operator| " + holdingNumber + " is the holding number");

    return firstNumber;
    return secondNumber;
    })

multiplication.addEventListener('click', () => {
    console.log("x has been pressed")
    isOperator = true;
    operator = "*";
    if (firstNumber == 0) {
        (firstNumber = currentNumber);
        holdingNumber = firstNumber;
        displayedText.textContent = "x";
    } else if (firstNumber !== 0 && secondNumber == 0) {
        (secondNumber = Number(firstNumber));
        (firstNumber = currentNumber);
        holdingNumber *= Number(currentNumber);
        displayedText.textContent = (Number(secondNumber) * Number(firstNumber));
    } else {
        (secondNumber = Number(secondNumber) * Number(firstNumber));
        (firstNumber = currentNumber);
        holdingNumber *= Number(currentNumber);
        displayedText.textContent = (Number(secondNumber) * Number(firstNumber));
        console.log(Number(firstNumber) + " MULTIPLE SUBTRACTION OPERATORS DETECTED");
    }
    holdingNumber *= Number(currentNumber);
    currentNumber = 0;
    console.log(currentNumber + " " + firstNumber + " " + isOperator);
    })

division.addEventListener('click', () => {
    console.log("/ has been pressed")
    isOperator = true;
    operator ="/";
    if (firstNumber == 0) {
        (firstNumber = currentNumber);
        holdingNumber = firstNumber;
        displayedText.textContent = "/";
    } else if (firstNumber !== 0 && secondNumber == 0) {
        (secondNumber = Number(firstNumber));
        (firstNumber = currentNumber);
        holdingNumber /= Number(currentNumber);
        displayedText.textContent = (Number(secondNumber) / Number(firstNumber));
    } else {
        (secondNumber = Number(secondNumber) / Number(firstNumber));
        (firstNumber = currentNumber);
        holdingNumber /= Number(currentNumber);
        displayedText.textContent = (Number(secondNumber) / Number(firstNumber));
        console.log(Number(firstNumber) + " MULTIPLE DIVISION OPERATORS DETECTED");
        console.log(currentNumber + " is the current number| " + firstNumber + " is the first number| " + secondNumber + " is the second number| " + isOperator + " is the state of the operator| " + holdingNumber + " is the holding number");
    }
    holdingNumber /= Number(currentNumber);
    currentNumber = 0;
    console.log(currentNumber + " is the current number| " + firstNumber + " is the first number| " + secondNumber + " is the second number| " + isOperator + " is the state of the operator| " + holdingNumber + " is the holding number");
    })

equals.addEventListener('click', () => {
    console.log("= has been pressed")
    isOperator = true;
    if (firstNumber == 0) {
        (firstNumber += currentNumber);
    } else if (firstNumber !== 0 && secondNumber == 0) {
        (secondNumber += firstNumber);
        (firstNumber = currentNumber);
    } else {
        (secondNumber = firstNumber);
        (firstNumber = currentNumber);
    }
    displayedText.textContent = Math.round(operate(firstNumber, operator, secondNumber) * 100) / 100;
    currentNumber = 0;
    firstNumber = 0;
    secondNumber = 0;
    holdingNumber = 0;
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
    firstNumber = 0;
    secondNumber = 0;
    holdingNumber = 0;
    isOperator = false;
    displayedText.textContent = ""
    })