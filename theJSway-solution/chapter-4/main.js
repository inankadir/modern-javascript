/*1. Carousel
Write a program that launches a carousel for 10 turns, showing the turn number each time.*/

for (let i = 1; i <= 10; i++)
    console.log(i);

/*When it's done, improve it so that the number of turns is given by the user.*/

let turns = prompt("How many turns should we do?",0)

    for (let i = 1; i <= turns; i++) {
        console.log(i);
    }

/*2. Parity
Check the following program that shows even numbers (divisible by 2) between 1 and 10.*/

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  };
}

/*Improve the program so that it also shows odd numbers. Improve it again to replace the initial 
number 1 by a number given by the user.!!! info;
This program must show exactly 10 numbers including the first one, not 11 numbers!*/

let init = prompt("Provide starting integer, please!",1)

for (let i = 1; i <= init; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    }else console.log(`${i} is odd`);
  }

/*3. Input Validation
Write a program that continues to ask the user for a number until the entered number is less 
than or equal to 100.*/

let userGuess = 101;

while (userGuess >= 100) {
  userGuess = prompt("Enter an integer...",0)
}

/*When you are done with the above, improve the program so that the terminating number is between 
50 and 100.*/

while (userGuess > 100 || userGuess < 50) {
  userGuess = prompt("Enter an integer...",0)
}

/*4. Multiplication table
Write a program that asks the user for a number, then shows the multiplication table for this number.*/

let number = prompt("What times table do you want?",0)

for (let i=1; i <= 10; i++) {
  let times = number * i
  console.log(`${number} * ${i} = ${times}`)
}

/*When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous 
exercise as a blueprint).*/

let userInput = 0;

while (userInput < 2 || userInput > 9) {
  userInput = prompt("Enter an integer",0)
}

for (let i=1; i <= 10; i++) {
  let times = userInput * i
  console.log(`${userInput} * ${i} = ${times}`)
}

/*5. Neither yes nor no
Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks 
the user to enter text until either "yes" or "no" is typed, which ends the game.*/

let userWord = "";
while (!(userWord === "no" || userWord === "yes")) {
  userWord = prompt('Enter a word!');
}

/*6. FizzBuzz
Write a program that shows all numbers between 1 and 100 with the following exceptions:
It shows "Fizz" instead if the number is divisible by 3.
It shows "Buzz" instead if the number is divisible by 5 and not by 3.
When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible 
both by 3 and by 5.*/

for (let i = 1; i <= 100; i++) {
  if((i % 3 === 0) && (i % 5 === 0)) {
    console.log(`${i} is fizzbuzz`);
  }
  else if (i % 3 === 0) {
    console.log(`${i} is fizz`);
  }
  else if (i % 5 === 0) {
    console.log(`${i} is buzz`);
  }else {
    console.log(`${i}`)
  }
}

// Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

let tag = "#";
while (tag.length <= 7) {
  console.log(tag);
  tag += "#";
}

// Chessboard : Write a program that creates a string that represents an 8*8 grid, using newline 
// characters to separate lines. At each position of the grid there is either a space or a "#" characters
// The characters should form a chessboard.
// Passing this string to console.log should show something like this:
//  # # # #
// # # # # 
//  # # # #
//  # # # #
// # # # # 
//  # # # #
//  # # # #
// # # # # 
// When you have a program that generates this pattern, define a binding size = 8 and change the program 
// so that it works for any size, outputting a grid of the given width and height.

let size = 8
let board = '';
for (let row = 1; row <= size; row++) {
  for (let column = 1; column <= size; column++) {
    if ((row+column) % 2 == 0) {
      board += ' '
    }else {
      board += '#'
    }
  }
  board += '/n'
}
console.log(board)

//Minimum : The previous chapter introduced the standard function Math.min that returns its smallest 
//argument. We can build something like that now. Write a function min that takes two arguments and 
//returns their minimum.

// Your code here.
function min(num1, num2) {
  return (num1 < num2) ? num1 : num2
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//Recursion: We’ve seen that % (the remainder operator) can be used to test whether a number is 
//even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether 
//a positive whole number is even or odd:

//Zero is even.

//One is odd.

//For any other number N, its evenness is the same as N - 2.

//Define a recursive function isEven corresponding to this description. The function should 
//accept a single parameter (a positive, whole number) and return a Boolean.

//Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// Your code here.
function isEven(num) {
  if(num >= 0) {
    if (num === 0) {
      return true
    }else if (num === 1) {
      return false
    }else {
      return(isEven(num-2))
    }
  }else {
    return "negative"
  }
} 
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

