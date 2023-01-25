const prompt = require('prompt-sync')();

var guestList = ["John", "Joane", "Matt", "Linda", "Oscar"]
var guestName = prompt("what is your name: ")
console.log(guestList.includes(guestName))



