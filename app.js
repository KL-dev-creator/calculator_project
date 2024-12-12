let firstNumber = 0;
let negativeFirstNumber = (firstNumber*-1);
let operator = "";
let secondNumber = 0;
let isOperator = false;
let decimalCounter = 0;


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
    const decimalString = '.';

    if ((currentNumber.includes(decimalString)) == true) {
            if (isOperator == true) {
                displayedText.textContent = ".";
            }
        console.log("yes it has a decimal")
    } else {
            if (isOperator == true) {
                displayedText.textContent = ".";
            } else if (isOperator == false) {
                displayedText.textContent += ".";
            }
        currentNumber += ".";    
        console.log("no it does not have a decimal")
    }
    isOperator = false;
    console.log(currentNumber);
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
    console.log(currentNumber);
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
                displayedText.textContent = firstNumber + " +";
                console.log("division now addition")
            } else if (operator == "") {
                firstNumber = currentNumber;
                displayedText.textContent = "+";
                console.log(currentNumber + " is the current number")
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
                    console.log("A + 1T");
                } else if (firstNumber !== 0 && secondNumber == 0) {
                    (secondNumber = Number(secondNumber) + Number(firstNumber));
                    (firstNumber = currentNumber);
                    displayedText.textContent = (Number(firstNumber) + Number(secondNumber));
                    console.log("A + 2T");
                } else {
                    (secondNumber = Number(secondNumber) + Number(firstNumber));
                    (firstNumber = currentNumber);
                    displayedText.textContent = (Number(firstNumber) + Number(secondNumber));
                    console.log("A + 3T");
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
            console.log(currentNumber + " is the current number| " + firstNumber + " is the first number| " + secondNumber + " is the second number| " + isOperator + " is the state of the operator| " + holdingNumber + " is the holding number");
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
            console.log(currentNumber + " is the current number")
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
                        console.log("PATH A"); 
                    } else if (secondNumber !== 0) {
                        firstNumber = currentNumber;
                        holdingNumber -= Number(currentNumber);
                        displayedText.textContent = holdingNumber;
                        console.log("PATH B"); 
                    }
                } else if (firstNumber !== 0 && secondNumber == 0) {
                    secondNumber = Number(firstNumber);
                    firstNumber = currentNumber;
                    holdingNumber -= Number(currentNumber);
                    secondNumber = (Number(secondNumber) - Number(firstNumber));
                    displayedText.textContent = (secondNumber);
                    // console.log("second (EXPECTED RESULT) = " + secondNumber)
                    // console.log("first = " + firstNumber)
                    // console.log("currentNumber = " + currentNumber)
                    // console.log("PATH C");
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

                    console.log("second (EXPECTED RESULT) = " + secondNumber)
                    console.log("first = " + firstNumber)
                    console.log("currentNumber = " + currentNumber)
                    displayedText.textContent = Number(secondNumber);
                    console.log("PATH D");
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
            displayedText.textContent = "x"
            console.log(currentNumber + " is the current number")
            console.log("Nothing now subtraction")
        }
        operator = "*";
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
            displayedText.textContent = firstNumber + " /";
            console.log("multiplication now division")
        } else if (operator == "") {
            firstNumber = currentNumber;
            displayedText.textContent = "/"
            console.log("Nothing now division")
        }
        operator = "/";
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
                console.log("Try to activate a1")
            } else  {
                displayedText.textContent = (Number.parseFloat(operate(firstNumber, operator, secondNumber).toPrecision(8)));
                console.log("Try to activate a2")
            }
        
        console.log("The result should be " + calculatedResult)
        // displayedText.textContent = (Number.parseFloat(operate(firstNumber, operator, secondNumber).toPrecision(8)));
    } else if (firstNumber !== 0 && secondNumber == 0) {
        (secondNumber += firstNumber);
        (firstNumber = currentNumber);
        let calculatedResult = operate(firstNumber, operator, secondNumber)
            if (calculatedResult % 1 == 0) {
                console.log("no decimals" + " | length of displayed text = " + (String(Number(calculatedResult)).length) )
                displayedText.textContent = (operate(firstNumber, operator, secondNumber));
            } else  {
                console.log("decimals")
                displayedText.textContent = (Number.parseFloat(operate(firstNumber, operator, secondNumber).toPrecision(8)));
            }
        
        console.log("The result should be " + calculatedResult)

    } else {
        (secondNumber += Number(firstNumber));
        (firstNumber = currentNumber);
        console.log("current number length is = " + String(Number(currentNumber)).length)
        displayedText.textContent = (Number.parseFloat(operate(firstNumber, operator, secondNumber).toPrecision(8)));
    }
    currentNumber = 0;
    firstNumber = 0;
    secondNumber = 0;
    holdingNumber = 0;
    operator = "";
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