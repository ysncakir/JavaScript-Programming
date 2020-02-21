var  numbers = [1,2,3, 3.5, 4.6, true, "Muhtar", '$']
// index : start from 0 
console.log(numbers);

console.log(numbers[5]);

var name = numbers[6];

console.log(name);

console.log(numbers[10]);

/*
sort(); sorts in ascending order 
push(value) : add method
pop(): LIFO
shift() : FIFO
unshift(value): inserts the value into index 0
length():
*/

var nums = [95,5,87,8,5,2,4,9];
nums.sort(); 
nums.push(100); 


console.log(nums);
console.log(nums.pop());// after this method, last number will be removed
console.log(nums);
console.log(nums.shift());
console.log(nums);

nums.unshift(2);
console.log(nums); 
console.log(nums.length);
