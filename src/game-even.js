import readlineSync from 'readline-sync';
import hello from './cli.js';

const launchGame = () => {
  const name = hello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let question = 0; question <= 2; question += 1) {
    const number = Math.round(Math.random() * 100);
    console.log(`Question: ${number}`);
    const evenNumOrNot = readlineSync.question('Your answer: ');
    if ((number % 2 === 0 && evenNumOrNot === 'yes') || (number % 2 === 1 && evenNumOrNot === 'no')) {
      console.log('Correct!');
    } if (number % 2 === 0 && evenNumOrNot !== 'yes') {
      console.log(`'${evenNumOrNot}' is wrong answer ;(. Correct answer was 'yes'.`);
      return console.log(`Let's try again, ${name}!`);
    } if (number % 2 === 1 && evenNumOrNot !== 'no') {
      console.log(`'${evenNumOrNot}' is wrong answer ;(. Correct answer was 'no'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default launchGame;
