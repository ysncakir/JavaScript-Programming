var map = new Map();

/*

set(Key, value) : add keys value to the map
get(key) :returns the value
delete(key) : deletes the key and value
has(key): verifies 


*/


map.set("Madina", 200000);
map.set("Kamil", 100000); 

console.log(map);

/*

for of loop :
        for(var [X, Y] of mapName)
*/

for (var [X, Y] of map){
    console.log(X+ ": salary is "+ Y+ " dollars");
}

console.log(map.get("Madina"));
map.delete("Kamil");

console.log(map);

/*
keys(): returns all the keys
values(): returns all the values
delete(key): delete the key from map
has(key): verifies
keys(): retursn all keys
values(): returns all values

*/

var students = new Map(); 
students.set("Nurzat", 1); 
students.set("Olessya", 2);
students.set("Holy Erhan", 3);  

for (var names of students.keys()){
    console.log(names);

}
console.log("========================");
for (var value of students.values()){
    console.log(value);
}

console.log(map.get("Madina"));








