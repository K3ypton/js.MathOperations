
var number1 = 4;
var number2 = 2;

function myFunction(number1, number2){
    
    
    if(number1 == undefined){
        number1 = 4; 
    }
 
    if(number2 == undefined) {
        number2 = 2;
    }
    
    console.log("Prve cislo " + number1 + ", druhe cislo " + number2);
    console.log("Vykonávam matematické operácie")
    console.log(number1 + " + " + number2 + " =", number1+number2);
    console.log(number1 + " - " + number2 + " =",number1-number2);
    console.log(number1 + " * " + number2 + " =",number1*number2);
    console.log(number1 + " / " + number2 + " =",number1/number2);
    console.log("");
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

var num1 = getRandomInt(100);
var num2 = getRandomInt(100)+1;

myFunction(number1,number2);
myFunction(num1, num2);
myFunction();
  