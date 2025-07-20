// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const logMessage = `[${new Date().toISOString()}] - Request received from ${req.ip}`;
  console.log(logMessage); // This will go to stdout/stderr of the container
  res.send('Hello from Dockerized App!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
