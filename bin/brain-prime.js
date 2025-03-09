#!/usr/bin/env node
import runGame from '../src/index.js';
import cli from '../src/cli.js';

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';
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

runGame(DESCRIPTION, generateRound);
