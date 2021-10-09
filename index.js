var readlineSync = require("readline-sync");
var number = readlineSync.question("Enter number:");

console.log(isPrime(number));

function isPrime(number){
  var result = "";
  var num = Number(number);
  if(num>=0){
    if(num ===0 || num===1){
    result = "It's neither prime nor composite";
  }else if(num===2){
    result = "Yes! it is a prime number";
  }
  else {
    for(var i= 2; i <= Math.sqrt(num); i++){  
    if(num % i ==0){
      result = "No! it's not a prime number";  
      break;
    }else{
      result="Yes! it is a prime number";
    }
  }
  }
  }else{
    result="Please enter a valid number"
  }
  
  return result;
}
