const connect = require('./client'); //import connection module
const setupInput = require('./input'); //import input module
const connectObj = connect();
console.log('Connecting...');
setupInput(connectObj);


