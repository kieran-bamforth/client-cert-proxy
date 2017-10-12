const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
  target: {
    url: process.env.TARGET,
    port: process.env.PORT,
    cert: process.env.CERT,
    key: process.env.KEY
  },
}).listen(8000);
