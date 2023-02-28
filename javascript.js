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
// operate(3,5,"-")