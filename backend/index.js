const express = require('express');
const app = express();

let port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});