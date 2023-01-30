
function fizBuzz(input) {
    if (typeof input !== 'number') {
        return 'This is not a number'
    }
    if ((input % 3 ===0) && (input % 5 === 0)) {
        return 'FizzBuzz'
    }
    if (input % 3 === 0) {
        return 'Fizz'
    }
    if (input % 5 === 0) {
        return 'Buzz'
    }
    if ((input % 3) !== 0 && input % 5 !== 0) {
        return "This number isn't divisible by 3 or 5 "
    }
    
}
console.log(fizBuzz(77))


function oddEven(limit) {
    for (var i = 0; i <= limit; i = i + 1){
        if (i % 2 === 0) console.log(i + " Even number");
        else console.log(i + " Odd number")
    }
}

oddEven(12)

