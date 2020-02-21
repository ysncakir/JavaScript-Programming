/*
require : like import statement in java
*/

// var login= require("/Users/ysncakir/Desktop/JavaScript-Programming/JS_Day02/pages/LoginPage.js");

var login =require("../JS_Day02/pages/LoginPage")
console.log(login.username);
console.log(login.password);
console.log(login.logInButton);