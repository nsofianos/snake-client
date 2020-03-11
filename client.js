const net = require('net');

const connect = () => {
  //create the connection to server
  const conn = net.createConnection({
    host: '192.168.88.177',
    port: 50541
  });
  //encode the connection to become readable
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server')
    conn.write('Name: N.S');
  });


  //event handler to handle incoming data. In this case we just console log it
  conn.on('data', (data) =>{
    console.log(data);
  });

  return conn;

};


module.exports = connect;