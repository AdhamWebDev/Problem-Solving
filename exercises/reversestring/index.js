// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // return str.split('').reverse().join('');

    // let reversed = '';
    // for (let character of str){
    //     reversed = character + reversed;
    // }
    // return reversed;

//     Explaination

// For Loop: The function uses a for...of loop to iterate through each character in the input string (str).
// Reversing the String: Inside the loop, each character of the input string is concatenated with the existing reversed string. However, the new character is added before the existing reversed string (character + reversed). This effectively builds the reversed string by adding characters in reverse order.
// For example, if the input string is "hello," the loop will iterate through each character ('h', 'e', 'l', 'l', 'o') and build the reversed string as follows:
// 'h' + ''         => 'h'
// 'e' + 'h'        => 'eh'
// 'l' + 'eh'       => 'leh'
// 'l' + 'leh'      => 'lleh'
// 'o' + 'lleh'     => 'olleh'

console.log(str.split('').reduce((rev,char)=> char + rev, ''))

//EXPLAINATION
// reduce: The reduce function is used to transform the elements of the array into a single value. In this case, it's used to build the reversed string.

// Callback Function: The callback function provided to reduce takes two parameters:

// rev: This represents the accumulated result or the partially reversed string.
// char: This represents the current character being processed in the array.
// String Reversal: The expression char + rev concatenates the current character (char) with the accumulated result so far (rev). However, notice that the order is reversed (char comes before rev). This effectively builds the reversed string character by character.

// For example, using the same "hello" input:

// Iteration 1: 'h' + '' results in 'h'
// Iteration 2: 'e' + 'h' results in 'eh'
// Iteration 3: 'l' + 'eh' results in 'leh'
// Iteration 4: 'l' + 'leh' results in 'lleh'
// Iteration 5: 'o' + 'lleh' results in 'olleh'
}
reverse("Hello")
module.exports = reverse;
