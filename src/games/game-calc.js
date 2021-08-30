import game from '../index.js';
import randomOfNum from '../randomOfNum.js';

const description = 'What is the result of the expression?';
const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    case '*':
      return (num1 * num2);
    default:
      return null;
  }
};

const getGameData = () => {
  const operators = ['*', '-', '+'];
  const numOne = randomOfNum(20);
  const numTwo = randomOfNum(20);
  const operator = operators[randomOfNum(2)];
  const correctAnswer = String(calculation(numOne, numTwo, operator));
  const question = `${numOne} ${operator} ${numTwo}`;
  return [question, correctAnswer];
};

const launchGame = () => {
  game(description, getGameData);
};
export default launchGame;
