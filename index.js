var keypress = require("keypress");

module.exports = onKeyPress;

function onKeyPress (io, each, done) {
  var pause = pauseFn(io, done);

  keypress(io);
  io.setEncoding('utf8');
  io.resume();

  io.on('keypress', function (ch, key) {
    if (key && key.ctrl && (key.name == 'c' || key.name == 'd' )) {
      return pause();
    };

    each(ch, key, pause);
  });
}

function pauseFn (io, callback) {
  return function () {
    io.removeAllListeners('keypress');
    io.pause();
    callback();
  };
}
