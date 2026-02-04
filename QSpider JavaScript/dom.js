//! ------------------------------------------------------------ //
//                  Date - 04 Feb 2026
//! ------------------------------------------------------------//

//! DOM :------> It is a tree like structure of the html.

//! DOM  SELECTORS ARE OF 5 TYPES:---->
 

//! 1. document.getElementById(): Returns the first element within node's descendants whose ID is elementI else return null.

let h2Tag = document.getElementById("head2")
console.log(h2Tag);

console.log(h2Tag.textContent);
console.log(h2Tag.innerHTML);




//! 2. document.getElementsByNamEClassname()
let h3Tags = document.getElementsByClassName("head3");
let h3Tags1 = document.getElementsByClassName("div"); console.log(h3Tags1); // empty

console.log(h3Tags); //HTMLCollection(3) [h3.head3, h3.head3, h3.head3] impure Array. here we can't perform Array methods because it is not pure array , it is a array like object.

console.log(h3Tags[1].textContent);

// if we want to check array isnpure or not --> Array.isArray() return boolean.
console.log(Array.isArray(h3Tags)); //false

// convert  impure array to pure array -> Array.from() returns pure array // here we can perform all array methods because it is a pure Array.
let pureArray = Array.from(h3Tags);
console.log(pureArray);


//! 3. document.getElementsByTagName"id, class, tagname)
let tagsCollection = document.getElementsByTagName("h3");
let tagsCollection1 = document.getElementsByTagName("div"); console.log(tagsCollection1); // Empty array

console.log(tagsCollection);  //HTMLCollection(3) [h3.head3, h3.head3, h3.head3]


// 4. document.querySelector()

let ele1 = document.querySelector("#head2");
console.log(ele1);

let ele2  = document.querySelector(".head3");
console.log(ele2);

let ele3 = document.querySelector("h3")
console.log(ele3);

let ele4 = document.querySelector("id, #head2, .head3");
console.log(ele4);




// 5. document.querySelectorAll()
let ele5 = document.querySelectorAll(".head3");
// let ele5 = document.querySelectorAll("id, #head2, .head3");
console.log(ele5);


/**
 * WHENEVER WE USE getElementByClassName or tagName we get HTMLCollection
 * WHENEVER WE USE querrySelectorAll we get NodeList
 * 
 * ! SIMILARITY
 * BOTH ARE IMPURE ARRAY
 * 
 * 
 * 
 * ! DILLERENCE B\W HTMLCOLLECTION AND NodeList
 * 
 * CANNOT USE ANY OF THE ARRAY METHODS IN HTMLCollection
 * CAN USE forEach() method in NodeList
 * 
 *  HTML COLLECTION IS CALLED LIVE COLLECTION
 *  NODE LIST IS CALLED STATIC COLLECTION
 */