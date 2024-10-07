"strict";
/*Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the 
trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string 
with all vowels removed.

For example, the string "This website is for losers LOL!" would become 
"Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.*/

////////MY SOLUTION
function disemvowel(str) {
  const vowels = "aeiou";
  for (let i = 0; i < str.length; i++)
    if (vowels.includes(str[i].toLowerCase())) {
      str = str.replace(str[i], "");
      i--;
    }
  return str;
}

///////BEST SOLUTION - after research
disemvowel2 = (str) => str.replace(/[aeiou]/gi, "");

console.log(disemvowel("This website is for losers LOL!"));
console.log(disemvowel2("This website is for losers LOL!"));
console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read")
);
console.log(
  disemvowel2("No offense but,\nYour writing is among the worst I've ever read")
);
console.log(disemvowel("What are you, a communist?"));
console.log(disemvowel2("What are you, a communist?"));
