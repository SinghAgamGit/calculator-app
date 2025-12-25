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

function equals(operator, block1, block2){
    if(operator == "+"){
        return (Number(block1) + Number(block2))
    }
    else if(operator == "-"){
        return (Number(block1) - Number(block2))
    }
    else if(operator == "/"){
       return (Number(block1) / Number(block2))
    }
     else if(operator == "x"){
        return (Number(block1) * Number(block2))
    }
}

function DisplayType(number, display){
      if(display == 0){
        return(number);
  }
  else{
    return(display + number);
  }
};

one.addEventListener("click", function () {
    display.innerText = DisplayType("1", display.innerText);
});

two.addEventListener("click", function () {
  display.innerText = DisplayType("2", display.innerText);
});
three.addEventListener("click", function () {
  display.innerText = DisplayType("3", display.innerText);
});
four.addEventListener("click", function () {
  display.innerText = DisplayType("4", display.innerText);
});
five.addEventListener("click", function () {
  display.innerText = DisplayType("5", display.innerText);
});
six.addEventListener("click", function () {
  display.innerText = DisplayType("6", display.innerText);
});
seven.addEventListener("click", function () {
  display.innerText = DisplayType("7", display.innerText);
});
eight.addEventListener("click", function () {
  display.innerText = DisplayType("8", display.innerText);
});
nine.addEventListener("click", function () {
  display.innerText = DisplayType("9", display.innerText);
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
 else{
  block2 = display.innerText;
    block1 = equals(operator, block1, block2);
    block2 = 0;
    operator = 0;
 operator = "x"
 display.innerText = 0;
 }
});

multiplication.addEventListener("click", function () {
 if(block1 == 0){
    block1 = display.innerText;
    display.innerText = 0;
    operator = "x" ;
 }
 else{
  block2 = display.innerText;
    block1 = equals(operator, block1, block2);
    block2 = 0;
    operator = 0;
    operator = "x"
 display.innerText = 0;
 }
});

addition.addEventListener("click", function () {
 if(block1 == 0){
    block1 = display.innerText;
    display.innerText = 0;
    operator = "+" ;
 }
 else{
  block2 = display.innerText;
    block1 = equals(operator, block1, block2);
    block2 = 0;
    operator = 0;
 operator = "+";
 display.innerText = 0;
 }
});

subtraction.addEventListener("click", function () {
 if(block1 == 0){
    block1 = display.innerText;
    display.innerText = 0;
    operator = "-" ;
 }
 else{
    block2 = display.innerText;
    block1 = equals(operator, block1, block2);
    block2 = 0;
    operator = "-";
    display.innerText = 0;
 }
});

//////////////////// Equals method
equal.addEventListener("click", function () {
    block2 = display.innerText;
    display.innerText = equals(operator, block1, block2);
    block1 = 0;
});

// now this my dog api part
const Api_url = "https://dog.ceo/api/breeds/image/random";
const doggos = document.getElementById("picture_of_cute_dog");

function addNewDoggo() {
  const promise = fetch(Api_url);
  promise
    .then(function (response) {
    const processingPromise = response.text();
    return processingPromise;
  })
    .then(function (processedResponse) {
    const dogObject = JSON.parse(processedResponse);
    const img = document.createElement("img");
    img.src = dogObject.message;
    img.alt = "Cute doggo";
    doggos.appendChild(img);
  });
}
addNewDoggo();
