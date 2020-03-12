let connection;

const setupInput = (conn) => { 
  connection = conn;
  const stdin = process.stdin; //establish standard input
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (handleUserInput)); // initialize user input event handler function
  return stdin; //return stdin object
};
  
const handleUserInput = (key) => {  //function to handle user inputs

  if (key === '\u0003') { 
    process.exit(); //exit if user hits ctrl+C
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'p') {
    connection.write("Say: 'i am best snek'");
  }
};
  
module.exports = setupInput;