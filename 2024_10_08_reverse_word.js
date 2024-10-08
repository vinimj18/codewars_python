/*Complete the function that accepts a string parameter, and reverses each word 
in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

// Steps:
// 1 - get each word
// 2 - reverse each word
// 3 - count spaces
// 4 - rebuilt the sentence with spaces

/////// MY SOLUTION
function reverseWords(str) {
  let new_str = "";
  let words = [];

  for (let i = 0; i <= str.length; i++) {
    if (i == str.length) {
      words.push(new_str);
    } else if (str[i] != " ") {
      new_str += str[i];
    } else {
      words.push(new_str);
      words.push(str[i]);
      new_str = "";
    }
  }

  let concatenate = "";
  for (let i = 0; i < words.length; i++) {
    let reversed = [...words[i]].reverse();
    let rejoin = reversed.join("");
    concatenate += rejoin;
  }

  return concatenate;
}

/////// BEST SOLUTION
function reverseWords2(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}

// Test cases
console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
console.log(reverseWords2("The quick brown fox jumps over the lazy dog."));
console.log(reverseWords("apple"));
console.log(reverseWords2("apple"));
console.log(reverseWords("a b c d"));
console.log(reverseWords2("a b c d"));
console.log(reverseWords("double  spaced  words"));
console.log(reverseWords2("double  spaced  words"));
