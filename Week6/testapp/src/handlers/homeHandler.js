const fs = require('fs');
const path = require('path');
const missingHandler = require('./missingHandler');

function homeHandler(req, res) {
  const filepath = (__dirname, '..', '..', 'test.txt');
}

module.exports = homeHandler;
