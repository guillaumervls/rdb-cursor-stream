RethinkDB Cursor Stream
=======================

*Streams from RethinkDB cursors*

# Install

```
npm install rdb-cursor-stream
```

# Use

```javascript
var r = require('rethinkdb');
var CursorStream = require('rdb-cursor-stream');

// Connect to your DB and get a connection
r.connect( //...
//...

// Make a query to get a cursor
r.table('myTable').run(connection, function(err, cursor) {
  var stream = new CursorStream(cursor);
  stream.pipe(//... do whatever you want with your stream !
});
```

Cursor streams are in [`objectMode`](http://nodejs.org/api/stream.html#stream_new_stream_readable_options).

# Liscence

The MIT License (MIT)

Copyright (c) 2014 guillaumervls

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
