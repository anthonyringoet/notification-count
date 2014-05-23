# notification-count

Keep track of notifications in your title

```
var N = require('notification-count');

// create instance
// optional arguments:
// - count
// - el
// - left
// - right

var n = new N();

// add 1 or optional argument
n.add();

// subtract 1 or optional argument
n.subtract();

// set a specific value
n.set();

// set the initial value
// which is 0 or the value you chose yourself
n.default();
```