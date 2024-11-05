function add(a, b) {return a + b}
function subtract(a, b) {return a - b}
function multiply(a, b) {return a * b}
function divide(a, b) {return a / b}

function operate(n1, n2, op) {
    switch (op) {
        case '+': return add(+n1, +n2)
        case '-': return subtract(+n1, +n2)
        case '*': return multiply(+n1, +n2)
        case '/': return divide(+n1, +n2)
        default : return +n1
    }
}

const calculator = document.querySelectorAll('.calculator')

let num1;
let num2;
let operator;
let operation;
let bar = document.createElement('div');
bar.classList.add('bar');

function startValues(n1) {
    num1 = n1;
    num2 = '';
    operator = '';
    bar.textContent = num1;
}
startValues(0);
function displayValues(val) {
    if (Number.isInteger(val)) {
        operation = operate(num1, num2, operator);
        bar.textContent = val;
    } else if (val === '=') {
        num1 = operate(num1, num2, operator);
        bar.textContent = num1;
        num2 = '';
    } else if (num2 !== '' && operator !== '') {
        num1 = operation;
        bar.textContent = num1;
        num2 = '';
    }
}

function storeValues(val) {
    console.log(val)
    if (Number.isInteger(+val)) {
        if (operator === '') {
            if (num1 === 0) num1 = ''
            num1 += val;
            displayValues(operate(num1, num2, operator));
        } else {
            num2 += val;
            displayValues(+num2);
        }
    } else {
        if (val !== '=' && val !== 'CL') {operator = val}
        displayValues(val);
    }
    if (val === 'CL') startValues(0);
}

for (let ele of calculator) {
    console.log(ele.nodeName)
    ele.addEventListener('click', e => {
        if (e.target.nodeName === 'BUTTON') {
            storeValues(e.target.textContent)    
        }
    })
}

const container = document.querySelector('.calculator')
container.prepend(bar);