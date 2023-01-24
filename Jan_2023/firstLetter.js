function worldBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result = result + "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return result;
}

console.log(worldBlanks("dog", "big", "ran", "quickly"))