import readlineSync from 'readline-sync';
import hello from './cli.js';

const launchGame = () => {
  const name = hello();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const numbers = [15, 6, 7];
  const answers = ['no', 'yes', 'no'];
  for (let question = 0; question <= 2; question += 1) {
    const evenNumOrNot = readlineSync.question(`Question: ${numbers[question]} `);
    console.log(`Your answer: ${evenNumOrNot}`);
    if (evenNumOrNot === answers[question]) {
      console.log('Correct!');
    } else {
      console.log(`'${evenNumOrNot}' is wrong answer ;(. Correct answer was '${answers[question]}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
  return '';
};

export default launchGame;
