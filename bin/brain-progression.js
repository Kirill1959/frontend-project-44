#!/usr/bin/env node
import readlineSync from 'readline-sync';
import cli from '../src/cli.js';

const DESCRIPTION = 'What number is missing in the progression?';
const ROUNDS_COUNT = 3;
const MIN_START = 1;
const MAX_START = 20;
const MIN_STEP = 2;
const MAX_STEP = 5;
const MIN_LENGTH = 5;
const MAX_LENGTH = 10;
const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const start = cli.randomNumber(MIN_START, MAX_START);
  const step = cli.randomNumber(MIN_STEP, MAX_STEP);
  const length = cli.randomNumber(MIN_LENGTH, MAX_LENGTH);
  const progression = generateProgression(start, step, length);
  const hiddenIndex = cli.randomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  // Создаем прогрессию с пропущенным числом
  const progressionWithHidden = progression.map((num, index) => (index === hiddenIndex ? '..' : num));
  const question = progressionWithHidden.join(' ');

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
