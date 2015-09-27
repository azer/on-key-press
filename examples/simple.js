var onKeyPress = require('../');

var question = 'what up?';
var answer = '';

console.log(question);

onKeyPress(process.stdin, each, function () {
  console.log('answer was %s', answer);
});

function each (ch, key, done) {
  if (key && key.name == 'enter') {
    return done(); // pause stdin & remove event listeners
  }

  answer += ch;
};
