const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");
const division = document.querySelector(".divide");
const multiplication = document.querySelector(".multiply");
const subtraction = document.querySelector(".subtract");
const addition = document.querySelector(".add");
const equal = document.querySelector(".equal");
let block1 = 0;
let block2 = 0;
let operator = 0;

one.addEventListener("click", function () {
  if(display.innerText == 0){
    display.innerText = 1;
  }
  else{
    display.innerText = display.innerText + 1;
  }
});
two.addEventListener("click", function () {
  if(display.innerText == 0){
    display.innerText = 2;
  }
  else{
    display.innerText = display.innerText + 2;
  }
});
three.addEventListener("click", function () {
  if(display.innerText == 0){
    display.innerText = 3;
  }
  else{
    display.innerText = display.innerText + 3;
  }
});
four.addEventListener("click", function () {
  if(display.innerText == 0){
    display.innerText = 4;
  }
  else{
    display.innerText = display.innerText + 4;
  }
});
five.addEventListener("click", function () {
  if(display.innerText == 0){
    display.innerText = 5;
  }
  else{
    display.innerText = display.innerText + 5;
  }
});
six.addEventListener("click", function () {
  if(display.innerText == 0){
    display.innerText = 6;
  }
  else{
    display.innerText = display.innerText + 6;
  }
});
seven.addEventListener("click", function () {
  if(display.innerText == 0){
    display.innerText = 7;
  }
  else{
    display.innerText = display.innerText + 7;
  }
});
eight.addEventListener("click", function () {
  if(display.innerText == 0){
    display.innerText = 8;
  }
  else{
    display.innerText = display.innerText + 8;
  }
});
nine.addEventListener("click", function () {
  if(display.innerText == 0){
    display.innerText = 9;
  }
  else{
    display.innerText = display.innerText + 9;
  }
});
zero.addEventListener("click", function () {
  if(display.innerText != 0){
    display.innerText = display.innerText + 0;
  }

});
clear.addEventListener("click", function () {
  display.innerText = 0;
  block1 = 0;
  block2 = 0;
});

backspace.addEventListener("click", function () {
    if(display.innerText != 0 && display.innerText.length != 1){
    display.innerText = display.innerText.slice(0, -1);
  }
    else if(display.innerText.length == 1){
    display.innerText = 0;
  }
});
/////////////////// operators
division.addEventListener("click", function () {
 if(block1 == 0){
    block1 = display.innerText;
    display.innerText = 0;
    operator = "/" ;
 }
});
multiplication.addEventListener("click", function () {
 if(block1 == 0){
    block1 = display.innerText;
    display.innerText = 0;
    operator = "x" ;
 }
});
addition.addEventListener("click", function () {
 if(block1 == 0){
    block1 = display.innerText;
    display.innerText = 0;
    operator = "+" ;
 }
});
subtraction.addEventListener("click", function () {
 if(block1 == 0){
    block1 = display.innerText;
    display.innerText = 0;
    operator = "-" ;
 }

});
//////////////////// Equals method
equal.addEventListener("click", function () {
    block2 = display.innerText;
    if(operator == "+"){
        display.innerText = Number(block1) + Number(block2)
    }
    else if(operator == "-"){
        display.innerText = Number(block1) - Number(block2)
    }
    else if(operator == "/"){
        display.innerText = Number(block1) / Number(block2)
    }
     else if(operator == "x"){
        display.innerText = Number(block1) * Number(block2)
    }
});
