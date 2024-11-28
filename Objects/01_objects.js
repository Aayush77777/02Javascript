// singleton

// Object.create

// object literals
const mySym = Symbol("key1");
const JsUser = {
  name: "aayush",
  [mySym]: "mykey1",
  "full name": "aayush Neupane",
  age: 24,
  location: "KTM",
  email: "aayush@google.com",
  isLoggedIn: false,
  lastLogginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser."full name");
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "aayush.@chagpt.com";
// Object.freeze(JsUser);
// JsUser.email = "sajan@chagpt.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("hello js user");
};
JsUser.greetingTwo = function () {
  console.log(`hello js user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

