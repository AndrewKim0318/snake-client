const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: AK');
    conn.write("Say: I'll destroy you");
    // const moveUp =  function() {
    //   conn.write('Move: up');
    // };
    // setInterval(moveUp, 50);
    
  });

  return conn;
};

module.exports = connect;