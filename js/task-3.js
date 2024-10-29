// const username = "Alice";
// const age = 25;
// const newUser = {
//   username,
//   age: 30,
// };
// console.log(newUser);

// function foo(name, age) {
//   return {
//     name,
//     age,
//   };
// }
// console.log(foo("Kate", "30"));
// const inputName = "color";
// const obj = {
//   [inputName]: "red",
// };
// console.log(obj);
// function createObj(key, value) {
//   const obj = {};
//   obj[key] = value;
//   return obj;
// }
// console.log(createObj("name", "Kate"));

// const feedback = {
//   good: 5,
//   neytral: 10,
//   bad: 3,
// };
// let total = 0;
// // // for (const key in feedback) {
// // //   total += feedback[key];
// // // }
// // console.log(total);
// const keys = Object.keys(feedback);
// for (const key of keys) {
//   total += feedback[key];
//   console.log(total);

// const values = Object.values(feedback);
// for (const item of values) {
//   total += item;
// }

// console.log(total);

// const user = {
//   name: "Alice",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "ske";
// user.premium = false;

// // const keys = Object.keys(user);
// // for (const key of keys) console.log(`$[key]: ${user[key]}`);

// function foo(obj) {
//   obj.mood = "happy",
//   obj.hobby = "skii",
//   obj.premium = false,
// }

// const keys = Object.keys(obj);
// for (const key of keys) {
//   console.log(`$[key]: ${obj[key]}`);
// }
// ----------------------------

const laries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function summa(lalala) {
  let total = 0;
  const values = Object.values(lalala);
  for (const item of values) {
    total += item;
  }
  return total;
}
console.log(summa(laries));
