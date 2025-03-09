#!/usr/bin/env node
import runGame from '../src/index.js';
import cli from '../src/cli.js';

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const randomNumber = cli.randomNumber(MIN_NUMBER, MAX_NUMBER);
  const question = `${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

runGame(DESCRIPTION, generateRound);
