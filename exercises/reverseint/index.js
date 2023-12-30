// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // const reversed = parseInt(n.toString().split('').reverse().join(''))
    // console.log(reversed*Math.sign(n));

    let reversed = '';
    for (let char of n.toString()){
        console.log(char)
        reversed = char + reversed;
    }    
    console.log(parseInt(reversed)*Math.sign(n))
}

reverseInt(-123450)
module.exports = reverseInt;
