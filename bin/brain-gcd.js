#!/usr/bin/env node
import readlineSync from 'readline-sync';
import cli from '../src/cli.js';

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';
const ROUNDS_COUNT = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const generateRound = () => {
  const num1 = cli.randomNumber(MIN_NUMBER, MAX_NUMBER);
  const num2 = cli.randomNumber(MIN_NUMBER, MAX_NUMBER);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return [question, correctAnswer];
};

const runGame = () => {
  const name = cli.welcome();
  console.log(DESCRIPTION);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

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
