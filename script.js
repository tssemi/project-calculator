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
bar.style.backgroundColor ='rgb(200, 200, 200)';

for (let num of number) {
    num.addEventListener('click', function display(e) {
        bar.textContent = e.target.textContent;
        document.body.appendChild(bar)
    })
}

let num1 = 0;
let operator = '-';
let num2 = 2;


