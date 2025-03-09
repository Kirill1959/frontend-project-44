// src/index.js
import readlineSync from 'readline-sync';
import cli from './cli.js';

const runGame = (description, generateRound) => {
  const name = cli.welcome();
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
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

const generateYesNoRound = (getQuestion, isCorrectAnswer, min, max) => {
  const num = cli.randomNumber(min, max);
  const question = `${getQuestion(num)}`;
  const correctAnswer = isCorrectAnswer(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export { runGame, generateYesNoRound };
