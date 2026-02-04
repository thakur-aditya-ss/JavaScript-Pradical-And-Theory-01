//! TYPES OF PRINTING STATEMENTS

// console.log("External JS")

// document.writeln("<i>Hello</i>")
// document.writeln("<b>Hello</b>")
// document.writeln("Hello")
// document.writeln("Hello")
// document.writeln("Hello")

// document.write("World")
// document.write("World")
// document.write("World")
// document.write("World")
// document.write("World")

//! TOKENS : smallest unit of any programming lang
/*
THERE ARE 4 TYPES OF TOKENS

1) Keywords: reserved words which has specific meaning 
 - Example :- var, let, const, for, if ,etc...

2) Identifiers : name given to a class, methods, variables are known as identifier

3) Literals / Values : a value stored in a variable is known as literals

4) Operators : to perform operation between two or more operands

EXAMPLE :  var name = "John Doe"
*/

/*
! WE HAVE 2 TYPES OF DATATYPES
1) PRIMITIVE  -> IMMUTABLE

- In primitive there are 7 types:

1) number
2) string
3) boolean
4) undefined
5) null
6) bigInt
7) symbol


2) NON-PRIMITIVE -> MUTABLE

- There are 3 types

1) array
2) object
3) function
*/

//! MUTABLE AND IMMUTABLE EXAMPLE

// var str = "HELLO";
// str[0] = "X";
// console.log(str); // immutable, cannot change

// var arr = [10, 20, 30, 40, 50];
// arr[0] = 100;
// console.log(arr); // mutable, can change

//! PRIMITIVE DATA TYPES EXAMPLES

// var n1 = 10.987;
// console.log(n1); // 10.987
// console.log(typeof n1); // number

// var n2 = "Hello";
// var n3 = "World";
// console.log(n2, n3); // Hello World
// console.log(typeof n3); // string

// // `` using backticks we can write multi-line strings and we can use string interpolation using ${}
// var n4 = `Hey There !!!
// Lets go to javascript ${n3} `;
// console.log(n4);
// console.log(typeof n4);

// var n5 = true;
// console.log(n5); // true
// console.log(typeof n5); // boolean

// console.log(typeof typeof n5); // string

// var n6 = undefined;
// console.log(n6); // undefined
// console.log(typeof n6); // undefined

// var n7 = null;
// console.log(n7); // null
// console.log(typeof n7); // object

// var n8 = 9n;
// console.log(n8); // 9n
// console.log(typeof n8); // bigint

// var n9 = Symbol("hello");
// var n10 = Symbol("hello");

// console.log(n9); // Symbol(hello)
// console.log(n10); // Symbol(hello)

// console.log(n9 == n10); // false
// console.log(n9 === n10); // false

// //! STRICTLY AND LOOSLY COMPARISION
// var n11 = 10;
// var n12 = "10";
// console.log(n11 == n12); // true
// console.log(n11 === n12); // false

// //! VAR , LET AND CONST DIFFERENCE

// var a;
// console.log(a); // ud
// a = 10;
// console.log(a); // 10
// var b = 20
// console.log(b); // 20
// var b;
// console.log(b); // 20
// b = 30
// console.log(b); // 30
// var a = 40
// console.log(a); // 40

// let c;
// console.log(c); // ud
// c = 100
// console.log(c); // 100
// let d = 200
// console.log(d); // 200
// // let c ;//! Cannot redeclare
// d = 300
// console.log(d); // 300
// // let d = 400 //! Cannot redeclare and reinitialize

// //! declare and initialize at same time
// const e = 1000
// console.log(e); // 1000

//! HOISTING : moving declaration part at the top of the original code internally

// var a = undefined <--- hoisting happens internally
// console.log(a);
// var a = 10
// console.log(a); // 10

//! TDZ (TEMPORAL DEAD ZONE) : the time period between accessing let and const variable before declaration

// let b
// console.log(b);//! error -> Cannot access 'b' before initialization
// let b = 20
// console.log(b); // 20

// let c  <--- hoisted but value will be unavailable
// console.log(c); //! error -> Cannot access 'c' before initialization
// let c;
// console.log(c);// ud

//! GEC (GLOBAL EXECUTION CONTEXT)
// debugger;
// console.log("Start");
// console.log(a);
// var a = 10
// console.log(a);
// let b;
// console.log(b);
// b = 20;
// const c = 100
// console.log(c);
// console.log("End");

// ! TYPES OF VARIABLES AND ITS SCOPE

// ! 1) GLOBAL VARIABLES : can be accessed anywhere throughout the code
// var a = 10; // GLOBAL SCOPE <- DUE TO HOISTING
// let b = 20;  // SCRIPT SCOPE <- DUE TO TDZ
// const c = 30; // SCRIPT SCOPE <- DUE TO TDZ

// if (100 > 2) {
//   console.log(a, b, c);
// }

// for (let i = 0; i < 5; i++) {
//   console.log(a, b, c );
// }

// function demo1() {
//   console.log(a, b, c);
// }
// demo1();

//! 2) LOCAL VARIABLES : Variables which can be accessced within a block.
// if (100 > 2) {
//   var x = 10; // GLOBAL VARIABLE - GLOBAL SCOPE
//   let y = 20; // LOCAL VARIABLE - BLOCK SCOPE
//   const z = 30; // LOCAL VARIABLE - BLOCK SCOPE
// }
// console.log(x); // 10
// // console.log(y); //! ReferenceError: y is not defined

// for (let i = 0; i < 5; i++) {}

//! NOTE : var variables are also known as function scope variable because it acts like local variable within a function

// function demo2() {
//   var m = 100; // LOCAL VARIABLE - LOCAL SCOPE
//   let n = 200; // LOCAL VARIABLE - LOCAL SCOPE
//   const o = 300; // LOCAL VARIABLE - LOCAL SCOPE
// }
// demo2();
// console.log(m); //!  ReferenceError: m is not defined

//! FUNCTIONS

// ! 1) NAMED FUNCTION : a function which has name
// ! NOTE : only Named Function can be called before declaration due to function hoisting

// debugger
// greet()

// function greet() {
//   console.log("Welcome");
// }

// greet()

// ! GEC
// console.log("Start");
// var a;
// console.log(a);
// fun();
// a = 10;
// console.log(fun);
// function fun() {
//   var str = "Hello";
//   console.log(str);
// }
// console.log(fun);
// fun();
// console.log("End");

// console.log("start");
// console.log(student);
// var s1 = 100;
// function student() {
//   console.log("I am student");
// }
// console.log(trainer);
// let s2 = 200;
// console.log(s2);
// function trainer() {
//   console.log("I am trainer");
// }
// student();
// trainer();
// console.log("End");

//! 2) ANONYMOUS FUNCTION : function without name
// function () {
//   console.log("I am Anonymous function");
// }

//! 3) FUNCTION EXPRESSION : its is used to call/invoke anonymous function

// console.log(f1);// ud
// // f1()

// var f1 = function () {
//   console.log("I am Anonymous function called by using Function expression");
// };
// console.log(f1);// it will print function with body
// f1() // it will call the function

//! 4) PARAMETERIZED FUNCTION
// function sum(n1 = 0, n2 = 0) {
//   console.log(n1 + n2);
// }
// sum(10, 20);
// sum();

// function demo1(n1, n2, n3, n4, n5) {
//   console.log(n1, n2, n3, n4, n5);
//   console.log(arguments);
// }
// // demo1(10, 20, 30, 40, 50);
// // demo1(10, 20);
// demo1(10, 20, 30, 40, 50, 60, 70, 80, 90);

// function printFullName(firstName, lastName , age) {
//   console.log(`My Name is ${firstName} ${lastName} ${age}`);
//   console.log("My age is", age);

// }
// let firstNameInput = prompt("Enter FirstName");
// let lastNameInput = prompt("Enter LastName");
// let ageInput = parseInt(prompt("Enter Age"));

// printFullName(firstNameInput, lastNameInput , ageInput);

//! 5) RETURN TYPE FUNCTION
// function getEmail(fname, lname) {
//   let fullName = `${fname} ${lname}`;
//   let email = `${fname}.${lname}@gmail.com`;

//   return [fullName, email];
// }

// let value = getEmail("john", "doe");
// console.log(value[0]);
// console.log(value[1]);

//! 6) NESTED FUNCTION
// function parent() {
//   console.log("I am Parent");

//   function child() {
//     console.log("I am Child");
//   }

//   child();
// }

// parent();

//! Closure is a temporary memory which is created whenever we try to access paraent function's property inside child function and it contains only those properties that child function required.

// debugger
// function parent() {
//   let a1 = 100;
//   console.log("I am Parent", a1);

//   function child() {
//     let b1 = 200;
//     console.log("I am Child", b1, a1); // we can access a1, due to closure
//   }
//   child();
// }
// parent();

// debugger;
// function parent() {
//   let a1 = 100;
//   console.log("I am Parent", a1);

//   function child() {
//     let b1 = 200;
//     console.log("I am Child", b1, a1);
//   }

//   return child;
// }

// let val = parent();
// console.log(val);
// val();

//! 7) HIGHER ORDER FUNCTION AND CALLBACK FUNCTION
// - A function which passes as an arguement to another function is known as Callback Function

// - A function which passes any of these requirements
// 1) if a function accepts another function as an arguement is known as HOF
// function demo(fn) {
//   fn();
// }
// demo(function () {
//   console.log("Hii");
// });

// // 2) if a function returns another function is known as HOF
// function Parent() {
//   return function Child() {
//     console.log("Hello");
//   };
// }
// let val = Parent();
// val();

// function Demo1() {
//   console.log("Demo 1");
//   return function Demo2() {
//     console.log("Demo 2");
//     return function Demo3() {
//       console.log("Demo 3");
//     };
//   };
// }
// Demo1()()(); // <--- JS CURRYING

//! 8) ARROW FUNCTION
// let a1 = () => {
//   console.log("I am Arrow function 1");
// };
// a1();

// // if no parameter, we can replace () with _
// let a2 = (_) => {
//   console.log("I am Arrow function 2");
// };
// a2();

// // if having only one parameter, () is not mandatory
// let a3 = (n1) => {
//   console.log("I am Arrow function 3", n1);
// };
// a3(100);

// // if having only one line of code {} is not mandatory
// let a4 = () => console.log("I am Arrow function 4");
// a4();

// // explicit return, {} and "return" keyword is mandatory
// let a5 = (n1, n2) => {
//   return n1 + n2;
// };
// console.log(a5(10, 20));

// // implicit return , {} and "return" keyword is not required
// let a6 = (n1, n2) => n1 + n2;
// console.log(a6(5, 10));

//! 9) IMMEDIATLY INVOCKED FUNCTION EXPRESSION ( IIFE )
// let x = (function () {
//   console.log("I am IIFE");
//   return "Hii";
// })();
// console.log(x); // Hii

// function demo() {
//   return "Hi";
// }
// let val = demo();

//! 10) CONSTRUCTOR FUNCTION : used to create objects

//! OBJECTS : it is used to store multiple data in the form of key and value pairs
// There are 3 ways to create object:-
// //! 1) Object literals
// const obj1 = { id: 1, fname: "John" };
// console.log(obj1);

// //! 2) Object Constructor
// const obj2 = new Object({ id: 2, fname: "Jane" });
// console.log(obj2);

// //! 3) Constructor Function
// function Student(id, firstName) {
//   this.id = id;
//   this.firstName = firstName;
// }
// let s1 = new Student(1, "James");
// console.log(s1);
// let s2 = new Student(2, "Clark");
// console.log(s2);

//! CRUD WITH OBJECTS

// //! 1) CREATE
// const obj = {
//   id: 1,
//   fname: "John",
//   lname: "Doe",
//   age: 25,
//   company: "NA",
// };
// console.log(obj);

// //! 2) READ
// // there are 2 ways to read
// // 1) using dot operator

// console.log(obj.fname); // John
// console.log(obj.degree); // ud

// // 2) using square brackets

// let x = "lname";
// console.log(obj["age"]); // 25
// console.log(obj[x]); // Doe

// // for in loop
// for (let i in obj) {
//   console.log(i, obj[i]);
// }

// //! UPDATE
// obj.company = "TCS"
// console.log(obj);

// //! ADD NEW KEY
// obj.salary = 60000
// console.log(obj);

// //! DELETE
// delete obj.salary
// console.log(obj);

//! OBJECT METHODS
// let obj = {
//   id: 1,
//   ename: "John Doe",
// };

// //! 1) Object.keys()
// let keys = Object.keys(obj);
// console.log(keys); // ["id" , "ename"]

// //! 2) Object.values()
// let values = Object.values(obj);
// console.log(values); // [1 , "John Doe"]

// //! 3) Object.entries()
// let keyAndValue = Object.entries(obj);
// console.log(keyAndValue); // [ ["id" , 1]  , ["ename" , "John Doe"]]

// //! 4) Object.fromEntries()
// let newObj = Object.fromEntries(keyAndValue);
// console.log(newObj); // {id: 1, ename: 'John Doe'}

// let obj2 = {
//   id: 2,
//   name: {
//     firstName: "Jane",
//     lastName: "Doe",
//   },
//   hobbies: ["coding", "singing", "dancing"],
//   address: {
//     city: "Noida",
//     state: "UP",
//     pin: 876541,
//   },
// };

// console.log(obj2.name.firstName); //  Jane
// console.log(obj2.hobbies[0]); // coding
// console.log(obj2.address.state); // UP

//! ------------------------------------------------------------ //
//                   Date - 21 Jan 2026
//! ------------------------------------------------------------//

///! Object Destructuring

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
// let {fname,lname,salary=0} = obj1
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

//! name,username,street,zipcode,lat,lng,companyName,

// let {name,username,address:{street,zipcode,geo:{lat,lng}}, company:{name:companyName}} = user

// console.log(name);
// console.log(username);
// console.log(street);
// console.log(zipcode);
// console.log(lat);
// console.log(lng);
// console.log(companyName);

//! Example 3

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
// //!  name,username,street,zipcode,lat,lng,company Name

// let {name, username, address:{street,zipcode, geo:{lat,lng}}, company:{name:Cname}} = user

// console.log(name);
// console.log(username);
// console.log(street);
// console.log(zipcode);
// console.log(lat);
// console.log(lng);
// console.log(Cname);

//! ------------------------------------------------------------ //
//                   Date - 22 Jan 2026
//! ------------------------------------------------------------//

//! " this "" Keywords :-

//! How to create your own methods
//! NOTE :  Dont use arrow func to create method because "this" keywords refers to Window Object

// console.log(window); //! Global Object
// console.log(this);   //! Points to window object

// window.prompt("Hii");
// window.alert("Hii");  //! It is a Globle decleration

// let student = {
//   id: 1,
//   fname: "john",
//   lname: "doe",
//   getFullName: function(){
//     console.log(`${this.fname} ${this.lname}`);
//   },
//   getEmail() {
//     console.log(`${this.fname}.${this.lname}@gmail.com`);
//   },
// };

// console.log();
// student.getFullName();
// student.getEmail();

//! call(), apply() and bind() :-

//   function getFullName(){
//     // console.log(this);
//      return `${this.firstName} ${this.lastName}`
//   }

//   function getCourseDetails(sub1,sub2){
//     return`${this.course} includes ${sub1} ${sub2}`;
//   }

//   let user1 = {
//     id : 1,
//     firstName : "Jane",
//     lastName : "Doe",
//     course : "Mern Stack",
//   }

//   let user2 = {
//     id : 1,
//     firstName : "James",
//     lastName : "carry",
//     course : "Java Full Stack",
//   }

//   console.log(user1);
//   console.log(user2);

//   //! call() :-

//   //For user 1
//   let fullNameU1 = getFullName.call(user1)
//   console.log(fullNameU1);
//   // for user2

//   let courseDetails1 = getCourseDetails.call(user1, "JS","NodeJS");
//   console.log(courseDetails1);

//   // ! apply() :- immediate calls the function

//   let fullName2 = getFullName.apply(user2)
//   console.log(fullName2);

//   let courseDetails2 = getCourseDetails.apply(user2,[ "Java", "SpringBoot"]); // if we use apply()  then second arguments always be array.
//   console.log(courseDetails2);

// //! bind() :- returns bounded  function which can be called later on

// let boundedGetFullName = getFullName.bind(user1);
// console.log("Function Bounded");
// console.log(boundedGetFullName());

// let boundedCourseDetails = getCourseDetails.bind(user1);
// console.log(boundedCourseDetails("HTML", " NODE JS "));

//! ------------------------------------------------------------ //
//                   Date - 23 Jan 2026
//! ------------------------------------------------------------//

//! SCOPES REVISION

//!  - GLOBAL SCOPE AND SCRIPT SCOPE
//   - WHENEVER WE DECLARE GLOBAL VARIABLES GLOBAL SCOPE AND  SCRIPT SCOPE CREATE
//   - IN GLOBAL SCOBE WE CAN SEE "var" VARIABLES AND FUNCTIONS DECALRATIONS
//   - IN SCRIPT SCOPE WE CAN SEE "let" AND "const" VARIABLES,DUE TO TDZ

//!  - BLOCK SCOPE
//   - WHENEVER WE DECLARE "let" AND "const"  VARIABLES INSIDE CONDITIONAL OR LOOPING STATEMENT THOSE VARIABLES WILL ACT AS LOCAL VARIABLES AND HAVINGH BLOCK SCOPE
//!  - NOTE: "var" VARIABLES WILL ACT AS GLOBAL VARIABLE AND HAVING GLOBAL SCOPE WITHIN CONDITIONAL OR LOOPING STATEMENT

//!  - LOCAL SCOPE
//   - WHENEVER WE DECLARE "var", "let" OR "const" VARIABLES INSIDE A FUNCTION , IT WILL ACT AS LOCAL VARIABLES HAVING LOCAL SCOPE

//!  - FUNCTION SCOPE
//   - "var" VARIABLES ARE KNOWN AS FUNCTION SCOPE VARIABLES BECAUSE IT ACTS LIKE LOCAL VARIABLE INSIDE A FUNCTION.

//! JAVASCRIPT OBJECT NOTATION (JSON) :-
// JSON is Store data in the form of string,

//! DUMMY JSON - FREE API WEBSITES
/**
let user1 = {
  id: 1,
  fname: "john",
  lname: "doe",
};
// use for set data (JS - JSON)
function storeDataInLocalStorage() {
  let jsonData = JSON.stringify(user1) // JS TO JSON
  localStorage.setItem("userData",jsonData)
  // console.log(jsonData);
  
}

// use for get data (JSON - JS)
function getDataFromLocalStorage() {
let data = localStorage.getItem("userData");
let userObject = JSON.parse(data); // JSON TO JS
console.log(userObject);
document.writeln(`<em>${userObject.fname}</em>`); //<em> is use for italic

}
 

//! ------------------------------------------------------------ //
//                   Date - 27 Jan 2026
//! ------------------------------------------------------------//


function removeSingleDataFromLocalStorge(){
  localStorage.removeItem("demo1");
}

function clearDataFromLocalStorage(){
  localStorage.clear();
}
   */

// ! ARRAYS :- HetroGenous in Nature

// // 1) Array Literals []
// let arr1 = [10,true, "Hello World", () => {}, null , 1n , undefined];
// console.log(arr1);

// // 2) Array Constructor ()
// let arr2 = new Array(10, false , "Bye",function () {});
// console.log(arr2);

//! ARRAY METHODS :
/**
let arr1 = [10,20,30,40]
console.log(arr1); // [10,20,30,40]

// array.push() : Appends new elements to the end of an array, and returns the new length of the array.
// it added value from last of the items of array
let newLength1 = arr1.push(50,60,70);
console.log(arr1); // [10,20,30,40,50,60,70]
console.log(newLength1); // <-- new length of arr1

//array.pop() : Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let returnVal1 = arr1.pop()
console.log(arr1); //[10,20,30,40,50,60]
console.log(returnVal1); // 70

// array.unshift() : Inserts new elements at the start of an array, and returns the new length of the array.
// it is same like as push but it added items or valur from front
let newLength2 = arr1.unshift("Hello",100)
console.log(arr1); // ['Hello,100,10,20,30,40,50,60]
console.log(newLength2);


// arr1.shift() : Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

let removeVal2 = arr1.shift()
console.log(arr1); // [100,10,20,30,40,50,60]
console.log(returnVal2);
 */

//! ------------------------------------------------------------ //
//                  Date - 28 Jan 2026
//! ------------------------------------------------------------//

//! splice() :(method) Array<number>.splice(start: number, deleteCount: number, ...items: number[]): number[] (+1 overload)
//! Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
//! It Modify the origina; array.

//! Syntax
/**
 * let arr2=[100,200,300,400]
              0 , 1 , 3 , 4
 * arr2.splice(startIndex,delete,NewElement)
 * arr2.splice(3,0,250) => [100,200,250,300,400]
 */

/**
let arr2 = [100,200,300,400]
console.log(arr2);

// ADD MEW ELEMENT
arr2.splice(3,0,350);
console.log(arr2); // [100,200,300,350,400]

arr2.splice(2,0,250);
console.log(arr2); // [100,200,250,300,350,400]

// DELETE ELEMENT
arr2.splice(2,3)
console.log(arr2);

let arr3 = [1000,2000,3000,4000]
arr3.splice(0,3);
console.log(arr3); //[4000]

//! DELETE AND ADD ELEMENT

let arr4 = [100,200,300,400,500,600]
arr4.splice(2,2,1000,2000);
console.log(arr4); //[100, 200, 1000, 2000, 500, 600]
 */

//! slice() :
//! it returns new array but not change original array.It has 2 arguments
/**
*! syntax
arr2.slice(startIndex , endIndex)
let x = arr2.slice(1,3)
console.log(x);
*/

/**
       //   -6 -5 -4 -3 -2 -1
let arr5 = [10,20,30,40,50,60]
      //    0   1  2  3  4  5

console.log(arr5); //[10, 20, 30, 40, 50, 60]

let newArr1 = arr5.slice(1,4)
console.log(newArr1); //[20, 30, 40]

let newArr2 = arr5.slice(2)
console.log(newArr2); //[30, 40, 50, 60]

let newArr3 = arr5.slice(1,-1)
console.log(newArr3); // [20, 30, 40, 50]

let newArr4 = arr5.slice(-2,5)
console.log(newArr4); // [] alwase it go left to right not right to left
 */

//! sort(): (method) Array<number>.sort(compareFn?: ((a: number, b: number) => number) | undefined): number[]
//! Sorts an array in place. This method mutates the array and returns a reference to the same array.
/**
let arr6 = [9,5,2,1,0,4,7,8];
arr6.sort(); // ASC
console.log(arr6); // [0, 1, 2, 4, 5, 7, 8, 9]

// LEXOGRAPHICAL SORTING
let arr7 = [90,5,67,45,1,78,26];
arr7.sort();
console.log(arr7); //[1, 26, 45, 5, 67, 78, 90]


let arr8 = [80,615,49,31,10,38];
arr8.sort((a,b) => a-b );
console.log(arr8); // [10, 31, 38, 49, 80, 615] Ascending Order

arr8.sort((a,b) => b - a );
console.log(arr8); // [615, 80, 49, 38, 31, 10] Descending Order
 */

//! concat() : (method) Array<number>.concat(...items: ConcatArray<number>[]): number[] (+1 overload)
//! Combines two or more arrays. This method returns a new array without modifying any existing arrays.
/**
let arr9 = [10,20,30];
let arr10 = [40,50,60];

let concatinatedArr = arr9.concat(arr10);
console.log(concatinatedArr);

 */

//! ------------------------------------------------------------ //
//                  Date - 29 Jan 2026
//! ------------------------------------------------------------//

//! ADVANCE ARRAY METHODS

//! foreach(callbackfunc)
/**
 * let arr1 = [10,20,30,40,50];

// for(let i = 0; i <arr1.length ; i++){
// console.log(i , arr1[i]);
// }

    
    let returnVal1 = arr1.forEach((element, index, array) => {    //  arr1.forEach((_, index) => { 
      console.log(element, index, array);       //   console.log(_,index);
    return element + 5
    });
    console.log(returnVal1);  // undefined

    console.log("------------------------------------------------");
    
                                     

//! map(callbackfunc) : used to iterate

let returnVal2 = arr1.map((element, index, array) => {    
      console.log(element, index, array); 
      return element + 5     
    });
    console.log(returnVal2);  // [15, 25, 35, 45, 55]
    

//! filter(callbackfunc): Returns the elements of an array that meet the condition specified in a callback function.

let arr2  = [100,200,300,400,500];
// let returnVal3 = arr2.filter((ele,idx, array) => {
//   return ele > 200;});
let returnVal3 = arr2.filter((ele,idx, array) => ele > 200);
console.log(returnVal3);  //[300, 400, 500]

  


//! find(callbackfunc) : Returns the value of the first element in the array where predicate is true, and undefined otherwise

// let returnVal4 = arr2.find((ele,idx,array) => ele > 200);
let returnVal4 = arr2.find((ele,idx,array) => {
  console.log(ele);
  
  return ele > 200;
});
console.log(returnVal4);


//! findIndex(callbackfunc) : Returns the index of the first element in the array where predicate is true, and -1 otherwise
let returnVal5 = arr2.findIndex((ele,idx,array) => {
  console.log(ele);
  
  return ele > 200;
});
console.log(returnVal5);  // 2

//! reduce(callbackfunc , accumulatorValue) :

let arr3 = [10,20,30,40,50];

// using for loop
// let sum = 0
// for (let i = 0; i < arr3.length ; i++){
//   sum = sum + arr3[i]
// } 
// console.log(sum); // 150

let sum = arr3.reduce((acc,ele) =>{
  console.log(acc , ele);
  return acc + ele ;
},0);
console.log(sum);

let sum1 = arr3.reduce((acc,ele) => acc + ele, 0);
console.log(sum1);

//!---------------------------------------------------!//

let arr4 = [1,2,3,4,5]; 

//! toString() : Returns a string representation of an array.
let str1 = arr4.toString("");
console.log(str1);

//! join()

let str2 = arr4.join(" ");
console.log(str2);

//! split:

let str3 = "HELLO";
console.log(str3.split(""));


function pallidrome(word){
  let output = word.split("").reverse().join("")
  return output === word ? true : false
}

console.log(pallidrome("abc"));
console.log(pallidrome("racecar"));

 */

//! ------------------------------------------------------------ //
//                  Date - 30 Jan 2026
//! ------------------------------------------------------------//

//! ARRAY DESTRUCTURING
/**
let arr1 =[10,20,30,40,50];
let [n1,n2,n3,n4,n5] = arr1;
console.log(n2,n5);

// skip element while destructuring
let arr2 = [100,200,300,400,500];
let [ , a1 , , a2] = arr2;
console.log(a1,a2);

// Example Used In REACT

function useState(state) {
  return [state, () =>{}];
}
let [state, setState] = useState();

function useRef(ref){
  return { current:ref};
}a
let {current} = useRef();

//! nested array

let arr3 = [1000,2000,[3000,4000], 5000];
let [b1, , [ , b2],b3] = arr3;
console.log(b1,b2,b3);

let arr4 = ["HELLO",{id:1,fname: "John", lname : "Doe"}];
let [str1, { fname}] = arr4;
console.log(str1,fname);
 */

//! REST AND SPREAD OPERATORS : ...variable , rest parameter must be last in the paremeter list:
//! What is diff. b/w rest paremeter and arguments
// we can perform all array featuers in the the rest array but we can't use any feature of array in the arguments .
/**
 * function demo1(p1,p2, ...p3){
  console.log(p1,p2);
  console.log(p3); // rest parameter [30, 40, 50, 60, 70, 80, 90]
  console.log(arguments); // <- array like object, NOT PURE ARRAY
}

demo1(10,20,30,40,50,60,70,80,90);

let arr1 =  [10,20,30,40,];
let [ x1, ...x2] = arr1;
console.log(x1);
console.log(x2); // [20,30,40] <-- rest

let arr2 = [100,200,300,400];
console.log(arr2);
console.log(...arr2);

let arr3 = [ ...arr2] // <--- copy element
console.log(arr3);    // <--- packed
console.log(...arr3); // <--- spread : unpack

 */

//!
/** 
let obj1 = {
  id: 1,
  fname: "Jane",
  sal: 20000,
  address:{city : "Noida"}
};

let obj2 = {
    ...obj1,
  fname: "Doe",
  sal : 70000,
};

console.log(obj1);
console.log(obj2);

*/

//! ------------------------------------------------------------ //
//                  Date - 02 Feb 2026
//! ------------------------------------------------------------//

//! STRINGS: primitive and immutable
/**
let str1 = "Hello";
let str2 = 'World abc';

// using backticks we can write multi-line strings and we can do string interpolation ${}
let str3 = `Hii,
John Doe ${str1} ${str2}`;

console.log(str1);
console.log(str2);
console.log(str3);
 */

//! STRINGS METHODS:
/**
let str1 = "JavaScript";

let description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, odit veritatis beatae asperiores laudantium dignissimos modi quia? Quis accusamus veniam illo cum amet alias expedita! Ea natus id corrupti quisquam, laudantium explicabo voluptate corporis dolorem molestiae, praesentium tenetur distinctio reiciendis, ducimus error. Adipisci, vel nobis quod laborum itaque dolorum ratione voluptas alias magni similique! Sit fugiat rerum reiciendis aspernatur dignissimos illum excepturi iusto nisi quae exercitationem quidem eveniet ad obcaecati tenetur, ducimus sequi consequatur veniam. Voluptates non omnis quam aspernatur similique, molestiae quia sequi earum eligendi sapiente labore modi itaque numquam nostrum adipisci distinctio ab quos blanditiis voluptatem? Consectetur, consequuntur!";
console.log(description.slice(0,50) + "...");


//It is a Property-
console.log(str1.length); //10
console.log(str1[0]);


//! str.slice(startIndex, endIndex)
console.log(str1.slice(0,4));      //Java
console.log(str1.slice(4));        //Script
console.log(str1.slice(-10,-6));   //Java
console.log(str1.slice(-10,4));    //Java


//! str.substring(startIndex, endIndex): similar to slice,but do not accept -ver indexs
console.log(str1.substring(0,4)); // Java
console.log(str1.substring(-10,-6)); // No Output

//! str.substr(startIndex,length): Similar to slice, but its 2nd arguement is length.
console.log(str1.substr(0,4)); //Java
console.log(str1.substr(4,6)); //Script

//! str.replace()
let str2 = " I Love Python, Python has easy learning curve.";
let newStr1 = str2.replace("Python", " JavaScript");
console.log(str2);     // I Love Python, Python has easy learning curve.
console.log(newStr1); //  I Love  JavaScript, Python has easy learning curve.


//! replaceAll()
let newStr2 = str2.replaceAll("Python", " JavaScript");
console.log(newStr2); //I Love  JavaScript,  JavaScript has easy learning curve.

let username = "     John Doe   ";
console.log(username);

//!str.trimStart(): Remove the leanding white Space
console.log(username.trimStart());

//!str.trimEnd() : Removes the trailing white space
console.log(username.trimEnd());

//!str.strtrim() : Removes the leading and trailing white space
console.log(username.trim());

//! 
let phoneno = "9876543210";
console.log(phoneno);


//! str.padEnd(max, fillString)
console.log(phoneno.slice(0,6).padEnd(10,"X"));
//! str.padStart(max, fillString)
console.log(phoneno.slice(5).padStart(10,"X"));

//! str.charAt()
let str4 ="JavaScript";
console.log(str4.charAt()); //J

//! str.charCodeAt(): Returns the Unicode(ASIC) value of the character
console.log(str4.charCodeAt(0)); // 74
console.log(str4.charCodeAt(1)); // 97

//! str.toUpperCase()
console.log(str4.toUpperCase());

//! str.toLowerCase()
console.log(str4.toLowerCase());

//! str.includes()
console.log(str4.includes("JavaScript")); // true

//!str.indexOf():
console.log(str4.indexOf("a"));
console.log(str4.indexOf("b"));
 

//! str.split()
let str5 = 'React is Library of JavaScript'
console.log(str5); // React is Library of JavaScript

console.log(str5.split()); //['React is Library of JavaScript']
console.log(str5.split("")); // split character wise ['R', 'e', 'a', 'c', 't', ' ', 'i', 's', ' ', 'L', 'i', 'b', 'r', 'a', 'r', 'y', ' ', 'o', 'f', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
console.log(str5.split(" ")); // ['React', 'is', 'Library', 'of', 'JavaScript']
console.log(str5.split("Library")); // ['React is ', ' of JavaScript']
*/

// Function , array (Foreach, map)

// //! TIMER FUNCTION

// // setInterval(callBack , intervalTime);
// let intervalId = setInterval(() => {
// console.log("Hii");
// },2000); // 2000 means 2 sec

// console.log("IntervalId is ", intervalId);

// // setTimeout( callback , timeout)
// setTimeout(() => {
// console.log("Byee");
// },12000); // 12000 means 12 sec

// setTimeout (() =>{
//   clearInterval(intervalId);
//   console.log("Interval Stopped");
// },8000); // 8000 means 8 sec

//! ------------------------------------------------------------ //
//                  Date - 03 Feb 2026
//! ------------------------------------------------------------//

//! PROMISE :---->

// const p1 = new Promise((resolve , reject)=> {});
// console.log(p1);
/**
const p1 = new Promise((resolve , reject)=> {
  if (10 > 2){
    resolve("Hello World");
  }else {
    reject(" Bye Bye");
  }
});
console.log(p1);

p1.then((data)=>{
  console.log("Promise Got Fullfilled");
  document.writeln(data);
  document.writeln(`<h3>${data}</h3>`);
});

p1.catch((err)=>{
  console.log("Promise Not Fullfilled");
  console.log(err);
  
  document.writeln(`<h3> ${err}</h3>`)
  
});

p1.finally(()=>{
  console.log(" I am finally block");
});
 */

// const API_URL = "https://dummyjson.com/todos";

// let p1 = fetch(API_URL);
// console.log(p1);

/**
 * Promise
[[Prototype]]: Promise
[[PromiseState]]: "Full"filled
[[PromiseResult]]: 'Reject'

 */
/**
p1.then((response ) => {
  // console.log(response);
  // console.log(response.json());
  let p2 = response.json();
  console.log(p2);

  p2.then((data) => {
    // console.log(data);
    console.log(data.todos);
  });

  p2.catch((err) => {
    console.log(err);
  });
});

p1.catch((err)=> {
  console.log(err);
});
 */

//! PROMISE WITH ASYNC AND AWAIT
// Ceating promise By using API

// const API_URL = "https://dummyjson.com/todos";

// async function getTodos(url) {
//   try {
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data); //{todos: Array(30), total: 254, skip: 0, limit: 30}
//     displayTodos(data.todos); // Array(30)
//     // console.log(data.todos);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getTodos(API_URL);

// function displayTodos(allTodos) {
//   console.log(allTodos);
//   // allTodos.map((ele) => {   // it returns new array but forEach not]
//   allTodos.forEach((ele) => {
//     let { id, userId, todo, completed } = ele;

//     document.writeln(`
//       <div>
//         <h4> ${todo}</h4>
//         <span> ${completed ? "Completed" : "Pending"}</span>
//       </div>
//     `);
//   });
// }

//! ------------------------------------------------------------ //
//                  Date - 04 Feb 2026
//! ------------------------------------------------------------//
