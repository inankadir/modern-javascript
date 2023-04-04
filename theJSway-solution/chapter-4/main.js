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