require('express')().use(require('express').static('./build')).listen(3000);
console.log('up on 3000');
