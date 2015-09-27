var onKeyPress = require("../");

var question = 'Tell me your 3 favorite food';
var answer = '';
var lines = 3;

console.log(question);

onKeyPress(process.stdin, each, function () {
  console.log(answer.split(/\n/g));
});

function each (ch, key, done) {
  if (key && key.name == 'enter' && --lines == 0) {
    return done(); // pause stdin & remove event listeners
  }

  answer += ch;
}
