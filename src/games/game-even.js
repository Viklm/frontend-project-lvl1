import game from '../index.js';
import randomOfNum from '../randomOfNum.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = randomOfNum(100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const launchGame = () => {
  game(description, getGameData)
};
export default launchGame;
