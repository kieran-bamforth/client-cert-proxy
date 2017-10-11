const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
  target: process.env.TARGET,
  port: process.env.PORT
}).listen(8000); // See (†)


proxy.on('proxyReq', (proxyReq, req, res, options) => {
  debugger;
});
