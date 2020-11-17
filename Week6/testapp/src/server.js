const http = require('http');
const router = require('./router');
const port = process.env.PORT || 4000;
const hostname = process.env.HOSTNAME || 'localhost';
const server = http.createServer(router);

server.listen(port).on('listening', () => {
  console.log(`Listening on http://${hostname}:${port}`);
});
