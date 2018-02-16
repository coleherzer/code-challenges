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

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']


/////////////////////////////////////////////////////////////////////////////////////////////////////

