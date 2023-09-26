const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const arr = ["What's your name? Nicknames are also acceptable",
  "Do you think pineapples belong on pizza?",
  "What temperature do you sous-vide your strip loin?",
  "What is your favourite cut of steak?",
  "Whats the best sauce on eggs?"];
const answers = Array(arr.length);
let index = 0;

const makeProfile = function(answers) {
  const result = `My name is ${answers[0]}.  Do pineapples belong on pizza?? I say ${answers[1]}.  When I sous-vide, I prefer a temperature of ${answers[2]}.  My favourite cut of steak is ${answers[3]}.  Last but not least, the best sauce that goes on eggs are ${answers[4]}.`;
  console.log("\n");
  console.log(result);
  return result;
};

const askAQuestion = function() {

  //only ask a question if there is a question to be asked.
  if (index <= arr.length - 1) {
    rl.question(`${arr[index]} `, (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      answers[index] = answer;
      console.log(answers[index]);
      index++;
      askAQuestion();
    });
    return;
  };

  //it failed the index check above, we are done
  rl.close();

  //tell a story!
  makeProfile(answers);
};

askAQuestion();