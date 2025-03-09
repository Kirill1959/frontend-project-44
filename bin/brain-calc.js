#!/usr/bin/env node
import runGame from '../src/index.js';
import cli from '../src/cli.js';

const DESCRIPTION = 'What is the result of the expression?';
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

runGame(DESCRIPTION, generateRound);
