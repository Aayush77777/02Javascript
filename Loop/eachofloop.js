// for of

["", "", ""];
[({}, {}, {})];

const arr = [1, 2, 3, 4, 5];
for (const Num of arr) {
  // console.log(Num);
}

const greetings = "HelloWorld!";

for (const greet of greetings) {
  // console.log(`Individual Word ${greet}`);
}

//Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States");
map.set("Np", "Nepal");
// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// }
for (const [key] of map) {
//   console.log(key);
}

// itteration is not done in map 
for (const key in map) {
      console.log(key);
      
}

const myObject = {
    'game1': "NFS",
    'game2': "Spiderman",
     
}

// This is not working
for (const [key, value] of myObject) {
      console.log(key, ":-", value);
      
}

