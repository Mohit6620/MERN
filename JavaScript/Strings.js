// there are three ways to concat a string 
var1 = "hello" ;
var2 = "dev";
console.log(var1+" "+ var2);
console.log(var1.concat(" ",var2));
var1 = var1.concat(" ", var2);
console.log(var1);

//Objects
let students = {
    id:1 ,
    roll:55,
    marks: 85
}

//functions

function display (oneObj){ //object as parameter 
    console.log("id is " + oneObj.id );
}

display(students);

let a = function(a , b){ // Normal function
    console.log(a+b)
}
a(8,9);