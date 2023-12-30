// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB){
    let string1 = charMap(stringA);
    let string2 = charMap(stringB);

    console.log(string1 === string2) ;

}


function charMap(str){
    console.log(str.replace(/[^\w]/g,"").toLowerCase().split('').sort().join(''));
}

//SOLUTION 1

// function anagrams(stringA, stringB) {
//     const aCharMap = charMap(stringA);
//     const bCharMap = charMap(stringB);

//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
//         console.log(false);
//     }

//     for(let char in aCharMap){
//        if(aCharMap[char] !== bCharMap[char]){
//             console.log(false);
//        }
//     }
//     console.log(true);

// }

// function charMap(string){
//     let stringObg = {};

//     for(let char of string.replace(/[^\w]/g,"").toLowerCase()){
//         if(!stringObg[char]){
//             stringObg[char] = 1;
//         }else{
//             stringObg[char]++;
//         }
//     }
//     return stringObg;
//     console.log(stringObg)
// }

charMap('rail safety');
anagrams('rail safety', 'fairy tales')
module.exports = anagrams;
