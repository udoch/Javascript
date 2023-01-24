
// Question 1
function minusSeven(num) {
    return num - 7
}
console.log(minusSeven(10))


// Question 2
var changed = 0;
function change(num) {
    return (num + 5)/ 3
}
console.log(change(11))


// Question 3
function testStrict(val) {
    if (val === 7) {
        return "Equal"
    }
    return "Not equal"
}
console.log(testStrict(10))


// Question 4
function testLogic(valu) {
    if (valu < 10 || valu > 20) {
        return "outside"
    }

    return "Inside"
}
console.log("We are " + testLogic(3))



// Question 1
function shirtSize(ab) {
    if (ab < 5) {
        return "Tiny"
    }
    else if (ab < 10) {
        return "Small"
    }
    else if (ab < 15) {
        return "Medium"
    }
    else if (ab < 20) {
        return "Large"
    }
    else {
        return "X-Large"
    }
}

console.log("You are wearing a " + shirtSize(18) + " sized shirt")



// Question 1
var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go-Home"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    }
    else if (strokes <= par - 2) {
        return names[1]
    }
    else if (strokes == par - 1) {
        return names[2]
    }
    else if (strokes == par) {
        return names[3]
    }
    else if (strokes == par + 1) {
        return names[4]
    }
    else if (strokes == par + 2) {
        return names[5]
    }
    else if(strokes >= par + 3) {
        return names[6]
    }
}

console.log(golfScore(5, 8))



// Question 8
function caseinSwitch(numeral) {
    var answer = "";
    switch (numeral) {
        case 1:
            answer = "alpha"
            break
    }
    switch (numeral) {
        case 2:
            answer = "bravo"
            break
    }
    switch (numeral) {
        case 1:
            answer = "charlie"
            break
    }
    switch (numeral) {
        case 1:
            answer = "delta"
            break
    }
    return answer
    
}
console.log(caseinSwitch(2))


// Question 8

var posArray = []
for (var c = 1; c < 20; c = c + 1){
    posArray.push(c)
}
console.log(posArray)



// _____________________________//

function isLower(d, e) {
    return d < e
}
console.log(isLower(10, 90))


var testOb = {
    12: "Nsmr",
    14: "nonso",
    19: "Unites"
}

console.log(testOb[12])



function phoneticLookup(valuex) {
    var resolution = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Colorado",
        "delta": "Denve"
    };

    resolution = lookup[valuex];
    return resolution;
}

console.log(phoneticLookup("charlie"))





var backarray = []
for (var m = 10; m > 0; m = m - 2){
    backarray.push(m)
}
console.log(backarray)

var negArrray = []
for (var g = 9; g > 0; g -= 2){
    negArrray.push(g)
}
console.log(negArrray)


// solving the sum of an array

var mainArray = [2, 3, 4, 5, 6];
var arrayTotal = 0;

for (var f = 0; f < mainArray.length; f = f + 1){
    arrayTotal  = arrayTotal + mainArray[f]
}

console.log(arrayTotal)


var evenNum = [2, 4, 6, 8, 10]
var evenNumTotal = 0

for (var t = 0; t < evenNum.length; t = t + 1){
    evenNumTotal = evenNumTotal + evenNum[t]
}
console.log(evenNumTotal)


//multiplication


function multiplyAll(arra) {
    var product = 1

    for (var p = 0; p < arra.length; p = p + 1){
        for (var o = 0; o < arra[p].length; o = o + 1){
            product = product * arra[p][o]
        }
    }
    return product
}

arra = [[1, 2], [3, 4], [5, 6, 7]]
// product = multiplyAll(arra)
console.log(multiplyAll(arra))


//converting a string to an integer

function converTointeger(str) {
    return parseInt(str)
}
var str = [998.5]
console.log(converTointeger(str))

function converTofloat(str) {
    return parseFloat(str)
}
console.log(converTofloat(str))

console.log(typeof (str))



