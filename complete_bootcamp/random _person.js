names = ["Angela", "Nina", "Leon", "Prince", "James", "Mikes"]
function whosPaying(names) {
    var numberofpeople = names.length
    var randomPersonPosition = Math.floor(Math.random() * numberofpeople)
    var randomPerson = names[randomPersonPosition]

    return randomPerson
}

console.log(whosPaying(names) + " is paying for lunch today")