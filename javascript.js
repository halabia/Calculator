

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