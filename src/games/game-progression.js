import buildGameLogic from '../index.js';
import randomOfNum from '../randomOfNum.js';

const description = 'What number is missing in the progression?';

const getArithmeticProgression = (firstElement, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(firstElement + step * i);
  }
  return result;
};

const letHideTheElement = (arr, index) => {
  const copyArr = [...arr];
  copyArr[index] = '..';
  return copyArr.join(' ');
};

const getGameData = () => {
  const indexOfHiddenElement = randomOfNum(0, 9);
  const lengthOfProgression = randomOfNum(10, 15);
  const firstElement = randomOfNum(0, 50);
  const step = randomOfNum(1, 10);
  const progression = getArithmeticProgression(firstElement, step, lengthOfProgression);
  const correctAnswer = String(progression[indexOfHiddenElement]);
  const question = letHideTheElement(progression, indexOfHiddenElement);
  return [question, correctAnswer];
};

const launchGame = () => {
  buildGameLogic(description, getGameData);
};
export default launchGame;
