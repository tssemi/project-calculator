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

function apdChild(element, text) {
    element.textContent += text;
    bar.appendChild(element).classList.add('bar-child');
}
function deleteContent(...ele) {ele.map(e => e.textContent = null)}

for (let num of numbers) {
    num.addEventListener('click', (e) => {
        if (operator.textContent === '') {
            apdChild(num1, e.target.textContent)
        } else {
            apdChild(num2, e.target.textContent)
        }
    })
}

for (let op of operators) {
    op.addEventListener('click', (e) => {
        if (!(num1.textContent === '') && !(e.target.textContent === '=')) {
            apdChild(operator, e.target.textContent)
        }
        if (e.target.textContent === '=') {
            let n = operate(+num1.textContent, +num2.textContent, operator.textContent)
            while (bar.firstChild) {
                bar.removeChild(bar.firstChild);
            }
            deleteContent(num1, num2, operator)
            apdChild(num1, n)
        }
    })
}
document.body.appendChild(bar).classList.add('bar')