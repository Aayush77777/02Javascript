//single----ton (objects)
// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "aayush",
      lastname: "neupane",
    },
  },
};

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, )

const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

const users = [
  {
    id: 1,
    email: "rohit@gmail.comkj",
  },
  {
    id: 2,
    email: "a@.comkj",
  },
  {
    id: 3,
    email: "a@gmail.comkj",
  },
  {
    id: 4,
    email: "a@gmail.comkj",
  },
  {
    id: 5,
    email: "a@gmail.comkj",
  },
];

console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.values(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
  coursename: "science",
  price: "999",
  courseInstructor: "aayush",
};

// course.courseInstructor

const { courseInstructor: instructors } = course;

console.log(instructors);

// {
//     "name": "aayush",
//     "courseName": "Science",
//     "price" : "free"
// }
