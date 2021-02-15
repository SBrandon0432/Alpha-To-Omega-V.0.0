const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const path = require('path');

// const connectionString = 'postgres://postgres:postgres@localhost:5432/lego';

const app = express();
const port = 3000;

app.use(express.static(path.resolve('Client', 'Dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const client = new Client({
//   connectionString,
// });

// client.connect((err) => {
//   if (err) {
//     console.log(err);
//     console.log('Server -> DB RED ERROR');
//   } else {
//     console.log('Server -> DB GREEN');
//   }
// });

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});