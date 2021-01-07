const express = require('express');
const app = express();

// app object has a few methods:
// HTTP verbs! REST verbs!
// CRUD app cooresponence!
// 1. get - READ
// - DEFAULT for all browsers is get.
// 2. post - CREATE
// 3. delete - DELETE
// 4. put - UPDATE
// 5. all - i will accept any method

// Take 2 args:
// 1. path
// 2. callback to run if an HTTP request that matchs THIS verb
// is made to the path in #1
app.get('/', (req, res) => {
  res.send('<h1>welcome to home page GET</h1>');
});
app.post('/', (req, res) => {
  res.send('<h1>welcome to home page POST</h1>');
});
app.listen(3000);
console.log('listening');
