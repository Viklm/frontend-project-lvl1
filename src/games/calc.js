import buildGameLogic from '../index.js';
import randomOfNum from '../randomOfNum.js';

const description = 'What is the result of the expression?';
const getCalculated = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const getGameData = () => {
  const operators = ['-', '*', '+'];
  const numOne = randomOfNum(0, 30);
  const numTwo = randomOfNum(0, 30);
  const operator = operators[randomOfNum(0, operators.length - 1)];
  const correctAnswer = String(getCalculated(numOne, numTwo, operator));
  const question = `${numOne} ${operator} ${numTwo}`;
  return [question, correctAnswer];
};

const launchGame = () => {
  buildGameLogic(description, getGameData);
};
export default launchGame;
