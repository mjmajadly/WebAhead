const pg = require('pg');
require('dotenv').config();

const connectionString = process.env.DATABASE_URL;
console.log(process.env.DATABASE_URL);
// const connectionString =
//   'postgres://myuser:mypassword@localhost:5432/learn_node_postgres';

const db = new pg.Pool({ connectionString });
db.query('SELECT * FROM USERS').then((result) => console.log(result));
module.exports = db;
