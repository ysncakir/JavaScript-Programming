/*
java:
Access-modifier     specifier   return-type     methodName(Parameter)
JavaScript:
    function    functionName(){

    }

*/

function addTwoNumbers(num1, num2){
    console.log(num1+num2);
}

addTwoNumbers(10,20);

function reverseString(str){
    if (typeof str =="string"){
    var reverse = ""; 
    for (var i = str.length-1; i>=0; i--){
        reverse +=str.charAt(i);
    } 

    console.log(reverse);
    } else{
            console.log("No String is given");
    }
}
reverseString("kamil");


// type of

var num1 =100; 
console.log(typeof num1);

reverseString(100);

function multiplyTwoNum (num1, num2){
    if(typeof num1 =="number" || typeof num2 =="number"){
        var result = num1*num2; 

    } else {
        console.log("Enter valid number");
    }
    return result; 
}


console.log(multiplyTwoNum(2,40));