var http = require('http'),
    httpProxy = require('http-proxy');
//
// Create your proxy server and set the target in the options.
//
httpProxy.createProxyServer({
  target: process.env.TARGET,
  port: process.env.PORT
}).listen(8000); // See (†)


httpProxy.on('proxyReq', (proxyReq, req, res, options) => {
});
