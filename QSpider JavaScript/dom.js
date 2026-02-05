//! ------------------------------------------------------------ //
//                  Date - 04 Feb 2026
//! ------------------------------------------------------------//
console.log("-------- DOM-----------");

//! DOM :------> It is a tree like structure of the html.

//! DOM  SELECTORS ARE OF 5 TYPES:---->
 

//! 1. document.getElementById(): Returns the first element within node's descendants whose ID is elementI else return null.

// let h2Tag = document.getElementById("head2")
// console.log(h2Tag);

// console.log(h2Tag.textContent);
// console.log(h2Tag.innerHTML);




// //! 2. document.getElementsByNamEClassname()
// let h3Tags = document.getElementsByClassName("head3");
// let h3Tags1 = document.getElementsByClassName("div"); console.log(h3Tags1); // empty

// console.log(h3Tags); //HTMLCollection(3) [h3.head3, h3.head3, h3.head3] impure Array. here we can't perform Array methods because it is not pure array , it is a array like object.

// console.log(h3Tags[1].textContent);

// // if we want to check array isnpure or not --> Array.isArray() return boolean.
// console.log(Array.isArray(h3Tags)); //false

// // convert  impure array to pure array -> Array.from() returns pure array // here we can perform all array methods because it is a pure Array.
// let pureArray = Array.from(h3Tags);
// console.log(pureArray);


// //! 3. document.getElementsByTagName"id, class, tagname)
// let tagsCollection = document.getElementsByTagName("h3");
// let tagsCollection1 = document.getElementsByTagName("div"); console.log(tagsCollection1); // Empty array

// console.log(tagsCollection);  //HTMLCollection(3) [h3.head3, h3.head3, h3.head3]


// //! 4. document.querySelector()
//! Priority :--> id>

// let ele1 = document.querySelector("#head2");
// console.log(ele1);

// let ele2  = document.querySelector(".head3");
// console.log(ele2);

// let ele3 = document.querySelector("h3")
// console.log(ele3);

// let ele4 = document.querySelector("id, #head2, .head3");
// console.log(ele4);




// //! 5. document.querySelectorAll()
// let ele5 = document.querySelectorAll(".head3");
// // let ele5 = document.querySelectorAll("id, #head2, .head3");
// console.log(ele5);


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

//! ------------------------------------------------------------ //
//                  Date - 05 Feb 2026
//! ------------------------------------------------------------//

//! EXAMPLE OF STATIC AND LIVE COLLECTION:--->
/**
    const collection = document.getElementsByTagName("div");
    const list = document.querySelectorAll("div");

    console.log("HTMLCollection----> ",collection.length); // 3
    console.log("Nodelist ---->",list.length); //3
    
    //! For creating an elemenet new
    //! CREATING HTML Element dynamically:

    for(let i =0;i<5;i++){

    const divTage = document.createElement("div") // <div></div>
    divTage.textContent = "Div 4";
    console.log(divTage); //<div>Div 4</div>
    document.body.appendChild(divTage);  // here we appendChild(adding js div content to html page , ye ek bar me ek hi child ko append krr skata hai )
    }
     console.log("HTMLCollection----> ",collection.length); // 8(LIVE), here we can't use forEachmethods
    console.log("Nodelist ---->",list.length); //3 (STATIC) , here we can use forEach method 
     */

//! DOM MANIPULATION :--->

const mainContainer = document.querySelector("#table-container")

const tableTag = document.createElement("table");

const trTage1 = document.createElement("tr");
const trTage2 = document.createElement("tr");
const trTage3 = document.createElement("tr");

const thTage1 = document.createElement("th");
const thTage2 = document.createElement("th");
const thTage3 = document.createElement("th");

const tdTage1 = document.createElement("td");
const tdTage2 = document.createElement("td");
const tdTage3 = document.createElement("td");
const tdTage4 = document.createElement("td");
const tdTage5 = document.createElement("td");
const tdTage6 = document.createElement("td");

//! Here we apply CSS
// adding attributes
tableTag.border ="1";
tableTag.cellSpacing = "1";
tableTag.cellPadding = "5"

// adding textContent
thTage1.textContent = "ID";
thTage2.textContent = "FNAME";
thTage3.textContent = "LNAME";

tdTage1.textContent = "1";
tdTage2.textContent = "Joe";
tdTage3.textContent = "Doe";
tdTage4.textContent = "2";
tdTage5.textContent = "Jane";
tdTage6.textContent = "Doe";


// trTage1.appendChild(thTage1,thTage2,thTage3) // yaha ham ek bar me ek hi chil ko append krr sakte hai 
// console.log(trTage1);

trTage1.append(thTage1,thTage2,thTage3);
trTage2.append(tdTage1,tdTage2,tdTage3);
trTage3.append(tdTage4,tdTage5,tdTage6);

tableTag.append(trTage1,trTage2,trTage3);



console.log(tableTag);

//document.body.append(tableTag); // use for  apply attributes or css
mainContainer.append(tableTag); // use for  apply attributes or css

if(true){
    var x = 10;
    let y = 20;
}
console.log(x,y);
