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


let number = document.querySelectorAll('.digit');
let operators = document.querySelector('.operators');
let bar = document.createElement('div');

for (let num of number) {
    num.addEventListener('click', function display(e) {
        let barChild = document.createElement('div');
        barChild.textContent = e.target.textContent;
        bar.appendChild(barChild).classList.add('bar-child')
        document.body.appendChild(bar).classList.add('bar')
    })
}

let num1 = 0;
let operator = '-';
let num2 = 2;


