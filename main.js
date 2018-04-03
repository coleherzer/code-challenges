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

    //console.log(obj)
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


// Weird String Case
// function that changes characters at even indexes to upper case
// characters at ood indexes are lower case
// NOTE: only alphabetic characters and single spaces

function toWeirdCase (string) {
    var arrOfWords = string.split(' ')
    //console.log(arr)
    //console.log(arrOfWords)

    var alteredArray = [];

    // arrOfWords.forEach((word) => {
    //     var arr = word.split('')
    //     for(let i = 0; i < arr.length; i++) {
    //         if(i % 2 == 0) {
    //             alteredArray.push(arr[i].toUpperCase())
    //         } else {
    //             alteredArray.push(arr[i].toLowerCase())
    //         }
    //     }
    //     if (arrOfWords.length > 1) {
    //         alteredArray.push(' ')
    //     }
    // })

    // needed to do it this way so I could add the last condition on line 116 so there wouldnt be spaces at end
    for(let j = 0; j < arrOfWords.length; j ++) {
        var arr = arrOfWords[j].split('')
        for(let i = 0; i < arr.length; i++) {
            if(i % 2 == 0) {
                alteredArray.push(arr[i].toUpperCase())
            } else {
                alteredArray.push(arr[i].toLowerCase())
            }
        }
        if (arrOfWords.length > 1 && j < (arrOfWords.length - 1)) {
            alteredArray.push(' ')
        }
    }

    var finalString = alteredArray.join('')
    
    //console.log(finalString)

    return finalString;


    //ALL ATTEMPTS

    // for(let i = 0; i < arr.length; i++) {
    //     var fakeIndex;
    //     // if we're on the first one, or the last position wasnt a space, continue as normal
    //     if(i == 0 || (arr[i-1] !== ' ')) {
    //         if(i % 2 == 0) {
    //             alteredArray.push(arr[i].toUpperCase())
    //         } else {
    //             alteredArray.push(arr[i].toLowerCase())
    //         }
    //     // if the last position was a space, and the current index is EVEN
    //     } else if (arr[i - 1] == ' ' && i % 2 == 0) {
    //         //if(i % 2 == 0) {
    //         alteredArray.push(arr[i].toUpperCase())
    //         //} else {
    //         //    alteredArray.push(arr[i].toLowerCase())
    //         //}
    //     } else if (arr[i - 1] == ' ' && i % 2 !== 0) {
    //         fakeIndex = 2
    //         if(fakeIndex % 2 == 0) {
    //             alteredArray.push(arr[i].toUpperCase())
    //         }
    //     }

    //     //console.log(i)
    //     // var index = i
    //     // if (arr[i] == ' ') {
    //     //     // want index to = something NOT even
    //     //     //index = 1
    //     //     // also want to make sure the index after the space IS even

    //     //     if(index % 2 == 0) {
    //     //         alteredArray.push(arr[index].toUpperCase())
    //     //     } else {
    //     //         alteredArray.push(arr[index].toLowerCase())
    //     //     }
    //     // } 
        
    //     // else if (index % 2 == 0) {
    //     //     alteredArray.push(arr[i].toUpperCase())
    //     // } else {
    //     //     alteredArray.push(arr[i].toLowerCase())
    //     // }

    //     // 4 lines below are what I originally had that makes function work with single word strings
    //     // if(index % 2 == 0) {
    //     //     alteredArray.push(arr[index].toUpperCase())
    //     // } else {
    //     //     alteredArray.push(arr[index].toLowerCase())
    //     // }


    //     // if its not a space, execute the block below
    //     // if(index % 2 == 0) {
    //     //     alteredArray.push(arr[index].toUpperCase())
    //     // } else {
    //     //     alteredArray.push(arr[index].toLowerCase())
    //     // }

    //     // if it is a space
    //     // 

    //     // if its a space, and its odd were fine (next index will be even anyways)
    //     // if (arr[i] == ' ' && ((arr[i] % 2) !== 0)) {
    //     //     // want index to = something NOT even
    //     //     //index = 1
    //     //     // also want to make sure the index after the space IS even

    //     //     if(index % 2 == 0) {
    //     //         alteredArray.push(arr[index].toUpperCase())
    //     //     } else {
    //     //         alteredArray.push(arr[index].toLowerCase())
    //     //     }
    //     // } 
    //     // if its a space, and the index is EVEN, we want to make sure the next index is EVEN again somehow
        
    // }
    
    // //console.log(alteredArray)
    // var finalString = alteredArray.join('')
    // console.log(finalString)
    // return finalString;

    // END OF ATTEMPTS
}


toWeirdCase("Yo dUde")
toWeirdCase("this is a tESt")
toWeirdCase("WAAAAzzzzzzZZuppPPp")
toWeirdCase("does This WorkK")

toWeirdCase("familiarity")

// original attempt (wrong for multiple word strings)
// var arr = string.split('')

//     var alteredArray = [];

//     for(let i = 0; i < arr.length; i++) {
//         if(i % 2 == 0) {
//             alteredArray.push(arr[i].toUpperCase())
//         } else {
//             alteredArray.push(arr[i].toLowerCase())
//         }
//     }
    
//     var finalString = alteredArray.join('')

//     return finalString;

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Strings of two characters each

function solution(str) {
   var arr = str.split('')
    console.log(arr)

    strLength = arr.length

    finalArray = []

    if (strLength % 2 == 0) {
        for (let i = 0; i < arr.length; i+=2) {
            newString = arr[i] + arr[i + 1]
            console.log(newString)
            finalArray.push(newString)
        }
    } else {
        for (let i = 0; i < arr.length; i+=2) {
            if (i < arr.length - 1) {
                newString = arr[i] + arr[i + 1]
                console.log(newString)
                finalArray.push(newString)
            } else {
                newString = arr[i] + '_'
                console.log(newString)
                finalArray.push(newString)
            }
        }
    }

    console.log(finalArray)


}

//solution('abc') // should return ['ab', 'c_']
//solution('abcdef') // should return ['ab', 'cd', 'ef']


/////////////////////////////////////////////////////////////////////////////////////////////////////

// Lord of the Rings ---- Good vs Evil

// my quick attempt
/* function goodVsEvil(good, evil){
    good.split(' ')
    console.log(good[0])
    var goodWorth;
    for(let i = 1; i < 6; i++) {
        var number = good[i]
        goodWorth = number 
    }

    evil.split(' ')
    console.log(evil[0])
    var evilWorth;
    for(let i = 1; i < 6; i++) {
        evil[i]
    }
  
} */

// a really awesome way to do it
function goodVsEvil(good, evil) {  
    var getWorth = function( side, worth ) {
      return side.split(' ').reduce( function(result, value, index) { 
        return result + (worth[index] * value);
      }, 0);
    }
    // need to go look at some videos for a better understanding of reduce
  
    var result = getWorth( good, [1,2,3,3,4,10] ) - getWorth( evil, [1,2,2,2,3,5,10] );
  
    return result > 0 ? "Battle Result: Good triumphs over Evil" :
           result < 0 ? "Battle Result: Evil eradicates all trace of Good" :
                        "Battle Result: No victor on this battle field";
}


//goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')
//goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')
//goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Simple Pig Latin

function pigIt(str) {
    var words = str.split(' ')

    //letters.includes(/^[A-Za-z]+$/)
    var pigged = []

    words.forEach((word) => {
        var letters = word.split('')
        if (letters.length == 1 && letters[0] !== /^[A-Za-z]+$/) {
            letters.push(word[0])
            letters.splice(word[0], 1)
            var pigWord = letters.join('')
            pigged.push(pigWord)
        } else {
            letters.push(word[0])
            letters.splice(word[0], 1)
            letters.push('ay')
            var pigWord = letters.join('')
            pigged.push(pigWord)
        }
        // var letters = word.split('')
        // letters.push(word[0])
        // letters.splice(word[0], 1)
        // letters.push('ay')
        // var pigWord = letters.join('')
        // pigged.push(pigWord)
    })

    var piggedString = ''

    for(let i = 0; i < pigged.length; i++) {
        if (i < pigged.length -1) {
            piggedString = piggedString + pigged[i] + ' '
        } else {
            piggedString = piggedString + pigged[i]
        }
        
    }

    console.log(piggedString)

}

//pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
//pigIt('Hello world !');     // elloHay orldWay !


///////////////////////////////////////////////////////////////////////////////////

// Feasts Beasts exercise

function feast(beast, dish) {
    if(beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) {
        return true
    } else {
        return false
    }
}

//console.log(feast("great blue heron", "garlic naan"))
//console.log(feast("chickadee", "chocolate cake"))
//console.log(feast("brown bear", "bear claw"))
//console.log(feast("deer", "fruit"))

///////////////////////////////////////////////////////////////////////////////////

// Camel Case Method

// String.prototype.camelCase=function(){
//     String.split(" ")
// }

function camelCase(str) {
    var words = str.split(' ')
    // console.log(words)

    var cameledWords = []

    words.forEach((word) => {
        var letters = word.split('')
        var changedLetter = letters[0].toUpperCase()
        // console.log(changedLetter)
        letters.splice(0, 1, changedLetter)
        // console.log(letters)
        var cameledWord = letters.join('')
        //console.log('cameled word is ', cameledWord)
        cameledWords.push(cameledWord)

        // console.log(cameledWords)
    })

    //console.log(cameledWords)

    var cameledStr = cameledWords.join('')

    return cameledStr
}

console.log(camelCase("hello world"))
console.log(camelCase("whats for dinner man"))
console.log(camelCase("lunch time is soon"))
console.log(camelCase("cole"))
console.log(camelCase("Cole Herzer"))

///////////////////////////////////////////////////////////////////////////////////

