#!/usr/bin/env node
import readlineSync from 'readline-sync';
import cli from '../src/cli.js';

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const ROUNDS_COUNT = 3;
const MIN_NUMBER = 2;
const MAX_NUMBER = 30;

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const num = cli.randomNumber(MIN_NUMBER, MAX_NUMBER);
  const question = `${num}`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runGame = () => {
  const name = cli.welcome();
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
