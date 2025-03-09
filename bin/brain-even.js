#!/usr/bin/env node
import readlineSync from 'readline-sync';

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';
const ROUNDS_COUNT = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const randomNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
  const question = `${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  console.log(DESCRIPTION);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

runGame();
