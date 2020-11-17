const dataHandler = require('./handlers/dataHandler');
const missingHandler = require('./handlers/missingHandler');
const publicHandler = require('./handlers/publicHandler');
const homeHandler = require('./handlers/homeHandler');

const router = (req, res) => {
  const url = req.url;
  const menthod = req.method;
  if (method === 'GET') {
    if (url === '/') {
      homeHandler(req, res);
    }
  }
  if (method === 'POST') {
  }
};

module.exports = router;
