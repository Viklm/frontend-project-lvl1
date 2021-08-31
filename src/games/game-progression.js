import game from '../index.js';
import randomOfNum from '../randomOfNum.js';

const description = 'What number is missing in the progression?';

const getMass = () => {
  const result = [];
  result.push(randomOfNum(50));
  const step = randomOfNum(10);
  for (let i = 0; i < 9; i += 1) {
    let item = result[i];
    item += step;
    result.push(item);
  }
  return result;
};

const getCorrectAnswer = (mas) => {
  const index = randomOfNum(9);
  const item = mas[index];
  mas[index] = '..';
  return item;
};

const getGameData = () => {
  const mas = getMass();
  const question = mas;
  const correctAnswer = String(getCorrectAnswer(mas));
  return [question, correctAnswer];
};

const launchGame = () => {
  game(description, getGameData);
};
export default launchGame;
