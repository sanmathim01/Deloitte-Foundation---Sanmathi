const os = require('os');

console.log('operating syste:', os.platform());
console.log('hostname:', os.hostname());
console.log('number of cpus:', os.cpus().length);
console.log('free memory', os.freemem() / (1024*1024) = 'MB');


