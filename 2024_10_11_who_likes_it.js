/*You probably know the "like" system from Facebook and other pages. People can 
"like" blog posts, pictures or other items. We want to create the text that 
should be displayed next to such an item.

Implement the function which takes an array containing the names of people that 
like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this
*/

////////// MY SOLUTION
function likes(names) {
  let text = "no one likes this";
  if (names.length == 1) {
    text = `${names[0]} likes this`;
  } else if (names.length > 1 && names.length < 4) {
    const lastName = names.pop();
    text = `${names.join(", ")} and ${lastName} like this`;
  } else if (names.length >= 4) {
    text = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
  return text;
}

////////// BEST SOLUTION
function likes2(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return names[0] + " likes this";
      break;
    case 2:
      return names[0] + " and " + names[1] + " like this";
      break;
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
      break;
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      );
  }
}
// P.S.: At this time I had not learned how to use switch/case yet.

console.log(likes([]));
console.log(likes2([]));
console.log(likes(["Peter"]));
console.log(likes2(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes2(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes2(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
console.log(likes2(["Alex", "Jacob", "Mark", "Max"]));

// steps:
// 1- Get how many names
// 2- If more than 1 add 'and' at [-2]
