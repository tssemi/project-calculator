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
        default : return n1 == 0 ? n2 : n1
    }
}

const calculator = document.querySelectorAll('.calculator')

let bar = document.createElement('div');
bar.classList.add('bar');
let num1 = 0;
let num2 = 0;
let operator = '';

for (let ele of calculator) {
    ele.addEventListener('click', (e) => {
        console.log(e.target.textContent)
    })
}

const container = document.querySelector('.calculator')
container.prepend(bar);