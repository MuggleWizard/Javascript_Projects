// Given a number as an input, print out every integer from 1 to that number.  However, when the integer is divisible by 2, print out "Fizz"; when it's divisible by 3, print out "Buzz"; when it's divisible by both 2 and 3, print out "Fizz Buzz".

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 == 0 && i % 3 == 0) console.log("Fizz Buzz");
//     else if (i % 3 == 0) console.log("Buzz");
//     else if (i % 2 == 0) console.log("Fizz");
//     else console.log(i);
//   }
// }

// fizzBuzz(50);

// HTML code below.

// let i = 1;
// while (i <= 100) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     document.write(i + ". FIZZBUZZ! <br/>");
//   } else if (i % 3 == 0) {
//     document.write(i + ". FIZZ! <br/>");
//   } else if (i % 5 == 0) {
//     document.write(i + ".   BUZZ! <br/>");
//   } else {
//     document.write(i + ". <br/>");
//   }
//   i++;
// }

// for (let i = 1; i <= 100; i++) {
//   let output = "";
//   if (i % 3 == 0 && i % 5 == 0) output += "Harry Potter";
//   if (i % 3 == 0) output += "Fizz";
//   if (i % 5 == 0) output += "Buzz";
//   console.log(output || i);
// }

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log("Harry Potter");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
}

fizzBuzz(75);
