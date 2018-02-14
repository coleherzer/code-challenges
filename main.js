console.log('js connected')

function duplicateEncode(word){
    // ...
    var obj = {}
    var arrOfChars = word.toLowerCase().split('')
    //console.log(arrOfChars)
    // loop through the word, counting number of times letters occur

    arrOfChars.forEach((character) => {
        if (obj.hasOwnProperty(character)) {
            obj[character] += 1
        }
        else {
            obj[character] = 1
        }
    })
    // for (let i = 0; i <= arrOfChars.length; i++) {
    //   if (obj.hasOwnProperty(arrOfChars[i])) {
    //     obj[arrOfChars[i]] += 1
    //   }
    //   else {
    //     obj[arrOfChars[i]] = 1
    //   }
    // }

    console.log(obj)
    // gives us an object of all the counts
    

    // now we have to do something similar to above again
    wordArray = word.toLowerCase().split('')

    //console.log(wordArray)

    var newWord = wordArray.map((character) => {
        if (obj[character] > 1) {
            return ")"
        }
        else {
            return "("
        }
    }).join('')

    // console.log(wordArray)
    // console.log(newWord)

    return newWord

    // extra notes
    // condition if a letter occurs once, add a "(" to an array

    // condition where if letter occurs two or more times, add a ")" to array
    
    // run arr.toString() and then return that string
}

duplicateEncode("hello")
// want to first end up with an object like 
// // obj {
//     h: 1, 
//     e: 1, 
//     l: 2, 
//     o: 1
// }

duplicateEncode('fun')

duplicateEncode('matter')

duplicateEncode('recede')

duplicateEncode('Sucess')

duplicateEncode('(( @')

/////////////////////////////////////////////////////////////////////////////////////////////////////


