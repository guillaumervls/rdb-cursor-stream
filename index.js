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
  this._cursor.next(function (err, item) {
    if (err) {
      if (((err.name === "RqlDriverError") && err.message === "No more rows in the cursor.")) {
        this.push(null);
        return;
      }
      this.emit('error', err);
      return;
    }
    if (this.push(item)) {
      read.bind(this);
    }
  }.bind(this));
};
