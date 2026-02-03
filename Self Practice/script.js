// //! Date - 14 Jan 2026

// // Hosting : Moving decleration part the top of the original code internally

// // var a = 10
// // console.log(a); // 10

// // var b = 10
// // console.log(b);

// //! TDZ (Tempo)

// //GEC - Global Execution  Context

// // debugger;

// // console.log("Start");
// // console.log(a);
// // var a = 10;
// // console.log(a);
// // let b ;
// // console.log(b);
// // b = 20;
// // const c = 100;
// // console.log(c);
// // console.log("End");

// //! Types Of variable And Its Scope

// //! Global variable

// var a = 10   // Global scope <- Due to Hoisting
// let b = 20 // Script scope <- Due to TDZ
// const c = 30  // Script scope <- Due to TDZ

// if (100 > 2){
//     console.log(a,b,c);
// }

// for (let i = 0 ; i > 5 ;i++){
// console.log(a,b,c);
// }

// function demo1(){
//     console.log(a,b,c);
// }
// demo1();

// //! 2) Local variable : Variable which can be accessced within a block.
// debugger;
// if(100>2){
//     var x = 10   // Global Variable - Global Scope
//     let y = 20   // Local Variable - Block Scope
//     const z = 30 // Local Variable - Block Scope
// }
// console.log(x); // 10
// console.log(y); //! Referencee Error ; y is not define

// //! Note  : Var variable are also known as function scope variable because it acts like local variable within a function
// debugger;
// function demo2(){
//     var m = 100;
//     let n = 250;
//     const o = 300;
// }
// demo2();
// console.log(m); //! referenceError ; m is not define

//! FUNCTIONS

//! 1) Named Function : a function which has name
//! Note : Only Named Function can be Called before declaration due to function hoisting.

// greet()

// function greet(){
//     console.log("Welcome");
// }
// greet()
//! Example

//! Example HW

// console.log("start");
// console.log(student);
// var s1 = 100;
// function student(){
//     console.log("I Am Student");
// }
// console.log(trainer);
// let s2 = 200;
// console.log(s2);
// function trainer(){
//     console.log("I Am Trainer");
// }
// student();
// trainer();
// console.log("Ends");

//! Date 21 Jan 2026

//! Object Destructuring

// let obj1 = {
//     id: 1,
//     fname:"john",
//     lname: "Doe",
//     salary: 70000,
// };

// let {fname,lname,id} = obj1
// console.log(fname);
// console.log(lname);
// console.log(id);
//!
// let {fname,lname,salary=0}=obj1
// console.log(fname,lname);
// console.log(salary);
//!
// let {fname: firstName = "NA",lname,salary=0}=obj1
// console.log(firstName,lname);
// console.log(salary);

//!


// let obj2 = {
//   id: 2,
//   name: {
//     firstName: "Jane",
//     lastName: "Doe",
//   },
//   hobbies: ["Coding", "Playing"],
//   address: {
//     city: "Noida",
//     state: "UP",
//     pin: 110096,
//   },
//   details: {
//     id: "JaneQSP1",
//     course: "FullStack",
//   },
// };

//! id,firstName,codding,city,id (Details),Course
/**
let {
  id,
  name: { firstName },
  hobbies: [ h1 ],
//   hobbies: { h1,h2,h3 }, print for all value
//   hobbies: { ,h2 }, for second value
//   hobbies: { , , h3 }, for 3rd value
  address: { city },
  details: { id: detailID, course },
} = obj2;

console.log(id);
// console.log(name); we can't use if we destructure the items
console.log(firstName);
console.log(h1);
console.log(city);
console.log(detailID);
console.log(course);
 */

//! Array Destructuring
//20,40,60

// let arr = [10,20,30,40,50,60]
// let [,n1, , n2 , , n3] = arr
// console.log(n1,n2,n3);



// //! 2nd 
// const user = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496"
//     }
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets"
//   }
// }

// // name,username,street,zipcode,lat,lng,companyName,

// let {name,username,address:{street,zipcode,geo:{lat,lng}}, company:{name:companyName}} = user

// console.log(name);
// console.log(username);
// console.log(street);
// console.log(zipcode);
// console.log(lat);
// console.log(lng);
// console.log(companyName);

//! Example 3

const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
}
//!  name,username,street,zipcode,lat,lng,company Name

let {name, username, address:{street,zipcode, geo:{lat,lng}}, company:{name:Cname}} = user

console.log(name);
console.log(username);
console.log(street);
console.log(zipcode);
console.log(lat);
console.log(lng);
console.log(Cname);
