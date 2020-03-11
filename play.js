const connect = require('./client'); //import our connect code


console.log('Connecting...');
connect(); // function that connects us to server

const setupInput = () => { 
  const stdin = process.stdin; //establish standard input
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  const handleUserInput = () => {  //function to handle user inputs
    stdin.on('data', (key) => { //event handler for user input
      if (key === '\u0003') { 
        process.exit(); //exit if user hits ctrl+C
      }
    });
  };
  handleUserInput(); // initialize user input event handler function
  return stdin; //return stdin object
};

setupInput(); //setup user input


