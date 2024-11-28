let a = 10;
const b = 20;
var c = 30;

function one() {
  const username = "aayush";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  console.log(website);
  two();
}

// one()

if (true) {
  const username = "aayush ";
  if (username === "aayush ") {
    const website = "youtube ";
    console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// +++++++++++++++++++++++ interesting +++++++++++++++++++++++++++

function addone(num) {
  return num + 1;
}
addone(5);

console.log(addTwo(5)); 
const addTwo = function (num) {
  return num + 2;
};

