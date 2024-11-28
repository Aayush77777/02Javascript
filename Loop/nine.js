const myNums = [1, 2, 3];
// const initialValue = 0;
// const myTotal = myNums.reduce((acc, currval) => {
//   console.log(`acc: ${acc} and currval: ${currval}`);

//   return acc + currval + initialValue;
// });

// console.log(`Total:${myTotal}`);

// const myTotal = myNums.reduce( (acc, currval) => (acc + currval),0)

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "JavaScript Course",
    price: 2999,
  },
  {
    itemName: "React Masterclass",
    price: 3999,
  },
  {
    itemName: "TypeScript Basics",
    price: 2499,
  },
  {
    itemName: "Node.js Workshop",
    price: 1999,
  },
  {
    itemName: "Frontend Bootcamp",
    price: 4999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
