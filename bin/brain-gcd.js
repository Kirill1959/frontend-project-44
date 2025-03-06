#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcome, randomNumber } from '../src/cli.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return String(a);
  }
  return gcd(b, a % b);
};

const brainGCD = () => {
  const name = welcome();
  console.log(gameDescription);

  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = randomNumber(1, 100);
    const num2 = randomNumber(1, 100);
    const question = `${num1} ${num2}`;
    const correctAnswer = gcd(num1, num2);

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

brainGCD();
