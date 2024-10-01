//various methods of object console
console.log("hii");
console.warn("warning");
console.table({course : "mern"  , ratings : "500"});
console.error("this is an error");
console.timeEnd("gives total time required by the code to execute");

// var let const 
var name = "mohit"; //global scope 
let x = '55'; //limited scope
const y = 'mohit'; //cant reassigne value

//data types  primitive 1.string 2.numbers 3.boolean 4.null 5.underdefined
console.log(typeof name) //String

//reference or derived 
//array
let arr = [10,20,30, "one" , true , null] //can different datatypes
console.log(arr);

//object
let students = {
    id:1 ,
    roll:55,
    marks: 85
}

console.table(students);
// Js has  freedom to assigne any type of value to anty of the variable  not like java , c++

//\\//\\//\\CONVERSION AND CORRCION
let var1 = "mohit" ; //string
let var6 = "789.66";
let var2 = 88 ;
let var3 = String(var2); 
let array = [1,2,3];
let var4 = String(array); //converting arra into string
let var5 = parseInt(var6); // converting string into number
console.log(var6.toFixed(2)); //rounded the given decimal upto 2 digits

