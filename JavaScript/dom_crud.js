//1.create element 
var elem = document.createElement("a"); //creating anchor tag 
elem.className = "aclass";
elem.id ="jsId" ;
elem.setAttribute("href" , "//google.com");//setting attrribute and assigne value to it 
elem.innerHTML ="please click here";  //setting the tag
let div = document.querySelector('div.container'); // selecting class in which child should be append
div.appendChild(elem);  // append the child 
console.log(elem);

//2.Get Attribute()
//used to get current value on specified elements if no attributes returns null
var h = document.getElementById("myachor").getAttribute("href");
console.log(h); 

//3.hasAttribute () return true or false based on is attribute present or not 
var h1 = document.getElementById("myachor").hasAttribute("href");
console.log(h1);

//4.remove atrribute() 
//var h1 = document.getElementById("myachor").removeAttribute("href");
//console.log(h1);

//5. replacewith()
var elem1 = document.getElementById("myid1");
var elem2 = document.createElement("div");
let content = document.createTextNode(elem.innerHTML +" "+ "this is text replace with the help of js elem text is assigned");
elem2.appendChild(content);
elem1.replaceWith(elem2);