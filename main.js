const httpProxy = require('http-proxy');

httpProxy.createProxyServer({
  target: process.env.TARGET,
  port: process.env.PORT
}).listen(8000); // See (†)


httpProxy.on('proxyReq', (proxyReq, req, res, options) => {
});
