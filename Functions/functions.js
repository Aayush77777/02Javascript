function sayMyName() {
  console.log("A");
  console.log("a");
  console.log("y");
  console.log("u");
}

// sayMyName()
// console.log(sayMyName);

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  //    let result = number1 + number2
  //  return result
  return number1 + number2;
}
const result = addTwoNumbers(3, 5);
// console.log( "Result" ,result);

// function loginUserMessage (username) {
//      return `${username} just logged in`
// }

// console.log(loginUserMessage("aayush"))
// console.log(loginUserMessage()) // ans: undefined

// function loginUserMessage (username) {
//     if(username === undefined) {
//         console.log("please enter a proper name");
//         return
//     }
//      return `${username} just logged in`
// }

// console.log(loginUserMessage("aayush"))
console.log(loginUserMessage()); // ans: undefined

function loginUserMessage(username) {
  if (!username) {
    // console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("aayush"))
// console.log(loginUserMessage()); // ans: undefined

function calculateCartPrice(val1, val2, ...num1) {
   return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "aayush",
  price: 199,
};

function handleObject(anyobject) {
  console.log( `name is ${anyobject.username} and the price is ${anyobject.price}`);
  
}

// handleObject(user);

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 300, 100, 600]

function retrunSecondValue(getArray) {
   return getArray[1]
}

// console.log(retrunSecondValue(myNewArray));

console.log(retrunSecondValue([200, 400, 500, 600]));



