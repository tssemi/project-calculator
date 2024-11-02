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

let num1 = 0;
let num2 = '';
let operator = '';
let bar = document.createElement('div');
bar.classList.add('bar');
bar.textContent = num1;

function storeValues(val) {
    if (Number.isInteger(+val)) {
        if (operator === '') {
            num1 += val;
            bar.textContent = num1;
        } else {
            num2 += val;
            bar.textContent = num2;
        }
        console.log('num2 ' + num2)
        if (num2 !== '') {
            console.log(operate(num1, num2, operator))  
        }
    } else {
        operator = val;
    }
    console.log('num1 ' + num1)
    console.log('num2 ' + num2)
    console.log('op ' + operator)
}

for (let ele of calculator) {
    ele.addEventListener('click', (e) => {
            storeValues(e.target.textContent)
    })
}

const container = document.querySelector('.calculator')
container.prepend(bar);