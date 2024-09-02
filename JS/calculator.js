function add(a,b) {
    return a+b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if(b==0){
        alert("you naughty little shit");
        return 0;
    }
    return a / b;
}

function operate(a,op,b) {
    a=parseFloat(a);
    b=parseFloat(b);
    if (op == '+') {
        return add(a,b);
    }
    else if (op == "-") {
        return subtract(a, b);
    }
    else if (op== 'x') {
        return multiply(a, b);
    }
    else if (op == '/') {
        return divide(a, b);
    }
}

// variables to store operand and operators
let operator="";
let firstNum="";
let secondNum="";

console.log(add(4, 1));
console.log(subtract(4, 1));
console.log(multiply(4, 2));
console.log(divide(4, 2));


const resultDisplay = document.querySelector('.result');
const input = document.querySelector('.input');
const clear = document.querySelector('#clear');
const numbers = document.querySelectorAll(".button");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const point=document.querySelector("#point");
let operatorPressed = false;
let result;


function calculation(){
    result=operate(firstNum, operator, secondNum);
    result=result.toFixed(2);
    firstNum=result.toString();
    secondNum='';
    resultDisplay.textContent =result;
}

equalsButton.addEventListener("click", calculation);

numbers.forEach(btn => {
    btn.addEventListener('click', () => {
        try{
        input.textContent += btn.textContent;
        if (operatorPressed == true ) {
            if(btn.textContent=="."){
                point.disabled=true;
            }
            secondNum+=btn.textContent;
        }
        else{
            if(btn.textContent=="."){
                point.disabled=true;
            }
            firstNum+=btn.textContent;
        }
    }catch(error){
        input.textContent="Error";
    }
}

)
})


operatorButtons.forEach(Operator => {
    Operator.addEventListener("click", () => {
        if(operatorPressed==true && firstNum!=null && secondNum!=null && operator!=null){
                calculation();
                operator="";
                operator=Operator.textContent;
                input.textContent=result+Operator.textContent;
        }
        if (operatorPressed == false && firstNum) {
            point.disabled=false;
            operator = Operator.textContent;
            input.textContent += Operator.textContent;
            operatorPressed = true;
        }
    }
)
})


//clear functionality
clear.addEventListener("click", () => {
    input.textContent = "";
    resultDisplay.textContent = "";
    operator = "";
    firstNum = "";
    secondNum = "";
    operatorPressed = false;
    point.disabled=false;
});

