function add(a, b) {return a + b}
function subtract(a, b) {return a - b}
function multiply(a, b) {return a * b}
function divide(a, b) {return a / b}

function operate(n1, n2 = 0, op = '') {
    switch (op) {
        case '+': return add(n1, n2)
        case '-': return subtract(n1, n2)
        case '*': return multiply(n1, n2)
        case '/': return divide(n1, n2)
        default : return n1.toString().split('').includes('.') ? n1 : +n1
    }
}

const calculator = document.querySelectorAll('.calculator')
let bar = document.createElement('div');
bar.classList.add('bar');

let num1;
let num2;
let operator;
let operation;

function startValues(n1) {
    num1 = n1;
    num2 = '';
    operator = '';
    bar.textContent = num1;
}
startValues(0);

function roundNumber(num) {
    if (num % 1 != 0) {
        return num.toFixed(3)
    } else return num
}

function deleteLastInput(n) {
    return n.split('').slice(0, -1).join('')
}

function displayValues(val) {
    if (Number.isInteger(val) || val == '.' || !(isNaN(val % 1))) {
        operation = roundNumber(operate(+num1, +num2, operator));
        bar.textContent = val;
    } else if (val === '=') {
        num1 = roundNumber(operate(+num1, +num2, operator));
        bar.textContent = num1;
        num2, operator = '';
    } else if (num2 !== '' && operator !== '') {
        num1 = operation;
        bar.textContent = num1;
        num2 = '';
    }
}

function storeValues(val) {
    if (Number.isInteger(+val) || val == '.') {
        if (operator === '') {
            if (num1.toString().split('').filter(e => e == '.').length > 1) {
                num1 = deleteLastInput(num1)
            }
            if (bar.textContent.length < 10 ) {
                num1 += val
                num1 = operate(num1)
            }
            displayValues(operate(num1, num2, operator));
        } else {
            if (+num2.split('').filter(e => e == '.').length > 1) {
                num2 = deleteLastInput(num2)
            }
            if (bar.textContent.length < 10 ) num2 += val;
            displayValues(num2);
        }
    } else {
        if (val !== 'CL' && val !== 'DEL' && val !== '.') {
            if (val !== '=') operator = val;
            displayValues(val);
        }
    }
    switch (val) {
        case 'CL': startValues(0);
            break;
        case 'DEL': if (num2 === '') {
            num1 = deleteLastInput(num1);
            if (num1 == '') num1 = 0;
            displayValues(num1);
        } else {
            num2 = deleteLastInput(num2);
            displayValues(num2);
        }
            break;
    }
    console.log('num1 ' + num1)
    console.log('num2 ' + num2)
    console.log('op ' + operator)
}

for (let ele of calculator) {
    ele.addEventListener('click', e => {
        if (e.target.nodeName === 'BUTTON') {
            storeValues(e.target.textContent)    
        }
    })
}

const container = document.querySelector('.calculator')
container.prepend(bar);