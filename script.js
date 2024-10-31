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
let num1 = 0;
let num2;
let operator = '';

apdChild(num1, 0)

function apdChild(ele, val) {
    ele += val;
    bar.textContent = ele;
}
function deleteValues(...ele) {ele.map(e => e = 0)}

function callFunctions() {
    let n = operate(+num1, +num2 == '' ? +num1 : +num2, operator);
    while (bar.firstChild) {
        bar.removeChild(bar.firstChild);
    }
    deleteValues(num1, num2);
    operator = '';
    bar.textContent = n;
}
for (let num of numbers) {
    num.addEventListener('click', (e) => {
        if (bar.textContent.length < 10) {
            num1 += e.target.textContent;
            bar.textContent = num1;
            callFunctions();
        }
    })
}

for (let op of operators) {
    op.addEventListener('click', (e) => {
        if (operator.length > 0 || e.target.textContent === '=') { 
            callFunctions();
        }
        if (e.target.textContent !== '=') operator = e.target.textContent;
        console.log(operator)
    })
}

const calculator = document.querySelector('.calculator')
calculator.insertBefore(bar, calculator.firstChild).classList.add('bar')