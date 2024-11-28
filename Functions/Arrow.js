const user = {
  username: "Aayush",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "Sajan";
user.welcomeMessage();

console.log(this);

// function chai() {
//   let username = "aayush";
//   console.log(this.username);
// }

// chai();

const chai = () => {
  let username = "aayush";
  console.log(this.username);
};

chai();

//explicit
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4));

//implicit
// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username:"aayush"})
console.log(addTwo(3, 4));

// const myArray = [2,5,3,7,8]

// myArray.forEach(()=>{

// })