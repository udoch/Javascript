function testEqual(val) {
    if (val == 12) {
        return "qual";
    }
    return "not equal"
}
console.log("The number is " + testEqual(10) + " to 12.")



function testGreaterThan(value) {
    if (value > 100) {
        return "over 100"
    }
}

console.log('Number is ' + testGreaterThan(120))

// 

function testSize(num) {
    if (num < 5) {
        return "Tiny"
    }
    else if (num < 10) {
        return "Small"
    }
    else {
        return "Huge"
    }
}

console.log(testSize(19));


function isLess(a, b) {
    if (a < b) {
        return true
    }
    else {
        return false
    }
}

console.log(isLess(10,15))


function lessThan(a, b) {
    return a < b
}
console.log(lessThan(15,11))