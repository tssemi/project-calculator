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
        default : return n1
    }
}

let numbers = document.querySelectorAll('.digit');
let operators = document.querySelectorAll('.operator');

let bar = document.createElement('div');
let num1 = document.createElement('div');
let num2 = document.createElement('div');
let operator = '';

apdChild(num1, 0)

function apdChild(element, text) {
    element.textContent += text
    bar.appendChild(element).classList.add('bar-child');
}
function deleteContent(...ele) {ele.map(e => e.textContent = null)}

function callFunctions() {
    let n = operate(+num1.textContent,
        num2.textContent == '' ? +num1.textContent : +num2.textContent, 
        operator);
    while (bar.firstChild) {
        bar.removeChild(bar.firstChild);
    }
    deleteContent(num1, num2);
    operator = '';
    apdChild(num1, n);
}
for (let num of numbers) {
    num.addEventListener('click', (e) => {
        if (bar.textContent.length < 10) {
            if (operator === '') {
                callFunctions();
                apdChild(num1, e.target.textContent);
                callFunctions();
            } else {
                apdChild(num2, e.target.textContent);            
            }
        }
    })
}

for (let op of operators) {
    op.addEventListener('click', (e) => {
        if (num1.textContent) {
            if (operator.length > 0 || e.target.textContent === '=') { 
                callFunctions();
            }
            if (e.target.textContent !== '=') operator = e.target.textContent;
        }
    })
}

const calculator = document.querySelector('.calculator')
calculator.insertBefore(bar, calculator.firstChild).classList.add('bar')