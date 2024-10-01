//praticeing element selector 
//1. single element selector 
// 1.1.get element by id selects the first element with the given id and not selecting others 
let ans = document.getElementById("head");
ans.style.color ="green"; //now we are changning color by using js


let one = ans.className; //returns the classname

let child = ans.childNodes ; // gives all node present inside ans that calls childnodes
console.log(one)
//1.2 queryselector 

let two = document.querySelector('#head'); // here we gave id rather we can give it class name and html element 

//2 . multiple elemenet selector 
// selects all the corresponiding with releted to the given tag

//2.1 querySelectorAll()

let three = document.querySelectorAll('head');

// 2.2 getElementByTagName()

let four = document.getElementsByTagName("article");
//this returns array of the corresponding objects 

//2.3 get elementByClassName 

let five = document.getElementsByClassName("demo"); //gives all details with releted to class members 