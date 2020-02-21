/*
var vs let vs const

var vs let

    var : variable name is not unique
    let : variable name MUST be unique


*/

var a =100;
var a = "Muhtar";

console.log(a);

let b ="Kamil";
//let b = "Yedek" ;
console.log(b);   

console.log("=====================");
if(true){     // var can be accesible from anywhere   
    let i =100;   // but let is only within the block
}
// console.log(i);

const str = "cybertek school"; // becomes immutable
console.log(str);

const gender = "Female";   // final variable. cannot be changed
// gender ="Male";

console.log(gender);