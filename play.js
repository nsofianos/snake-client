const net = require('net');

const connect = () => {
  //create the connection to server
  const conn = net.createConnection({
    host: '192.168.88.177',
    port: 50541
  });
  //encode the connection to become readable
  conn.setEncoding('utf8');

  //event handler to handle incoming data. In this case we just console log it
  conn.on('data', (data) =>{
    console.log(data);
  });

  return conn;

};

console.log('Connecting...');
connect();