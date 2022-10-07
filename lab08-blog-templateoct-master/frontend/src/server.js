require('babel-core/register');
const app = require('./app');

// Start the server and wait for connections
const server = app.listen(3000, () => {
  // Print a nice start up message
  const host = server.address().address;
  const port = server.address().port;
  console.log('Frontend app listening at http://%s:%s', host, port);
});

module.exports = server;
