var http = require('http');
var qs = require('querystring');
var fs = require('fs');

//create server instance
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world!\n');
}).listen(8080);

console.log('Server running on port 8080...');