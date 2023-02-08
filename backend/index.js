const express = require('express');
const app = express();
require('dotenv').config()

// let port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Express server listening on port ${process.env.PORT}`);
});