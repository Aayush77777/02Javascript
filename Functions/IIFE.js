// // # goble scope makes pollution sometime to avoid global scope pollution we used (IIFE)

//----Immediately Invoked Functions Expressions-----
// (function chai() {
//   console.log(`DB CONNECTED`);
// })();


(function aurcode() {
    //NAMED IFFE
  console.log(`DB CONNECTED TWO`);
})();

((NAME)=> {
    //Annonymous IFFE
    console.log(`DB CONNECTED ${NAME}`);
    
}) ("AAYUSH")

// aurcode();

// console.log(four(2,3));
// function four(num1, num2) {
// let user = `AAyush`    
// console.log(user);

//   return num1 + num2;
// }

// five = () => console.log(`DB CONNED five`);

// five();

let a = 10
let b = 5

function addCalculation  (num1, num2) {
     let total = num1 + num2
     return total
}

let result1 = addCalculation(2,3);
let result2 = addCalculation(a,b);
console.log(result1);
console.log(result2);


