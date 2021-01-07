// express is a 3rd party module
const express = require('express');
// An "app" is the express function (createAppliction inside the Express module)
// invoked and is an Express appliction
const app = express();

// all is a method, and it takes 2 args:
// 1. route
// 2. callback to run if the route is requested

//  all - i will accept any method
app.all('*', (req, res) => {
  // express handels the basic headers :)
  // express handels the end()
  res.send('<h1>This is home page</h1>');
});

app.listen(3000);
console.log('the server is listening to server 3000');
