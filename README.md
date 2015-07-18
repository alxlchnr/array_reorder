array-reorder
==============
Provides a reorder function which reorders the elements of an array according to a given configuration object.

### usage:
```javascript
var array_reorder = require('array_reorder');
var reorderedArray=array_reorder.reorder(['a', 'b'], {0: 1, 1: 0})
// reorderedArray is now ['b','a']
```

### running tests
I'm using mocha and better-objects for my tests