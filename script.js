function add(a, b) {return a + b}
function subtract(a, b) {return a - b}
function multiply(a, b) {return a * b}
function divide(a, b) {return a / b}

function operate(n1, n2, op) {
    switch (op) {
        case '+': return add(n1, n2)
        case '-': return subtract(n1, n2)
        case '*': return multiply(n1, n2)
        case '/': return divide(n1, n2)
    }
}


let numbers = document.querySelectorAll('.digit');
let operators = document.querySelectorAll('.operator');

let bar = document.createElement('div');
let num1 = document.createElement('div');
let num2 = document.createElement('div');
let operator = document.createElement('div');

for (let num of numbers) {
    num.addEventListener('click', (e) => {
        if (operator.textContent === '') {
            num1.textContent += e.target.textContent;
            bar.appendChild(num1).classList.add('bar-child');  
        } else {
            num2.textContent += e.target.textContent;
            bar.appendChild(num2).classList.add('bar-child');
        }
    })
}

for (let op of operators) {
    op.addEventListener('click', (e) => {
        if (!(num1.textContent === '') && !(e.target.textContent === '=')) {
            operator.textContent = e.target.textContent;
            bar.appendChild(operator).classList.add('bar-child');
        }
        if (e.target.textContent === '=') {
            console.log(operate(+num1.textContent, +num2.textContent, operator.textContent))
        }
    })
}
document.body.appendChild(bar).classList.add('bar')