/* eslint-disable no-console */
const { client } = require('./config');

client.connect()
  .then(
    () => { 'connected to the DB'; },
  );
