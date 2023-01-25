// function bmicalculator(weight, height) {
//     // var bmi = weight / (height * height)
//     var bmi = weight / Math.pow(height,2)
//     return Math.round(bmi)
// }

// console.log(bmicalculator(185, 6.3))

// function testSize(num) {
//     if (num < 5) {
//         return "Tiny"
//     }
//     else if (num < 10) {
//         return "Small"
//     }
//     else {
//         return "Huge"
//     }
// }

// console.log(testSize(19));

function bmicalculator(weight, height) {
    var bmi = weight / (height * + height)
    if (bmi < 18.5) {
        return (bmi + " so you are underweight")
    }
    else if (18.5 < bmi && bmi < 24.9) {
        return (bmi + " so you have a normal weight")
    }
    else if (bmi > 24.9){
        return (bmi + " so you are overweight")
    } 
}

console.log("Your BIM is " + bmicalculator(580,5) )