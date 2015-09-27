## on-key-press

Listen key press events on command-line

## Install

```bash
$ npm install on-key-press
```

## Usage

```js
var onKeyPress = require('on-key-press')

var question = 'what up?'
var answer = ''

onKeyPress(process.stdin, each, function () {
  console.log('answer was %s', answer);
})

function each (char, key, done) {
  if (key && key.name == 'enter') {
    return done() // pause stdin & remove event listeners
  }

  answer += char;
};
```
