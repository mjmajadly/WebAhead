const express = require('express');
const app = express();
const path = require('path');
// app come with a use method
// use takes 1 arg (right now)
// 1. middleware

app.use(express.static('public'));
app.all('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/node.html'));
});
app.all('*', (req, res) => {
  res.send('<h1>sorry doesnot work</h1>');
});
app.listen(3000);
console.log('3000 is on');
