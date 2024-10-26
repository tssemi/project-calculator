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
let operators = document.querySelectorAll('.operators');

let bar = document.createElement('div');
let num1 = document.createElement('div');
let operator = document.createElement('div');
let num2 = document.createElement('div');

for (let num of numbers) {
    num.addEventListener('click', (e) => {
        num1.textContent += e.target.textContent;
        bar.appendChild(num1).classList.add('first-bar-child')
        document.body.appendChild(bar).classList.add('bar')
    })
}

for (let op of operators) {
    op.addEventListener('click', (e) => {
        
    })
}