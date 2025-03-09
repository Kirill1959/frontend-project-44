#!/usr/bin/env node
import { runGame, generateYesNoRound } from '../src/index.js';

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const isEven = (num) => num % 2 === 0;

const getQuestion = (num) => num;

const generateRound = () => generateYesNoRound(getQuestion, isEven, MIN_NUMBER, MAX_NUMBER);

runGame(DESCRIPTION, generateRound);
