var http = require('http');

var server = http.createServer(function(req, res){
    console.log('URL page ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
    res.end('Hi world Привет мир')
});

server.listen(3000, '127.0.0.1')
console.log('We watch 127.0.0.1:3000')