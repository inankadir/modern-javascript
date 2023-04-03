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

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    }else console.log(`${i} is odd`);
  }
  