const http = require('http');
const hostname = '0.0.0.0'; // Listen on all network interfaces
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Jenkins Docker Build'!);
  res.end('Hello from Automated Jenkins CI/CD!\n');
  res.end('Hello from Automated Jenkins CI/CD - Latest Update! (Build ' + new Date().toLocaleTimeString() + ')\n'); 
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  // Option 1: Keep both messages
  console.log("Hello from my local app!");
  console.log("Hello from GitHub's main!");

  
});
