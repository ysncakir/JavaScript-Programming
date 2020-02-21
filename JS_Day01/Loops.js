/*
while loop : same with java
do-while   : same with java
for loop   : same with java

break: exists the loop or swotch statement 
continue: skip the iteration

for in loop : 
for of loop :




var i =0;
while(i<=10){
    console.log(i);
    i++;
}

for(var i =0; i<=10; i++){
    console.log(i);
}






for(var i=0; i<=10; i++){
    console.log(i);
    if(i==3){
    continue;
    }
   
}

var i =5;
while(i>0){
    if(i==3){
        continue;
    }
    console.log(i);
    i--;
}
*/

var arr =[1,2,3,4,5,10.5]

for (each in arr){
    console.log(each);
} // prints the index number only



/*
for(name in arr){
  prints only index numbers
}
*/

var strArray =["Madina", "Waris", "Ruhan", "Shirin"]

for (name in strArray){   // just prints index numbers
    console.log(strArray[name]);
} 

console.log("====================");

for (var i =0; i<strArray.length; i++){
    console.log(strArray[i]);
}

