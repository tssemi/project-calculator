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
let bar = document.createElement('div');
bar.classList.add('bar');

function startValues(n1, op = '') {
    num1 = n1;
    num2 = '';
    operator = op;
    bar.textContent = num1;
}
startValues(0);
function displayValues(val) {
    if (Number.isInteger(val)) {
        bar.textContent = val;    
    } else {
        if (val === '=' || (operator !== '' && num2 !== '')) {
            let n = operate(num1, num2, operator);
            bar.textContent = n;
            if (operator !== '' && num2 !== '') {
                startValues(n, operator)
            } else startValues(n);
        }
    }
}

function storeValues(val) {
    if (Number.isInteger(+val)) {
        if (operator === '') {
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
    console.log('num1 ' + num1)
    console.log('num2 ' + num2)
    console.log('op ' + operator)
}

for (let ele of calculator) {
    ele.addEventListener('click', e => storeValues(e.target.textContent))
}

const container = document.querySelector('.calculator')
container.prepend(bar);