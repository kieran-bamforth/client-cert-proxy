const httpProxy = require('http-proxy');
const https = require('https');
const fs = require('fs');

console.log( process.env.CERT);
console.log( process.env.KEY);

const proxy = httpProxy.createProxyServer({
  target: process.env.TARGET,
  agent: new https.Agent({
    cert: fs.readFileSync(process.env.CERT),
    key: fs.readFileSync(process.env.KEY),
  }),
  secure: false
}).listen(8000);
