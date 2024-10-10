/*An isogram is a word that has no repeating letters, consecutive or 
non-consecutive. Implement a function that determines whether a string that 
contains only letters is an isogram. Assume the empty string is an isogram. 
Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

////////// MY SOLUTION
function isIsogram(str) {
  let letters = new Set([...str.toLowerCase()]);
  if (letters.size == str.length) {
    return true;
  }
  return false;
}

////////// REFACTORED SOLUTION
function isIsogram2(str) {
  return new Set(str.toLowerCase()).size == str.length;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram2("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram2("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram2("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram2("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram2("isIsogram"));
console.log(isIsogram(""));
console.log(isIsogram2(""));

/*
Steps:
1- Separar as letras
2- ordenar as letras
3- ver se a letra anterior é igual a letra analizada

*/
