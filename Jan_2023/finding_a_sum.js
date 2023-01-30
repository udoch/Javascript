function sum(limit) {
    let sum = 0
    for (var i = 0; i <= limit; i = i + 1){
        if (i % 3 === 0 || i % 5 === 0)
            sum = sum + i
    }
    return sum
}
console.log(sum(8))



// finding the average in a set of scores
