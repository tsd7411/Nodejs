const ld = require('lodash');
 const items = [1,[2, [3, [4]]]];
 const newitems = ld.flattenDeep(items);
 console.log(newitems);