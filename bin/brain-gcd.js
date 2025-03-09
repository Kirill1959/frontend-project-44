#!/usr/bin/env node
import runGame from '../src/index.js'; // Изменено на src/index.js
import cli from '../src/cli.js';

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const findGCD = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num2) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const generateRound = () => {
  const num1 = cli.randomNumber(MIN_NUMBER, MAX_NUMBER);
  const num2 = cli.randomNumber(MIN_NUMBER, MAX_NUMBER);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(findGCD(num1, num2));
  return [question, correctAnswer];
};

runGame(DESCRIPTION, generateRound);
