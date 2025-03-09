#!/usr/bin/env node
import readlineSync from 'readline-sync';
import cli from '../src/cli.js';

const DESCRIPTION = 'What is the result of the expression?';
const ROUNDS_COUNT = 3;
const OPERATIONS = ['+', '-', '*'];
const MIN_NUMBER = 1;
const MAX_NUMBER = 10;

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return String(num1 + num2);
    case '-':
      return String(num1 - num2);
    case '*':
      return String(num1 * num2);
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
};

const generateRound = () => {
  const num1 = cli.randomNumber(MIN_NUMBER, MAX_NUMBER);
  const num2 = cli.randomNumber(MIN_NUMBER, MAX_NUMBER);
  const operation = OPERATIONS[cli.randomNumber(0, OPERATIONS.length - 1)];
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = calculate(num1, num2, operation);
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
