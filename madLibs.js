function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    //Creating a Function for word blanks to be filled with any of the variables
    
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    return result;
    //Results output the default words in qutoes seperated by blank quotes for spaces that are then filled in with the words for the variables
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));
//Console output calling the wordBlanks function to display the Mad Libs senteces