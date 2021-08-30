import hello from '../src/cli.js';
import readlineSync from 'readline-sync';
const round = 2;
const game = (description, getGameData) => {
    const name = hello();
    console.log(description);
    for (let i = 0; i <= round; i += 1) {
        const [question, correctAnswer] = getGameData();
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer === correctAnswer) {
            console.log('Correct!');
          } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
            return console.log(`Let's try again, ${name}!`);
          }
    }
    return console.log(`Congratulations, ${name}!`);
};

export default game;
