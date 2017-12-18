#!/usr/bin/env node

const httpProxy = require('http-proxy');
const https = require('https');
const fs = require('fs');

try {
  fs.accessSync(process.env.PROXY_PATH, fs.constants.F_OK)
  fs.unlink(process.env.PROXY_PATH);
} catch (e) {
};

const proxy = httpProxy.createProxyServer({
  target: process.env.TARGET,
  agent: new https.Agent({
    cert: fs.readFileSync(process.env.CERT),
    key: fs.readFileSync(process.env.KEY),
  }),
  secure: false
}).listen(process.env.PROXY_PATH);
