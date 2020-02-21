var set = new Set(); 

/*
add(values) : add value to the set
delete(vale) : delete value from set
clear(); removes everything
has(Value): comtains

*/

set.add(10);
set.add(10);
set.add(10);
set.add("Yusuf");
set.add("Mizgin");
set.add('$');

console.log(set);

set.delete(10);
console.log(set);
set.delete("Mizgin");
console.log(set);

//set.clear();
console.log(set);

var bool1 =set.has("Yusuf");
console.log(bool1);

console.log("=========================");

/*
for of loop:

for (var varname of set.values())

*/

for (var each of set.values()){
    console.log(each);
}

var students = ["Nurullah", "Shirin", "Sukran", "Nurzat"];

for (var student of students.values()){
    console.log(student);
}
