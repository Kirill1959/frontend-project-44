#!/usr/bin/env node
import readlineSync from 'readline-sync';
import cli from '../src/cli.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const brainProgression = () => {
  const name = cli.welcome();
  console.log(gameDescription);

  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const start = cli.randomNumber(1, 20);
    const step = cli.randomNumber(2, 5);
    const length = cli.randomNumber(5, 10);
    const progression = generateProgression(start, step, length);
    const hiddenIndex = cli.randomNumber(0, length - 1);
    const correctAnswer = String(progression[hiddenIndex]);

    const progressionWithHidden = [...progression];
    progressionWithHidden[hiddenIndex] = '..';
    const question = progressionWithHidden.join(' ');

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

brainProgression();
