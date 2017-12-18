const httpProxy = require('http-proxy');
const https = require('https');
const fs = require('fs');

const proxy = httpProxy.createProxyServer({
  target: process.env.TARGET,
  agent: new https.Agent({
    cert: fs.readFileSync(process.env.CERT),
    key: fs.readFileSync(process.env.KEY),
  }),
  secure: false
}).listen(process.env.PROXY_PATH);
