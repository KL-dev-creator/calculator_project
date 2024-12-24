let firstNumber = 0;
let negativeFirstNumber = (firstNumber*-1);
let operator = "";
let secondNumber = 0;
let isOperator = false;
let decimalCounter = 0;
let operatorBypass = 0;


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
    } else if (operator == "/" ) {
        return divide(Number(firstNumber), Number(secondNumber));
    } else {
        return "Error";
    }
}

document.addEventListener("keyup", event => {
    if (event.key == 1) {
        console.log("One has been pressed");
        if (isOperator == true) {
            displayedText.textContent = "1";
        } else if (isOperator == false) {
            displayedText.textContent += "1";
        }
        currentNumber += "1";
        isOperator = false;
    } else if (event.key == 2) {
        console.log("Two has been pressed")
        if (isOperator == true) {
            displayedText.textContent = "2";
        } else if (isOperator == false) {
            displayedText.textContent += "2";
        }
        currentNumber += "2";
        isOperator = false;
    } else if (event.key == 3) {
        console.log("Three has been pressed")
        if (isOperator == true) {
            displayedText.textContent = "3";
        } else if (isOperator == false) {
            displayedText.textContent += "3";
        }
        currentNumber += "3";
        isOperator = false;
    } else if (event.key == 4) {
        console.log("Four has been pressed")
        if (isOperator == true) {
            displayedText.textContent = "4";
        } else if (isOperator == false) {
            displayedText.textContent += "4";
        }
        currentNumber += "4";
        isOperator = false;
    } else if (event.key == 5) {
        console.log("Five has been pressed")
        if (isOperator == true) {
            displayedText.textContent = "5";
        } else if (isOperator == false) {
            displayedText.textContent += "5";
        }
        currentNumber += "5";
        isOperator = false;
    } else if (event.key == 6) {
        console.log("Six has been pressed")
        if (isOperator == true) {
            displayedText.textContent = "6";
        } else if (isOperator == false) {
            displayedText.textContent += "6";
        }
        currentNumber += "6";
        isOperator = false;  
    } else if (event.key == 7) {
        console.log("Seven has been pressed")
        if (isOperator == true) {
            displayedText.textContent = "7";
        } else if (isOperator == false) {
            displayedText.textContent += "7";
        }
        currentNumber += "7";
        isOperator = false;
    } else if (event.key == 8) {
        console.log("Eight has been pressed")
        if (isOperator == true) {
            displayedText.textContent = "8";
        } else if (isOperator == false) {
            displayedText.textContent += "8";
        }
        currentNumber += "8";
        isOperator = false;
    } else if (event.key == 9) {
        console.log("Nine has been pressed")
        if (isOperator == true) {
            displayedText.textContent = "9";
        } else if (isOperator == false) {
            displayedText.textContent += "9";
        }
        currentNumber += "9";
        isOperator = false;
    } else if (event.key == 0) {
        console.log("Zero has been pressed")
        if (isOperator == true) {
            displayedText.textContent = "0";
        } else if (isOperator == false) {
            displayedText.textContent += "0";
        }
        currentNumber += "0";
        isOperator = false;
    }
});



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
    const decimalString = '.';

    if ((currentNumber.includes(decimalString)) == true) {
            if (isOperator == true) {
                displayedText.textContent = ".";
            }
    } else {
            if (isOperator == true) {
                displayedText.textContent = ".";
            } else if (isOperator == false) {
                displayedText.textContent += ".";
            }
        currentNumber += ".";
    }
    isOperator = false;
    })

PosNegToggle.addEventListener('click', () => {
    console.log("+/- has been pressed")
    if (isOperator == true) {
        displayedText.textContent = " ";
    } else if (isOperator == false) {
        displayedText.textContent *= -1;
    }
    currentNumber *= -1;
    isOperator = false;
    })

backspace.addEventListener('click', () => {
    console.log("backspace has been pressed")
    if (isOperator == true) {
        displayedText.textContent = " ";
        operator = "";
        // Edits need to be made here to prevent erros when backspacing operators
    } else if (isOperator == false) {
        currentNumber = Number(currentNumber);
        let currentNumberLengthSubtractOne = ((String(Number(currentNumber)).length) - 1);
        let NewcurrentNumber = String(currentNumber).slice(0, (currentNumberLengthSubtractOne));
        displayedText.textContent = NewcurrentNumber;

        currentNumber = NewcurrentNumber;
        NewcurrentNumber = 0;
    }
    isOperator = false;
    })

addition.addEventListener('click', () => {
    console.log("+ has been pressed")
    isOperator = true;
    if (operator !== "+") {
            if (operator == "-") {
                firstNumber = Number(firstNumber) - Number(currentNumber);
                displayedText.textContent = firstNumber + " +";
                console.log("subtraction now addition")
            } else if (operator == "*") {
                firstNumber = Number(firstNumber) * Number(currentNumber);
                displayedText.textContent = firstNumber + " +";
                console.log("multiplication now addition")
            } else if (operator == "/") {
                firstNumber = Number(firstNumber) / Number(currentNumber);
                displayedText.textContent =  (firstNumber.toPrecision(8)) + " +";
                console.log("division now addition")
            } else if (operator == "") {
                firstNumber = currentNumber;
                displayedText.textContent = "+";
                console.log("nothing to addition")
            }
            operator = "+";
            currentNumber = 0;

            return firstNumber;
            return secondNumber;
    } else {
        if (operator == "+" && currentNumber == 0) {
            console.log("Double addition detected")
        } else {
                operator = "+";
                if (firstNumber == 0) {
                    (firstNumber += Number(currentNumber));
                    displayedText.textContent = "+";
                } else if (firstNumber !== 0 && secondNumber == 0) {
                    (secondNumber = Number(secondNumber) + Number(firstNumber));
                    (firstNumber = currentNumber);
                    displayedText.textContent = (Number(firstNumber) + Number(secondNumber));
                } else {
                    (secondNumber = Number(secondNumber) + Number(firstNumber));
                    (firstNumber = currentNumber);
                    displayedText.textContent = (Number(firstNumber) + Number(secondNumber));
                }
                holdingNumber += Number(currentNumber);
                currentNumber = 0;
                return firstNumber;
                return secondNumber;
            }
        }
    })

subtraction.addEventListener('click', () => {
    console.log("- has been pressed")
    isOperator = true;
    if (operator !== "-" || operator == "") {
        if (operator == "+") {
            firstNumber = Number(firstNumber) + Number(currentNumber);
            secondNumber = Number(secondNumber) + Number(firstNumber);
            displayedText.textContent = secondNumber + " -";
            console.log("addition now subtraction")
        } else if (operator == "*") {
            firstNumber = Number(firstNumber) * Number(currentNumber);
            displayedText.textContent = firstNumber + " -";
            console.log("multiplication now subtraction")
        } else if (operator == "/") {
            firstNumber = Number(firstNumber) / Number(currentNumber);
            displayedText.textContent = firstNumber + " -";
            console.log("division now subtraction")
        } else if (operator == "") {
            firstNumber = currentNumber;
            displayedText.textContent = "-"
            console.log("Nothing now subtraction")
        }

        operator = "-";
        currentNumber = 0;
        
        return firstNumber;
        return secondNumber;
    } else {
        if (operator == "-" && currentNumber == 0)   {
            console.log("Double subtraction detected")
        } else {
                operator = "-";
                if (firstNumber == 0) {
                    if (secondNumber == 0) {
                        firstNumber = currentNumber;
                        holdingNumber = firstNumber;
                        displayedText.textContent = Number(currentNumber);
                    } else if (secondNumber !== 0) {
                        firstNumber = currentNumber;
                        holdingNumber -= Number(currentNumber);
                        displayedText.textContent = holdingNumber;
                    }
                } else if (firstNumber !== 0 && secondNumber == 0) {
                    secondNumber = Number(firstNumber);
                    firstNumber = currentNumber;
                    holdingNumber -= Number(currentNumber);
                    secondNumber = (Number(secondNumber) - Number(firstNumber));
                    displayedText.textContent = (secondNumber);
                } else {
                    // To avoid numbers becoming negative
                    if (currentNumber < 0) {
                        currentNumber = -currentNumber; 
                    }
                    if (firstNumber < 0) {
                        firstNumber = -firstNumber; 
                    }
                    if (secondNumber < 0) {
                        secondNumber = -secondNumber;
                    }
                    holdingNumber -= Number(currentNumber);

                    firstNumber = currentNumber;
                    secondNumber = secondNumber - firstNumber;

                    displayedText.textContent = Number(secondNumber);
                    // Errors may be present here
                }
                currentNumber = 0;
                
                firstNumber = holdingNumber;
                return firstNumber;
                return secondNumber;
            }
        }
    })

multiplication.addEventListener('click', () => {
    console.log("x has been pressed")
    isOperator = true;
    if (operator !== "*" || operator == "") {
        if (operator == "+") {
            firstNumber = Number(firstNumber) + Number(currentNumber);
            displayedText.textContent = firstNumber + " x";
            console.log("addition now multiplication")
        } else if (operator == "-") {
            firstNumber = Number(firstNumber) - Number(currentNumber);
            displayedText.textContent = firstNumber + " x";
            console.log("subtraction now multiplication")
        } else if (operator == "/") {
            firstNumber = Number(firstNumber) / Number(currentNumber);
            displayedText.textContent = firstNumber + " x";
            console.log("division now multiplication")
        } else if (operator == "") {
            firstNumber = currentNumber;
            displayedText.textContent = "x";
            console.log("Nothing now multiplication")
        }
        operator = "*";
        operatorBypass = currentNumber;
        currentNumber = 0;

        return firstNumber;
        return secondNumber;
    } else {
        if (operator == "*" && currentNumber == 0)  {
            console.log("Double multiplication detected")
        } else {
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
                }
                holdingNumber *= Number(currentNumber);
                currentNumber = 0;
                return firstNumber;
                return secondNumber;
            }
        }
    })

division.addEventListener('click', () => {
    console.log("/ has been pressed")
    isOperator = true;
    if (operator !== "/" || operator == "") {
        if (operator == "+") {
            firstNumber = Number(firstNumber) + Number(currentNumber);
            displayedText.textContent = firstNumber + " /";
            console.log("addition now division")
        } else if (operator == "-") {
            firstNumber = Number(firstNumber) - Number(currentNumber);
            displayedText.textContent = firstNumber + " /";
            console.log("subtraction now division")
        } else if (operator == "*") {
            firstNumber = Number(firstNumber) * Number(currentNumber);
            operatorBypass = 0;

            displayedText.textContent = firstNumber + " /";            
            console.log("multiplication now division")
        } else if (operator == "") {
            firstNumber = currentNumber;
            displayedText.textContent = "/"
            console.log("Nothing now division")
        }
        operator = "/";
        operatorBypass = currentNumber;
        currentNumber = 0;

        return firstNumber;
        return secondNumber;
    } else  {
        if (operator == "/" && currentNumber == 0) {
            if (currentNumber == 0) {
                displayedText.textContent = "Nice try, but dividing by 0 is impossible"
                currentNumber = 0;
                firstNumber = 0;
                secondNumber = 0;
                holdingNumber = 0;
                isOperator = false;
            }
            console.log("Double division detected")
        } else {
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
                }
                holdingNumber /= Number(currentNumber);
                currentNumber = 0;
                return firstNumber;
                return secondNumber;
            }
        }
    })

equals.addEventListener('click', () => {
    console.log("= has been pressed")

    isOperator = true;
    if (secondNumber == 0 && firstNumber !== 0 && currentNumber == 0 && operator == "/") {
        displayedText.textContent = "Nice try, but dividing by 0 is impossible"
        currentNumber = 0;
        firstNumber = 0;
        secondNumber = 0;
        holdingNumber = 0;
        isOperator = false;
    } else if (firstNumber == 0) {
        (firstNumber += currentNumber);
        let calculatedResult = operate(firstNumber, operator, secondNumber)
            if (calculatedResult % 1 == 0) {
                displayedText.textContent = (operate(firstNumber, operator, secondNumber));
            } else  {
                displayedText.textContent = (Number.parseFloat(operate(firstNumber, operator, secondNumber).toPrecision(8)));
            }
    } else if (firstNumber !== 0 && secondNumber == 0) {
        (secondNumber += firstNumber);
        (firstNumber = currentNumber);
        let calculatedResult = operate(firstNumber, operator, secondNumber)
            if (calculatedResult % 1 == 0) {
                displayedText.textContent = (operate(firstNumber, operator, secondNumber));
            } else  {
                displayedText.textContent = (Number.parseFloat(operate(firstNumber, operator, secondNumber).toPrecision(8)));
            }
    } else {
        if (operator == "+") {
            (secondNumber += Number(firstNumber));
            (firstNumber = currentNumber);
            displayedText.textContent = (Number.parseFloat(operate(firstNumber, operator, secondNumber).toPrecision(8)));
        } else if (operator == "-") {
            (firstNumber = Number(currentNumber));
            (secondNumber -= Number(firstNumber));
            displayedText.textContent = (Number.parseFloat(secondNumber.toPrecision(8)));
        } else if (operator == "*") {
            (secondNumber *= Number(firstNumber));
            (firstNumber = currentNumber);
            displayedText.textContent = (Number.parseFloat(operate(firstNumber, operator, secondNumber).toPrecision(8)));
        } else if (operator == "/") {
            (secondNumber = Number(firstNumber) / Number(currentNumber));
            (firstNumber = Number(currentNumber));
            displayedText.textContent = (Number.parseFloat(secondNumber.toPrecision(8)));
        }
    }
    currentNumber = 0;
    firstNumber = 0;
    secondNumber = 0;
    holdingNumber = 0;
    operator = "";
    })

clear.addEventListener('click', () => {
    currentNumber = 0;
    firstNumber = 0;
    secondNumber = 0;
    holdingNumber = 0;
    isOperator = false;
    displayedText.textContent = ""
    })