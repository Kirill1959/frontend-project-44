#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const game = () => {
  const randomNumber = Math.floor(Math.random() * 10); // Fixed random number generation

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const correct = isEven(randomNumber);

  if (correct === answer) {
    console.log('Correct!');
    return true; 
  } else {
    console.log(
      `'${answer}' is wrong answer ;(. Correct answer was '${correct}'. Let's try again,!`
    );
    return false;
  }
};


const playGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let correctAnswersCount = 0;
  const roundsCount = 3;

  while (correctAnswersCount < roundsCount) {
    if (game()) {
      correctAnswersCount++;
    } else {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

playGame();