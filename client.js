const net = require('net');
const { IP, PORT } = require('./constants');
const connect = () => {
  //create the connection to server
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  //encode the connection to become readable
  conn.setEncoding('utf8');

  conn.on('connect', () => { //when server detects that we have connected...
    console.log('Successfully connected to game server'); //log a confirmation message
    conn.write('Name: N.S'); //tell the server our name
  });

  conn.on('error', (data) => { 
    console.log('connection ended', data);
    process.exit();

  });


  conn.on('data', (data) =>{ //when server recieves any data...
    console.log(data); //log that data
  });
  conn.on('end', ()=>{
    console.log('ended');
    process.exit();
  })
  return conn; //return connection object

};


module.exports = connect;