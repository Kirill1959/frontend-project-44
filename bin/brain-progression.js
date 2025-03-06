#!/usr/bin/env node
import readlineSync from 'readline-sync';

const gameDescription = 'What number is missing in the progression?';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const brainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const start = getRandomNumber(1, 20);
    const step = getRandomNumber(2, 5);
    const length = getRandomNumber(5, 10);
    const progression = generateProgression(start, step, length);
    const hiddenIndex = getRandomNumber(0, length - 1);
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
