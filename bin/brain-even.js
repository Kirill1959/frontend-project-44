#!/usr/bin/env node
import readlineSync from 'readline-sync';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const generateRound = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  const question = `${randomNumber}`;
  const correctAnswer = isEven(randomNumber);
  return [question, correctAnswer];
};

const runGame = (gameDescription, gameRound) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  console.log('');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');

  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = gameRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toString() === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

const startGame = () => runGame(description, generateRound);

startGame();
