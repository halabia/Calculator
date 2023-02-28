let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let multiply = (a,b) => a*b;
let divide = (a,b) => a/b;

let operate = (a,b,sign) => {
    if (sign === "+") {
        console.log(add(a,b))
    }
    if (sign === "-") {
        console.log(subtract(a,b))
    }    
    if (sign === "x") {
        console.log(multiply(a,b))
    }    
    if (sign === "/") {
        console.log(divide(a,b))
    }
}

const addButton = document.querySelector('#plus');
addButton.addEventListener('click', () => {
    operate(3,5,"+")
  });
const subtractButton = document.querySelector('#minus');
subtractButton.addEventListener('click', () => {
    operate(3,5,"-")
});
const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => {
    operate(3,5,"x")
});

const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', function (e) {
    operate(3,5,"/")
});


const display = document.getElementsByClassName("display");
display[0].addEventListener('click', () => {
    display[0].textContent = 1;
    display[0].setAttribute('style', 'color: red;');
    operate(3,5,"x")
});

let calculatorDisplay = (picker) => {
        display[0].textContent = picker;
        display[0].setAttribute('style', 'color: black;');
}

const oneButton = document.querySelector('#one');
oneButton.addEventListener('click', function (e) {
    calculatorDisplay(1)
});
const twoButton = document.querySelector('#two');
twoButton.addEventListener('click', function (e) {
    calculatorDisplay(2)
});
const threeButton = document.querySelector('#three');
threeButton.addEventListener('click', function (e) {
    calculatorDisplay(3)
});
const fourButton = document.querySelector('#four');
fourButton.addEventListener('click', function (e) {
    calculatorDisplay(4)
});
const fiveButton = document.querySelector('#five');
fiveButton.addEventListener('click', function (e) {
    calculatorDisplay(5)
});
const sixButton = document.querySelector('#six');
sixButton.addEventListener('click', function (e) {
    calculatorDisplay(6)
});
const sevenButton = document.querySelector('#seven');
sevenButton.addEventListener('click', function (e) {
    calculatorDisplay(7)
});
const eightButton = document.querySelector('#eight');
eightButton.addEventListener('click', function (e) {
    calculatorDisplay(8)
});
const nineButton = document.querySelector('#nine');
nineButton.addEventListener('click', function (e) {
    calculatorDisplay(9)
});
const zeroButton = document.querySelector('#zero');
zeroButton.addEventListener('click', function (e) {
    calculatorDisplay(0)
});