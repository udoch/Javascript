
var numrange = []
for (var i = 0; i < 5; i = i + 1)
numrange.push(i)
console.log(numrange)





var evenNum = []
for (var i = 0; i < 21; i = i + 2){
    evenNum.push(i)
}
console.log(evenNum)



const person = {
    names: "ud",
    age: 30,
    nationality: "Lome"
}

for (var key in person) {
    console.log(key, person[key])
}