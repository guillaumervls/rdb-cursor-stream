var Readable = require('stream').Readable;
var util = require('util');

module.exports = CursorStream;

util.inherits(CursorStream, Readable);

function CursorStream(cursor) {
  if (!(this instanceof CursorStream)) {
    return new CursorStream(cursor);
  }
  Readable.call(this, {
    objectMode: true
  });
  this._cursor = cursor;
}

CursorStream.prototype._read = function read() {
  if (!(this._cursor && this._cursor.hasNext())) {
    this.push(null);
    return;
  }
  this._cursor.next(function (err, item) {
    if (err) {
      this.emit('error', err);
      return;
    }
    if (this.push(item)) {
      process.nextTick(read.bind(this));
    }
  }.bind(this));
};