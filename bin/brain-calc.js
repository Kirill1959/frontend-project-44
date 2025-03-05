#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcome, randomNumber } from '../src/cli.js';

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

const generateRound = (operation) => {
  const num1 = randomNumber(1, 10);
  const num2 = randomNumber(1, 10);
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = calculate(num1, num2, operation);
  return [question, correctAnswer];
};

const game = () => {
  const name = welcome();
  console.log('What is the result of the expression?');

  // Первые два раунда случайные (+ или -)
  const operations = ['+', '-'];
  for (let i = 0; i < 2; i += 1) {
    const operation = operations[randomNumber(0, operations.length - 1)];
    const [question, correctAnswer] = generateRound(operation);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  // Последний раунд - умножение
  const [questionMult, correctAnswerMult] = generateRound('*');
  console.log(`Question: ${questionMult}`);
  const answerMult = readlineSync.question('Your answer: ');

  if (answerMult !== correctAnswerMult) {
    console.log(`'${answerMult}' is wrong answer ;(. Correct answer was '${correctAnswerMult}'.`);
    console.log(`Let's try again, ${name}!`);
    return;
  }
  console.log('Correct!');

  console.log(`Congratulations, ${name}!`);
};

game();
