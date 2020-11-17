function home(request, response) {
  response.writeHead(200, { 'content-type': 'text/html' });
  response.end(`<h1>Hello world</h1>`);
}

function newUser(request, response) {
  response.writeHead(200, { 'content-type': 'text/html' });
  response.end(`
    <form action="create-user" method="POST">
      <label for="username">Username</label>
      <input id="username" name="username">
      <label for="age">Age</label>
      <input id="age" name="age" type="number">
      <label for="location">Location</label>
      <input id="location" name="location">
      <button type="submit">Create user</button>
    </form>
  `);
}

function createUser(request, response) {
  let body = '';
  request.on('data', (chunk) => (body += chunk));
  request.on('end', () => {
    const searchParams = new URLSearchParams(body);
    const data = Object.fromEntries(searchParams);
    console.log(data); // e.g. { username: 'majadly', age: '28', location: 'Baqa' }
    console.log(data.username); // majadly
    console.log(Object.values(data)); //eg [ 'majadly', '28', 'Baqa' ]
    db.query(
      'INSERT INTO users(username, age, location) VALUES($1, $2, $3)',
      Object.values(data)
    ).catch((e) => {
      console.warn('Error Bruh');
    });
    response.writeHead(200, { 'content-type': 'text/html' });
    response.end(`<h1>Thanks for submitting</h1>`);
  });
}

const db = require('./database/connection');

function home(request, response) {
  db.query('SELECT * FROM users').then((result) => {
    const users = result.rows;
    // create a list item for each user in the array
    const userList = users.map((user) => `<li>${user.username}</li>`);
    response.writeHead(200, { 'content-type': 'text/html' });
    // use .join to turn the array into a string
    response.end(`<ul>${userList.join('')}</ul>`);
  });
}
module.exports = { home, newUser, createUser };
