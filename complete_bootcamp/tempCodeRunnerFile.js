const prompt = require('prompt-sync')();


var age = prompt("What is your age: ");
function lifeInWeeks(age){
    var timetill90 = 90 - age
    var days = timetill90 * 365
    var weeks = timetill90 * 52
    var months = timetill90 * 12
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left to live")
}
lifeInWeeks(age)