// const prompt = require('prompt-sync')();

var names = prompt("What is your name: ");
// console.log(names)

var firstLetter = names.slice(0, 1)
// console.log(firstLetter);

var firstLetterCapital = firstLetter.toUpperCase()
// console.log(firstLetterCapital)

var remainingletters = names.slice(1, names.length)
// console.log(remainingletters);

var capitalised = firstLetterCapital + remainingletters
console.log("Your name is " + capitalised + ".")



var dogAge = prompt("Input age of dog: ")
var humanage = (dogAge - 2) * 4 + 21
console.log(humanage)


var age = prompt("What is your age: ");
function lifeInWeeks(age){
    var timetill90 = 90 - age
    var days = timetill90 * 365
    var weeks = timetill90 * 52
    var months = timetill90 * 12
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left to live")
}
lifeInWeeks(age)

