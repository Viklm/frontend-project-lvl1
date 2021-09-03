import buildGameLogic from '../index.js';
import randomOfNum from '../randomOfNum.js';

const description = 'Find the greatest common divisor of given numbers.';
const getGreatestCommonDivisor = (num1, num2) => {
  let result = 0;
  for (let i = 1; i <= num1 || i <= num2; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
};

const getGameData = () => {
  const numOne = randomOfNum(1, 50);
  const numTwo = randomOfNum(1, 50);
  const correctAnswer = String(getGreatestCommonDivisor(numOne, numTwo));
  const question = `${numOne} ${numTwo}`;
  return [question, correctAnswer];
};

const launchGame = () => {
  buildGameLogic(description, getGameData);
};
export default launchGame;
