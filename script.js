function add(a, b) {return a + b}
function subtract(a, b) {return a - b}
function multiply(a, b) {return a * b}
function divide(a, b) {return a / b}

let num1 = 4;
let operator = '-';
let num2 = 2;

//Create a new function operate
function operate(n1, n2, op) {
    switch (op) {
        case '+':
            return add(n1, n2)
        case '-':
            return subtract(n1, n2)
        case '*':
            return multiply(n1, n2)
        case '/':
            return divide(n1, n2)
    }
}

console.log(operate(num1, num2, operator))