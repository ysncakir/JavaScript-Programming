/*
if statement : same with java

ternary: same with java

switch statement : almost same 
*/

if (9>10){
    console.log("hello");

} else if (11>12){
    console.log("Merhaba");
} 
else{
    console.log("Hola");
}

var str = (9>10)? "Hello": (11>12) ? "Merhaba":"Hola";

console.log(str);

// boolean, decimals, long java does not accept in switch statement

var bool =true; 
switch(bool){   // accepts any data type
    case true : 
            console.log("true");
            break;
    case false:
            console.log("false");
            break;
    default :
            console.log("Maybe");



}